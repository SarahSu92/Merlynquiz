// Function to handle the ending of the game page

export function handleEndGame(): void {
  console.log("Game ended!");

  // Elements to animate
  const questionContainer = document.querySelector(
    ".question-container",
  ) as HTMLElement;
  const questionPhrase = document.getElementById("question") as HTMLElement;
  const flagImage = document.querySelector(".flag") as HTMLElement;
  const timer = document.getElementById("timer") as HTMLElement;

  // Add fade-out animation to the question, flag, timer, and score
  questionContainer?.classList.add("fade-out");
  questionPhrase?.classList.add("fade-out");
  flagImage?.classList.add("fade-out");
  timer?.classList.add("fade-out");

  // After fade-out completes, hide the question, flag, timer, and score
  questionContainer.style.display = "none";
  questionPhrase.style.display = "none";
  flagImage.style.display = "none";
  timer.style.display = "none";

  // Display the game over message
  const gameOverMessage = document.getElementById("game-over") as HTMLElement;
  gameOverMessage.style.display = "block";
  gameOverMessage.classList.add("fade-in");
}
