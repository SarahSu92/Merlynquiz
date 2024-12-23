import { incrementClickCount, clickCount } from "./gameStatus";
import { Question, questions } from "./questionsData";

// Function to create a generator for random questions
function createQuestionGenerator() {
  const usedIndices: number[] = [];

  return function getNextQuestion(): Question | null {
    if (usedIndices.length === questions.length) {
      return null; // No more questions
    }
    let randomIndex: number;
    do {
      randomIndex = Math.floor(Math.random() * questions.length);
    } while (usedIndices.includes(randomIndex));
    usedIndices.push(randomIndex);
    return questions[randomIndex];
  };
}

const getNextQuestion = createQuestionGenerator();

// Function to initialize the "Next Question" button logic
export function initializeNextQuestionButton() {
  const nextQuestionButton = document.getElementById(
    "next-question-btn",
  ) as HTMLButtonElement;
  // Event listener for the "nextQuestionButton" button
  nextQuestionButton.addEventListener("click", () => {
    incrementClickCount();
    console.log("Click count:", clickCount);

    const question = getNextQuestion(); // Fetch the next question

    if (question) {
      document.getElementById("flag-image")?.setAttribute("src", question.flag); // Update flag image
      document.getElementById("option1")!.nextElementSibling!.textContent =
        question.alternative1; // Update first alternative
      document.getElementById("option2")!.nextElementSibling!.textContent =
        question.alternative2; // Update second alternative
      document.getElementById("option3")!.nextElementSibling!.textContent =
        question.alternative3; // Update third alternative
    } else {
      console.log("The End! No more questions available.");
      nextQuestionButton.disabled = true; // Disable the button to prevent further clicks
    }
  });
}
