import "./style.scss";

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
