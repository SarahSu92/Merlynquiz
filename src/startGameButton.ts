import { getNextQuestion } from "./nextQuestion";

// Function to start the game
export function createStartGameButton(): HTMLButtonElement {
  // Create the "Start Game" button
  const startGameButton = document.createElement("button");
  startGameButton.id = "start-game-btn";
  startGameButton.textContent = "Start Game";
  startGameButton.classList.add("start-game-btn");
  startGameButton.ariaLabel = "Start Game";

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
  // Hide welcome message
  const welcomMessage = document.getElementById("welcome") as HTMLElement;
  welcomMessage.style.display = "none";

  // Display the question container and radio buttons
  const questionContainer = document.querySelector(
    ".question-container",
  ) as HTMLElement;
  questionContainer.style.display = "flex";

  // Display the question phrase
  const questionphrase = document.getElementById("question") as HTMLElement;
  questionphrase.style.display = "flex";

  // Display the flag image
  const flagImage = document.querySelector(".flag") as HTMLElement;
  flagImage.style.display = "flex";

  // Fetch and display the first question
  const firstQuestion = getNextQuestion();
  if (firstQuestion) {
    // Update the flag image and alternatives with the first question
    document
      .getElementById("flag-image")
      ?.setAttribute("src", firstQuestion.flag);
    document.getElementById("option1")!.nextElementSibling!.textContent =
      firstQuestion.alternative1;
    document.getElementById("option2")!.nextElementSibling!.textContent =
      firstQuestion.alternative2;
    document.getElementById("option3")!.nextElementSibling!.textContent =
      firstQuestion.alternative3;
  }
}
