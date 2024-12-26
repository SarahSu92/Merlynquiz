import "./main.scss";
import { restartGame } from "./restartGame";
//import { clickCount, incrementClickCount, resetClickCount } from "./gameStatus";
//  TODO: check if this line should be removed
import { resetClickCount } from "./gameStatus";
import { createStartGameButton } from "./startGameButton&Logic";

import { initializeAutoNextQuestion } from "./nextQuestionLogic";

// Import everything needed from 'result' module
import {
  // IScore, //  TODO: check if this line should be removed
  IResult,
  score,
  updateScoreContainer,
  displayResultContainer,
  incrementScore,
} from "./result";

//================================================================================================
// Create the alternatives answers buttons and the play again button
const questionContainer = document.createElement("section");
questionContainer.classList.add("question-container");
questionContainer.style.display = "none";
questionContainer.innerHTML = `
  <div class="answer-container">
    <input type="radio" id="option1" name="quiz" />
    <label class="answer-quiz" for="option1">Alternativ 1</label>

    <input type="radio" id="option2" name="quiz" />
    <label class="answer-quiz" for="option2">Alternativ 2</label>

    <input type="radio" id="option3" name="quiz" />
    <label class="answer-quiz" for="option3">Alternativ 3</label>
  </div>
  <button class="play-again-btn">Play Again</button>
`;

//add the question container to the document
document.body.appendChild(questionContainer);

// Get all the radio buttons for the quiz
const radioButtons = document.querySelectorAll(
  'input[name="quiz"]',
) as NodeListOf<HTMLInputElement>;
// Initialize the logic for showing the next question when an answer is selected
initializeAutoNextQuestion(radioButtons);

//================================================================================================
// Add the "Start Game" button to the document
const startGameButton = createStartGameButton();
document.body.appendChild(startGameButton);

//================================================================================================
const usedQuestions = new Set<number>();

//add event listener for function restartGame when we click the button play-again
const playAgainButton = document.querySelector(
  ".play-again-btn",
) as HTMLButtonElement;

if (playAgainButton) {
  playAgainButton.addEventListener("click", () => {
    restartGame(resetUsedQuestions, resetTimer);
    resetClickCount();
  });
}

//clear all the used questions
function resetUsedQuestions() {
  usedQuestions.clear();
}

//reset the timer
function resetTimer() {
  console.log("Timer reset.");
}

// ===============================================================================
// ===============================================================================
// ===============================================================================

// _______________________________________________________________________________

// ===============================================================================
// ====== array to store the used questions and function to avoid reuse ==========
// ===============================================================================
/*
let usedIndices: number[] = [];

function getNextQuestion() {
  let index;
  do {
    index = Math.floor(Math.random() * questions.length);
  } while (usedIndices.includes(index));
  usedIndices.push(index);
  return questions[index];
}
*/
// ===============================================================================
// ===============================================================================
// ===============================================================================

// Example usage of imported functions
incrementScore(5); // Increment the score by 5 points

// Display the quiz result
const result: IResult = {
  points: score.points,
  correctAnswers: score.correctAnswers,
  time: 120, // Assume 120 seconds as time taken
};
displayResultContainer(result);

// Update the score container manually (if needed)
updateScoreContainer();
