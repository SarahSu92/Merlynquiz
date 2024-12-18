import "./style.scss";
// Import everything needed from 'result'
import {
    IScore,
    IResult,
    score,
    updateScoreContainer,
    displayResultContainer,
    incrementScore,
  } from './result';
  
  // Example usage of imported functions
  incrementScore(5); // Increment the score by 5 points
  
  // Display the quiz result
  const result: IResult = {
    points: score.points,
    correctAnswers: score.correctAnswers,
    time: 120, // Assume 120 seconds as time taken
  };
  displayResultContainer(result);
  
  // Update the score container manually (if needed)
  updateScoreContainer();
  