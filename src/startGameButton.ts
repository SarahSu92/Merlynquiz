import { initializeAutoNextQuestion } from "./nextQuestion";

// Function to start the game
export function createStartGameButton(): HTMLButtonElement {
  // Create the "Start Game" button
  const startGameButton = document.createElement("button");
  startGameButton.id = "start-game-btn";
  startGameButton.textContent = "Start Game";
  startGameButton.classList.add("start-game-btn");

  // Event listener for the "Start Game" button
  startGameButton.addEventListener("click", handleStartGame);

  return startGameButton;
}

// Function to handle the "Start Game" button click
function handleStartGame(): void {
  console.log("Game started!");

  // Hide the "Start Game" button
  const startGameButton = document.getElementById(
    "start-game-btn",
  ) as HTMLButtonElement;
  if (startGameButton) {
    startGameButton.style.display = "none";
  }

  // Display the question container and radio buttons
  const questionContainer = document.querySelector(
    ".question-container",
  ) as HTMLElement;
  questionContainer.style.display = "flex";
  // Get the radio buttons for the quiz
  const radioButtons = document.querySelectorAll(
    'input[name="quiz"]',
  ) as NodeListOf<HTMLInputElement>;

  // Initialize the auto-next-question logic
  initializeAutoNextQuestion(radioButtons);
}
