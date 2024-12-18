import "./style.scss";
import typescriptLogo from "./typescript.svg";
import viteLogo from "/vite.svg";
import { setupCounter } from "./counter.ts";

//////////////////////////////////////////////////////////////////////////////////////////////////////
// Import "fetchQuestions" function from "fetchQuestionsData.ts" file.
import { fetchQuestions } from "./fetchQuestionsData";

// Get the questions data
const questions = fetchQuestions();

// Loop through the questions array and log the data in the console
questions.forEach((question) => {
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

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  <div>
    <a href="https://vite.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://www.typescriptlang.org/" target="_blank">
      <img src="${typescriptLogo}" class="logo vanilla" alt="TypeScript logo" />
    </a>
    <h1>Vite + TypeScript</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite and TypeScript logos to learn more
    </p>
  </div>
`;

setupCounter(document.querySelector<HTMLButtonElement>("#counter")!);
