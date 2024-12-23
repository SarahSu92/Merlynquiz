import "./main.scss";
import { restartGame } from "./restartGame";
//import { clickCount, incrementClickCount, resetClickCount } from "./gameStatus";
//  TODO: check if this line should be removed
import { resetClickCount } from "./gameStatus";
import { initializeNextQuestionButton } from "./nextQuestionButton";

// Import everything needed from 'result'

import {
  // IScore,
  IResult,
  score,
  updateScoreContainer,
  displayResultContainer,
  incrementScore,
} from "./result";

// Create the alternatives answers buttons, the play again button and the next question button
const questionContainer = document.createElement("section");

questionContainer.innerHTML = `
  <div class="answer-container">
    <input type="radio" id="option1" name="quiz" />
    <label class="answer-quiz" for="option1">Alternativ 1</label>

    <input type="radio" id="option2" name="quiz" />
    <label class="answer-quiz" for="option2">Alternativ 2</label>

    <input type="radio" id="option3" name="quiz" />
    <label class="answer-quiz" for="option3">Alternativ 3</label>
  </div>
    <button id="next-question-btn"class="next-question-btn">Next Question</button>
  <button class="play-again-btn">Play Again</button>
`;

//add the question container to the document
document.body.appendChild(questionContainer);

// Initialize the "Next Question" button
initializeNextQuestionButton();

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
