import { incrementClickCount, clickCount } from "./gameStatus";
import { Question, questions } from "./questionsData";
import { handleEndGame } from "./finishedGameLogic";

// Function to create a generator for random questions
function createQuestionGenerator() {
  const usedIndices: number[] = [];
  const maxQuestions = 10; // Limit to 10 questions

  // Function that returns the next random question or null if all questions are used
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

// Function to show the next question and update the UI
function showNextQuestion(radioButtons: NodeListOf<HTMLInputElement>) {
  // Increment the click count for tracking user progress
  incrementClickCount();
  console.log("Click count:", clickCount);

  // Fetch the next question using the generator
  const question = getNextQuestion();

  if (question) {
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
    handleEndGame(); // No more questions, end the game
  }
}

// Function to reset a radio button (uncheck it)
function resetRadioButton(radioButton: HTMLInputElement) {
  radioButton.checked = false; // Uncheck the radio button
}

// Function to handle what happens when a radio button is selected
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
        // Cleanup the fade-in class
        flagImage?.classList.remove("fade-in");
        option1Label.classList.remove("fade-in");
        option2Label.classList.remove("fade-in");
        option3Label.classList.remove("fade-in");
      }, 300); // Match the fade-in duration
    }, 300); // Match the fade-out duration
  }, 800); // Wait for initial delay before fade-out
}

// Function to initialize the logic for automatically showing the next question
export function initializeAutoNextQuestion(
  radioButtons: NodeListOf<HTMLInputElement>,
) {
  // Add event listeners to each radio button
  function addRadioEventListeners(radioButton: HTMLInputElement) {
    // When a radio button is changed, trigger the handleRadioButtonChange function
    radioButton.addEventListener("change", () =>
      handleRadioButtonChange(radioButtons),
    );
  }

  // Loop through each radio button and attach the event listener
  radioButtons.forEach(addRadioEventListeners);
}
