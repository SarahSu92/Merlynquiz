// import { incrementClickCount, clickCount } from "./gameStatus";
import { Question, questions } from "./questionsData";
import { updateFooterProgress, setTotalQuestions } from "./footer";

// Function to create a generator for random questions
function createQuestionGenerator() {
  const usedIndices: number[] = [];
  const maxQuestions = 10; // Limit to 10 questions

  // Sätt maxantalet frågor i footern
  setTotalQuestions(maxQuestions);



  return function getNextQuestion(): Question | null {
    if (usedIndices.length === maxQuestions) {
      return null; // No more questions
    }
    let randomIndex: number;
    do {
      randomIndex = Math.floor(Math.random() * questions.length);
    } while (usedIndices.includes(randomIndex));
    usedIndices.push(randomIndex);
    return questions[randomIndex];
  };
}

export const getNextQuestion = createQuestionGenerator();

function resetRadioButton(radioButton: HTMLInputElement) {
  radioButton.checked = false; // Uncheck the radio button
}

function handleRadioButtonChange(
  radioButtons: NodeListOf<HTMLInputElement>,
): void {
  setTimeout(() => {
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
      const question = getNextQuestion();
      if (question) {
        updateFooterProgress(); // Uppdatera fotern här

        // Update the UI with the new question and answers
        flagImage?.setAttribute("src", question.flag);
        option1Label.textContent = question.alternative1;
        option2Label.textContent = question.alternative2;
        option3Label.textContent = question.alternative3;

        radioButtons.forEach(resetRadioButton);
      } else {
        console.log("The End! No more questions available.");
      }

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
