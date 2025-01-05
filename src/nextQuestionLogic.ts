import { incrementClickCount, clickCount } from "./gameStatus";
import { IQuestion, questions } from "./questionsData";
import { updateFooterProgress, setTotalQuestions } from "./footer";
import { validateAnswer } from "./answerValidation";
import { stopTimer } from "./timer";
import { handleEndGame } from "./finishedGameLogic";

const currentQuestion: IQuestion | null = null;

/// Function to create a generator for random questions
function createQuestionGenerator() {
  let usedIndices: number[] = [];
  const maxQuestions = 10; // Limit to 10 questions

  // Set the total questions in the footer
  setTotalQuestions(maxQuestions);

  // Function to reset the usedIndices array
  function resetGenerator() {
    usedIndices = [];
    console.log("Questions array reset");
  }

  // Function that returns the next random question or null if all questions are used
  function getNextQuestion(): IQuestion | null {
    if (usedIndices.length === maxQuestions) {
      return null; // No more questions
    }
    let randomIndex: number;
    do {
      randomIndex = Math.floor(Math.random() * questions.length);
    } while (usedIndices.includes(randomIndex));
    usedIndices.push(randomIndex);
    return questions[randomIndex];
  }

  return {
    getNextQuestion,
    resetGenerator,
  };
}

const questionGenerator = createQuestionGenerator();
export const getNextQuestion = questionGenerator.getNextQuestion;
export const resetQuestionGenerator = questionGenerator.resetGenerator;

// Function to show the next question and update the UI
export function showNextQuestion(radioButtons: NodeListOf<HTMLInputElement>) {
  // Increment the click count for tracking user progress
  incrementClickCount();
  console.log("Click count:", clickCount);

  // Fetch the next question using the generator
  const question = getNextQuestion();

  if (question) {
    console.log("Current question:", question);
    // Update the UI with the new question and answers
    const flagImage = document.getElementById("flag-image");
    const option1Label = document.querySelector('label[for="option1"]')!;
    const option2Label = document.querySelector('label[for="option2"]')!;
    const option3Label = document.querySelector('label[for="option3"]')!;

    // Set the new flag image and answer options
    flagImage?.setAttribute("src", question.flag);
    option1Label.textContent = question.alternative1;
    option2Label.textContent = question.alternative2;
    option3Label.textContent = question.alternative3;

    // Reset all radio buttons (uncheck them) for the next question
    radioButtons.forEach(resetRadioButton);
  } else {
    stopTimer();
    handleEndGame(); // No more questions, end the game
  }
}

// Function to reset a radio button (uncheck it)
export function resetRadioButton(radioButton: HTMLInputElement) {
  radioButton.checked = false; // Uncheck the radio button
}

export function handleRadioButtonChange(
  radioButtons: NodeListOf<HTMLInputElement>,
): void {
  const selectedOption = Array.from(radioButtons).find((rb) => rb.checked);
  if (selectedOption && currentQuestion) {
    const isCorrect = validateAnswer(
      selectedOption.nextElementSibling?.textContent || "",
      currentQuestion,
    );
    console.log(isCorrect ? "Correct answer!" : "Wrong answer!");
  } else {
    console.log("No answer selected or currentQuestion is null.");
  }

  setTimeout(() => {
    // Update the footer progress after a short delay
    updateFooterProgress();
    // Add the fade-out class to the current question elements
    const flagImage = document.getElementById("flag-image");
    const option1Label = document.querySelector('label[for="option1"]')!;
    const option2Label = document.querySelector('label[for="option2"]')!;
    const option3Label = document.querySelector('label[for="option3"]')!;

    flagImage?.classList.add("fade-out");
    option1Label.classList.add("fade-out");
    option2Label.classList.add("fade-out");
    option3Label.classList.add("fade-out");

    setTimeout(() => {
      // Show the next question
      showNextQuestion(radioButtons);

      // Add fade-in class for the new question elements
      flagImage?.classList.remove("fade-out");
      flagImage?.classList.add("fade-in");
      option1Label.classList.remove("fade-out");
      option1Label.classList.add("fade-in");
      option2Label.classList.remove("fade-out");
      option2Label.classList.add("fade-in");
      option3Label.classList.remove("fade-out");
      option3Label.classList.add("fade-in");

      setTimeout(() => {
        flagImage?.classList.remove("fade-in");
        option1Label.classList.remove("fade-in");
        option2Label.classList.remove("fade-in");
        option3Label.classList.remove("fade-in");
      }, 300); // Match the fade-in duration
    }, 300); // Match the fade-out duration
  }, 800); // Wait for initial delay before fade-out
}

export function initializeAutoNextQuestion(
  radioButtons: NodeListOf<HTMLInputElement>,
) {
  function addRadioEventListeners(radioButton: HTMLInputElement) {
    radioButton.addEventListener("change", () =>
      handleRadioButtonChange(radioButtons),
    );
  }

  radioButtons.forEach(addRadioEventListeners);
}
