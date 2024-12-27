// Define types for Score and Result
export interface IResult {
  points: number;
  correctAnswers: number;
  time: number; // Time in seconds
}

// Initialize the result
export const score: IResult = {
  points: 0,
  correctAnswers: 0,
  time: 0,
};

// Function to create and update the Result container
export function updateScoreContainer(): void {
  const resultContainer = document.querySelector("#result") as HTMLElement;

  if (resultContainer) {
    resultContainer.innerHTML = `
      <h2>Result</h2>
      <p><strong>Points:</strong> ${score.points}</p>
      <p><strong>Correct Answers:</strong> ${score.correctAnswers}</p>
      <p><strong>Time:</strong> ${score.time} seconds</p>
    `;
  } else {
    console.error("Result container not found");
  }
}







