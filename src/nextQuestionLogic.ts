// import { incrementClickCount, clickCount } from "./gameStatus";
import { Question, questions } from "./questionsData";

import { updateFooterProgress, setTotalQuestions } from "./footer";
import { validateAnswer } from "./answerValidation";

let currentQuestion: Question | null = null;

import { stopTimer } from './timer';
import { handleEndGame } from "./finishedGameLogic";

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
    stopTimer();
    handleEndGame(); // No more questions, end the game
  }
}

// Function to reset a radio button (uncheck it)
function resetRadioButton(radioButton: HTMLInputElement) {
  radioButton.checked = false; // Uncheck the radio button
}

export function handleRadioButtonChange(
  radioButtons: NodeListOf<HTMLInputElement>,
): void {
  const selectedOption = Array.from(radioButtons).find((rb) => rb.checked);
  if (selectedOption && currentQuestion) {
    const isCorrect = validateAnswer(selectedOption.nextElementSibling?.textContent || "", currentQuestion);
    console.log(isCorrect ? "Correct answer!" : "Wrong answer!");
  } else {
    console.log("No answer selected or currentQuestion is null.");
  }

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
        currentQuestion = question; // Uppdatera frågan
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