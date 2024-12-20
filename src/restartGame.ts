import { score, updateScoreContainer } from "./result";

// function restar the game quiz
export function restartGame(
  resetUsedQuestions: () => void,
  resetClickCount: () => void,
  resetTimer: () => void,
): void {
  score.points = 0;
  score.correctAnswers = 0;

  // uppdate score-container
  updateScoreContainer();

  //reset functions
  resetUsedQuestions();
  resetClickCount();
  resetTimer();

  console.log("The game has been restarted!");
}
