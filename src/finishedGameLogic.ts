// Import the library to launch fireworks
import confetti from "canvas-confetti"; // Importing the library

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
  const gameOverSection = document.getElementById("game-over") as HTMLElement;

  // Add fade-out animation to the question container,question phrase, flag image and timer
  questionContainer?.classList.add("fade-out");
  questionPhrase?.classList.add("fade-out");
  flagImage?.classList.add("fade-out");
  timer?.classList.add("fade-out");

  // Wait for the fade-out animation to complete before hiding elements
  setTimeout(() => {
    // Hide the question, flag, and timer
    questionContainer.style.display = "none";
    questionPhrase.style.display = "none";
    flagImage.style.display = "none";
    timer.style.display = "none";

    // Display the game over section with fade-in animation
    gameOverSection.style.display = "block";
    gameOverSection.classList.add("fade-in");

    setTimeout(() => {
      // Start fireworks!!!
      launchFireworks();
    }, 400); // Match fade-in duration
  }, 400); // Match fade-out duration
}

// Function to launch fireworks
function launchFireworks(): void {
  const duration = 8 * 1000; // Fireworks duration (8 seconds)
  const end = Date.now() + duration;
  const colors = ["#ff0000", "#00ff00", "#0000ff", "#ff7700", "#ff0077"];

  (function frame() {
    // Launch multiple fireworks at random positions
    confetti({
      particleCount: 5,
      angle: Math.random() * 360,
      spread: 55,
      origin: {
        x: Math.random(), // Random horizontal position
        y: Math.random(), // Random vertical position
      },
      colors: colors,
    });

    // Keep launching fireworks until the duration is complete
    if (Date.now() < end) {
      requestAnimationFrame(frame);
    }
  })();
}
