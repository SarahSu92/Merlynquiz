import "./main.scss";
import { restartGame } from "./restartGame";

// Import questions arry and Question interface from 'questionsData'
import { questions, Question } from "./questionsData";

// Import everything needed from 'result'
import {
  // IScore,
  IResult,
  score,
  updateScoreContainer,
  displayResultContainer,
  incrementScore,
} from "./result";

//Function to create a generator for random questions,ensuring no repetition of previously shown questions.
function createQuestionGenerator() {
  const usedIndices: number[] = []; // Array to track used indices

  return function getNextQuestion(): Question | null {
    // Check if all questions are used
    if (usedIndices.length === questions.length) {
      return null; // Return `null` when no more questions are left
    }
    // Generate a unique random index
    let randomIndex: number;
    do {
      randomIndex = Math.floor(Math.random() * questions.length);
    } while (usedIndices.includes(randomIndex)); // Ensure it's not already used
    usedIndices.push(randomIndex); // Mark this index as used
    return questions[randomIndex]; // Return the selected random question
  };
}

// Create an instance of the question generator
const getNextQuestion = createQuestionGenerator();

// Create "Next" button
const nextButton = document.createElement("button");
nextButton.textContent = "Next";
document.body.appendChild(nextButton);

// Event listener for the "Next" button
nextButton.addEventListener("click", () => {
  const question = getNextQuestion(); // Fetch the next question

  if (question) {
    document.getElementById("flag-image")?.setAttribute("src", question.flag); // Update the flag image
    document.getElementById("option1")!.nextElementSibling!.textContent =
      question.alternative1; // Update the first alternative
    document.getElementById("option2")!.nextElementSibling!.textContent =
      question.alternative2; // Update the secound alternative
    document.getElementById("option3")!.nextElementSibling!.textContent =
      question.alternative3; // Update the third alternative
  } else {
    console.log("The End! No more questions available.");
    nextButton.disabled = true; // Disable the button to prevent further clicks
  }
});
// ===============================================================================

// Create the alternatives answers buttons and the play again button
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
  <button class="play-again-btn">Play Again</button>
`;

//add the question container to the document
document.body.appendChild(questionContainer);


//add event listener for function restartGame when we click the button play-again
const playAgainButton = document.querySelector(
  ".play-again-btn",
) as HTMLButtonElement;

if (playAgainButton) {
  playAgainButton.addEventListener("click", () => {
    restartGame(resetUsedQuestions, resetClickCount, resetTimer);
  });
}

const usedQuestions = new Set<number>();

//clear all the used questions
function resetUsedQuestions() {
  usedQuestions.clear();
}

//reset the question counter
function resetClickCount() {
  clickCount = 0;
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

// Skapa footer-elementet
const footer = document.createElement("footer");
footer.className = "footer";

footer.innerHTML = `
  <div class="progress-bar">
    <div class="progress"></div>
    <div class="progress-icon">🚗</div>
  </div>
  <div class="question-counter">
    Frågor: <span id="answered-count">0</span>/<span id="total-questions">0</span>
  </div>
      <div class="copyright">
      &copy; 2024 Marlyn Quiz
    </div>
`;

// Lägg till footern i DOM
document.body.appendChild(footer);

const answeredCountElement = document.getElementById("answered-count")!;
const totalQuestionsElement = document.getElementById("total-questions")!;
const progressBarElement = document.querySelector(".progress") as HTMLElement;
const progressIconElement = document.querySelector(".progress-icon") as HTMLElement;

const totalQuestions = questions.length;
let answeredQuestions = 0;

// Sätt totalantalet frågor i footern
totalQuestionsElement.textContent = totalQuestions.toString();

// Uppdatera framstegsindikatorn
function updateFooterProgress() {
  answeredQuestions++;
  const progressPercentage = (answeredQuestions / totalQuestions) * 100;

  // Uppdatera antal besvarade frågor
  answeredCountElement.textContent = answeredQuestions.toString();

  // Uppdatera progress-barens bredd
  progressBarElement.style.width = `${progressPercentage}%`;

  // Flytta ikonen
  progressIconElement.style.left = `${progressPercentage}%`;
}

// Anropa `updateFooterProgress` varje gång en fråga besvaras
nextButton.addEventListener("click", () => {
  const question = getNextQuestion();
  if (question) {
    updateFooterProgress(); // Uppdatera footern
  }
});
