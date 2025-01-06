import { startTimer, stopTimer, resetTimer } from './timer.js';
//import { questions } from "./questionsData.ts";

export interface IResult {
  points: number;
  correctAnswers: number;
  time: number; // Time in seconds
}

export const score: IResult = {
  points: 0,
  correctAnswers: 0,
  time: 0,
};

// Add event listeners for buttons
document.getElementById("start-btn")?.addEventListener("click", startTimer);
document.getElementById("stop-btn")?.addEventListener("click", stopTimer);
document.getElementById("reset-btn")?.addEventListener("click", resetTimer);


// Function to update the Result container
export function updateScoreContainer(): void {
  const resultContainer = document.querySelector("#result") as HTMLElement;

  if (resultContainer) {
    resultContainer.innerHTML = `
      <h2>Results</h2>
      <p><strong>Points:</strong> ${score.points}</p>
      <p><strong>Correct Answers:</strong> ${score.correctAnswers}</p>
      <p><strong>Time:</strong>  ${formatTime(score.time)}</p>
    `;
  } else {
    console.error("Result container not found");
  }
}


/**
 * Formats time as "MM:SS".
 * @param seconds - The number of seconds elapsed.
 * @returns A formatted time string.
 */
function formatTime(seconds: number): string {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;
  return `${minutes.toString().padStart(2, "0")}:${remainingSeconds.toString().padStart(2, "0")}`;
}
