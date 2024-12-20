import "./style.scss";

import { questions, Question } from "./questionsData";
//////////////////////////////////////////////////////////////////////////////////////////////////////
// Import "fetchQuestions" function from "fetchQuestionsData.ts" file.
import { fetchQuestions } from "./fetchQuestionsData";
// Import everything needed from 'result'
import {
  IScore,
  IResult,
  score,
  updateScoreContainer,
  displayResultContainer,
  incrementScore,
} from "./result";

// Get the questions data
const questions = fetchQuestions();

// Loop through the questions array and log the data in the console
questions.forEach((question: Question) => {
  console.log(
    `Country: ${question.name}`,
    `Flag Image: ${question.flag}`,
    `Alternatives: ${question.alternative1}, ${question.alternative2}, ${question.alternative3}`,
  );
});

/*
  Function to get a random question from the available questions,
  ensuring no repetition of previously shown questions.
 */
function getRandomQuestion() {
  const usedQuestions: Set<number> = new Set();
  const remainingQuestions = questions.filter(
    (_, index) => !usedQuestions.has(index),
  );

  // Pick a random question from the remaining questions
  const randomIndex = Math.floor(Math.random() * remainingQuestions.length);
  const randomQuestion = remainingQuestions[randomIndex];

  // Mark the selected question as used by adding its index to the 'usedQuestions' set
  usedQuestions.add(questions.indexOf(randomQuestion));

  // Log the data of the randomly selected question to the console
  console.log(
    `-Country: ${randomQuestion.name}`,
    `-Flag Image: ${randomQuestion.flag}`,
    `-Alternatives: ${randomQuestion.alternative1}, ${randomQuestion.alternative2}, ${randomQuestion.alternative3}`,
  );
}

// Create "Next" button (Temporary button)
const nextButton = document.createElement("button");
nextButton.textContent = "Next";
document.body.appendChild(nextButton);

// Variable to count how many times the "Next" button has been clicked
let clickCount = 0;

// Event listener for the "Next" button
nextButton.addEventListener("click", () => {
  clickCount++;
  // If the click count is 10 or less, show a new random question
  if (clickCount <= 10) {
    getRandomQuestion();
  }
  // If the click count exceeds 10, log "The End" and stop further clicks
  else if (clickCount === 11) {
    console.log("The End");
  }
});
////////////////////////////////////////////////////////////////////////////////////////////

// Create the alternatives answers buttons and the play again button
const questionContainer = document.createElement("section");

questionContainer.innerHTML = `
  <div class="answer-container">
        <label class="answer-quiz">
          <input type="radio" id="option1" name="quiz" /> Alternativ 1
        </label>
        <label class="answer-quiz">
          <input type="radio" id="option2" name="quiz" /> Alternativ 2
        </label>
        <label class="answer-quiz">
          <input type="radio" id="option3" name="quiz" /> Alternativ 3
        </label>
      </div>
      <button class="play-again-btn">Play Again</button>

`;

document.body.appendChild(questionContainer);
// ===============================================================================
// ================== score & function for answer selection ======================
// ===============================================================================
/*
let score = 0;
function checkAnswer(selected: string, correct: string) {
  if (selected === correct) score++;
}
*/
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

// _______________________________________________________________________________

// ============================================================================
/*Lägga in gissa landet med hjälp av flaggor.
10 * 10 frågor.
En ruta som visar resultat, frågor med rätt svar.
Skapa ett quiz med minst 20 frågor
Varje fråga ska ha 3 svarsalternativ och endast 1 svarsalternativ ska vara korrekt
Frågorna ska presenteras i slumpmässig ordning, och du ska visa 10 frågor per spelomgång
Om användaren väljer att spela igen, så ska inte samma 10 frågor komma upp på nytt
Du ska få poäng för rätt svar
Det ska bara visas en fråga åt gången på skärmen
Det ska finnas en tidräkning (uppåt). Tidräkningen ska stanna när alla frågor har besvarats.
Det ska visas en bekräftelseruta som visar hur många frågor spelaren svarade rätt på (av totalt antal frågor), och hur lång tid det tog.
Varje person ska ha gjort minst två pull requests.*/
// ==============================================================================================================

//create score section
//Points and correct answers
//create innerHTML and add style

//Create result
//Points and time
//innerHTML

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
