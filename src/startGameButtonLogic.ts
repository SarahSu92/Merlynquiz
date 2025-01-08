import {
  showNextQuestion,
  initializeAutoNextQuestion,
} from "./nextQuestionLogic";
import { startTimer } from "./timer";

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

export function handleStartGame(): void {
  console.log("Game started!");
  startTimer(); // Start the timer when the button is clicked

  // DOM Elements to animate
  const startGameButton = document.getElementById(
    "start-game-btn",
  ) as HTMLButtonElement;
  const welcomeMessage = document.getElementById("welcome") as HTMLElement;
  const questionContainer = document.querySelector(
    ".question-container",
  ) as HTMLElement;
  const questionPhrase = document.getElementById("question") as HTMLElement;
  const flagImage = document.querySelector(".flag") as HTMLElement;
  const flagsIcon = document.getElementById("flags-icon") as HTMLElement;
  const timer = document.getElementById("timer") as HTMLElement;
  const footer = document.querySelector(".footer") as HTMLElement;


  // Add fade-out animation to the Start Game button and welcome message
  startGameButton?.classList.add("fade-out");
  welcomeMessage?.classList.add("fade-out");
  flagsIcon?.classList.add("fade-out");

  // After fade-out completes, hide the Start Game button and welcome message
  setTimeout(() => {
    startGameButton.style.display = "none";
    welcomeMessage.style.display = "none";
    flagsIcon.style.display = "none";
    

    // Fade in the question, flag and alternatives
    questionContainer.style.display = "block";
    questionPhrase.style.display = "block";
    flagImage.style.display = "flex";
    timer.style.display = "flex";
    footer.style.display = "flex";

    questionContainer.classList.add("fade-in");
    questionPhrase.classList.add("fade-in");
    flagImage.classList.add("fade-in");
    timer.classList.add("fade-in");
    footer.classList.add("fade-in");

    // Fetch and display the first question
    setTimeout(() => {
      questionContainer.classList.remove("fade-in");
      questionPhrase.classList.remove("fade-in");
      flagImage.classList.remove("fade-in");
      timer.classList.remove("fade-in");

      const radioButtons = document.querySelectorAll(
        'input[type="radio"]',
      ) as NodeListOf<HTMLInputElement>;
      showNextQuestion(radioButtons); // Show the first question
      initializeAutoNextQuestion(radioButtons); // Set up event listeners
    }, 300); // Match the fade-in duration
  }, 300); // Match the fade-out duration
}
