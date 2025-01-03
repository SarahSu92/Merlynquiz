import { getNextQuestion } from "./nextQuestionLogic";
import { startTimer } from './timer';

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
export function handleStartGame(): void {
  console.log("Game started!");
  startTimer(); // Start the timer when the button is clicked
  
  // Elements to animate
  const startGameButton = document.getElementById(
    "start-game-btn",
  ) as HTMLButtonElement;
  const welcomeMessage = document.getElementById("welcome") as HTMLElement;
  const questionContainer = document.querySelector(
    ".question-container",
  ) as HTMLElement;
  const questionPhrase = document.getElementById("question") as HTMLElement;
  const flagImage = document.querySelector(".flag") as HTMLElement;
  const timer = document.getElementById("timer") as HTMLElement;

  // Add fade-out animation to the Start Game button and welcome message
  startGameButton?.classList.add("fade-out");
  welcomeMessage?.classList.add("fade-out");

  // After fade-out completes, hide the Start Game button and welcome message
  setTimeout(() => {
    startGameButton.style.display = "none";
    welcomeMessage.style.display = "none";

    // Update the first question
    const firstQuestion = getNextQuestion();
    if (firstQuestion) {
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

    // Fade in the question, flag and alternatives.
    questionContainer.style.display = "flex";
    questionPhrase.style.display = "flex";
    flagImage.style.display = "flex";
    timer.style.display = "flex";


    questionContainer.classList.add("fade-in");
    questionPhrase.classList.add("fade-in");
    flagImage.classList.add("fade-in");
    timer.classList.add("fade-in");

    // Ensure all elements are ready for the next fade-out after fade-in completes
    setTimeout(() => {
      questionContainer.classList.remove("fade-in");
      questionPhrase.classList.remove("fade-in");
      flagImage.classList.remove("fade-in");
      timer.classList.remove("fade-in");
    }, 300); // Match the fade-in duration
  }, 300); // Match the fade-out duration
}
