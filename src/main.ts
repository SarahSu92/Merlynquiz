import "./main.scss";
import { restartGame } from "./playAgainLogic";
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

//================================================================================================
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
// Add event listener to the "Play Again" button

const playAgainButton = document.getElementById("play-again-btn");
if (playAgainButton) {
  playAgainButton.addEventListener("click", () => restartGame());
}
// ===============================================================================
// After the quiz is finished, update the result container
updateScoreContainer();
// Call the function to set up label keyboard events
setupLabelKeyboardEvents();
// Update the score container manually (if needed)
updateScoreContainer();
// ===============================================================================
