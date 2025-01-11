import { questions } from "../data/questionsData";

// Create footer-element
const footer = document.createElement("footer");
footer.className = "footer";
footer.style.display = "none";

footer.innerHTML = `
  <div class="progress-bar">
    <div class="progress"></div>
    <div class="progress-icon">🚗</div>
  </div>
  <div class="question-counter">
Questions <span id="answered-count">0</span>/<span id="total-questions">10</span>
  </div>
  <div class="copyright">
    &copy; 2025 Marlyn Quiz
  </div>
`;

// Adding footern in DOM
document.body.appendChild(footer);

const answeredCountElement = document.getElementById("answered-count")!;
const totalQuestionsElement = document.getElementById("total-questions")!;
const progressBarElement = document.querySelector(".progress") as HTMLElement;
const progressIconElement = document.querySelector(
  ".progress-icon",
) as HTMLElement;

let totalQuestions = questions.length;
let answeredQuestions = 0;

// Uppdate total amount of questions
export function setTotalQuestions(maxQuestions: number) {
  totalQuestions = maxQuestions;
  totalQuestionsElement.textContent = totalQuestions.toString();
}

// Function to uppdate the footer
export function updateFooterProgress() {
  answeredQuestions++;
  const progressPercentage = (answeredQuestions / totalQuestions) * 100;

  // Update the amount of answered question
  answeredCountElement.textContent = answeredQuestions.toString();

  // Uppdate progress-bar filling based on answered question
  progressBarElement.style.width = `${progressPercentage}%`;

  // update the position of the icon
  progressIconElement.style.left = `${progressPercentage}%`;
}

// Function to reset the progress bar and answered count
export function resetFooterProgress() {
  answeredQuestions = 0; // Reset answered questions count

  // Reset the progress bar width and icon position
  progressBarElement.style.width = "0%";
  progressIconElement.style.left = "0%";

  // Reset the question counter
  answeredCountElement.textContent = "0";
}
