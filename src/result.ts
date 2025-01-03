import { questions } from "./questionsData.ts";

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

// Define a type for Question
export interface Question {
  questionText: string;
  answer: string;
  points: number;
}

let currentQuestionIndex = 0; // Track the current question index
let questionStartTime: number; // To track the start time of the current question

// Function to handle time in minutes and seconds
function formatTime(seconds: number): string {
  const minutes = Math.floor(seconds / 60); // Full minutes
  const remainingSeconds = Math.floor(seconds % 60); // Remaining seconds
  return `${minutes} minute${minutes !== 1 ? 's' : ''} ${remainingSeconds} second${remainingSeconds !== 1 ? 's' : ''}`;
}

// Function to start a question and timer
function startQuestion(): void {
  const currentQuestion = questions[currentQuestionIndex];

  console.log(currentQuestion); // Display the question
  questionStartTime = Date.now(); // Capture the start time

  // Simulate waiting for user input (this should be replaced with real input method in a UI)
  setTimeout(() => {
    const userAnswer = '4'; // Simulating the user input, change based on user response
    handleAnswer(userAnswer);
  }, 5000); // Simulate answering after 5 seconds
}

// Function to handle the answer and update score
function handleAnswer(userAnswer: string): void {
  const currentQuestion = questions[currentQuestionIndex];
  const timeTaken = (Date.now() - questionStartTime) / 1000; // Calculate time in seconds

  // Update total time
  score.time += timeTaken;

  // Check if the answer is correct
  if (userAnswer === currentQuestion.answer) {
    console.log('Correct Answer!');
    score.points += currentQuestion.points;
    score.correctAnswers += 1;
  } else {
    console.log('Incorrect Answer');
  }

  // Move to the next question
  currentQuestionIndex++;

  // Update the score container
  updateScoreContainer();

  // If there are more questions, start the next one, otherwise finish the quiz
  if (currentQuestionIndex < questions.length) {
    startQuestion();
  } else {
    console.log('Quiz completed!');
    updateScoreContainer(); // Update final results
  }
}

// Function to create and update the Result container
export function updateScoreContainer(): void {
  const resultContainer = document.querySelector("#result") as HTMLElement;

  if (resultContainer) {
    resultContainer.innerHTML = `
      <h2>Results</h2>
      <p><strong>Points:</strong> ${score.points}</p>
      <p><strong>Correct Answers:</strong> ${score.correctAnswers}</p>
      <p><strong>Time:</strong> ${formatTime(score.time)}</p>
    `;
  } else {
    console.error("Result container not found");
  }
}

// Start the quiz when the page is ready
//startQuestion();

