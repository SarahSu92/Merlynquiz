// Define types for Score and Result
export interface IScore {
    points: number;
    correctAnswers: number;
  }
  
  export interface IResult {
    points: number;
    correctAnswers: number;
    time: number;
  }
  
  // Initialize the score
  export let score: IScore = {
    points: 0,
    correctAnswers: 0,
  };
  
  // Function to create and update the score container
  export function updateScoreContainer(): void {
    let scoreContainer = document.querySelector('#score') as HTMLElement;
  
    if (scoreContainer) {
      scoreContainer.innerHTML = `
        <h2>Score</h2>
        <p><strong>Points:</strong> ${score.points}</p>
        <p><strong>Correct Answers:</strong> ${score.correctAnswers}</p>
      `;
    } else {
      console.error('Score container not found');
    }
  }
  
  // Function to create and display the result container
  export function displayResultContainer(result: IResult): void {
    let resultContainer = document.querySelector('#result') as HTMLElement;
  
    if (resultContainer) {
      resultContainer.innerHTML = `
        <h2>Quiz Result</h2>
        <p><strong>Points:</strong> ${result.points}</p>
        <p><strong>Correct Answers:</strong> ${result.correctAnswers}</p>
        <p><strong>Time Taken:</strong> ${result.time} seconds</p>
      `;
      resultContainer.style.display = 'block';
    } else {
      console.error('Result container not found');
    }
  }
  
  // Function to increment the score
  export function incrementScore(pointsToAdd: number): void {
    score.points += pointsToAdd;
    score.correctAnswers += 1;
    updateScoreContainer();
  }
  
  // Initialize the containers and simulate quiz completion
  document.addEventListener('DOMContentLoaded', () => {
    // Create the score container
    updateScoreContainer();
  });
  
  

   
