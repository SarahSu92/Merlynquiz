import "./main.scss";
import { restartGame } from "./restartGame";
//import { clickCount, incrementClickCount, resetClickCount } from "./gameStatus";
//  TODO: check if this line should be removed
import { resetClickCount } from "./gameStatus";
import { createStartGameButton } from "./startGameButton&Logic";

import { initializeAutoNextQuestion } from "./nextQuestionLogic";
import { updateScoreContainer } from "./result";
import { setupLabelKeyboardEvents } from "./a11y";

//================================================================================================
// Create the alternatives answers buttons and the play again button
const questionContainer = document.createElement("section");
questionContainer.classList.add("question-container");
questionContainer.style.display = "none";
questionContainer.innerHTML = `
  <div class="answer-container">
    <input type="radio" id="option1" name="quiz" tabindex="0" />
    <label class="answer-quiz" for="option1" tabindex="0">Alternativ 1</label>

    <input type="radio" id="option2" name="quiz" tabindex="0" />
    <label class="answer-quiz" for="option2" tabindex="0">Alternativ 2</label>

    <input type="radio" id="option3" name="quiz" tabindex="0" />
    <label class="answer-quiz" for="option3" tabindex="0" >Alternativ 3</label>
  </div>
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

// After the quiz is finished, update the result container
updateScoreContainer();
// Call the function to set up label keyboard events
setupLabelKeyboardEvents();

// Update the score container manually (if needed)
updateScoreContainer();

// // Skapa footer-elementet
// const footer = document.createElement("footer");
// footer.className = "footer";

// footer.innerHTML = `
//   <div class="progress-bar">
//     <div class="progress"></div>
//     <div class="progress-icon">🚗</div>
//   </div>
//   <div class="question-counter">
//     Frågor: <span id="answered-count">0</span>/<span id="total-questions">0</span>
//   </div>
//       <div class="copyright">
//       &copy; 2024 Marlyn Quiz
//     </div>
// `;

// // Lägg till footern i DOM
// document.body.appendChild(footer);

// const answeredCountElement = document.getElementById("answered-count")!;
// const totalQuestionsElement = document.getElementById("total-questions")!;
// const progressBarElement = document.querySelector(".progress") as HTMLElement;
// const progressIconElement = document.querySelector(".progress-icon") as HTMLElement;

// const totalQuestions = questions.length;
// let answeredQuestions = 0;

// // Sätt totalantalet frågor i footern
// totalQuestionsElement.textContent = totalQuestions.toString();

// // Uppdatera framstegsindikatorn
// function updateFooterProgress() {
//   answeredQuestions++;
//   const progressPercentage = (answeredQuestions / totalQuestions) * 100;

//   // Uppdatera antal besvarade frågor
//   answeredCountElement.textContent = answeredQuestions.toString();

//   // Uppdatera progress-barens bredd
//   progressBarElement.style.width = `${progressPercentage}%`;

//   // Flytta ikonen
//   progressIconElement.style.left = `${progressPercentage}%`;
// }

// // Anropa `updateFooterProgress` varje gång en fråga besvaras
// nextButton.addEventListener("click", () => {
//   const question = getNextQuestion();
//   if (question) {
//     updateFooterProgress(); // Uppdatera footern
//   }
// });
