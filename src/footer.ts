import { questions } from "./questionsData";

// Skapa footer-elementet
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

// Lägg till footern i DOM
document.body.appendChild(footer);

const answeredCountElement = document.getElementById("answered-count")!;
const totalQuestionsElement = document.getElementById("total-questions")!;
const progressBarElement = document.querySelector(".progress") as HTMLElement;
const progressIconElement = document.querySelector(
  ".progress-icon",
) as HTMLElement;

let totalQuestions = questions.length;
let answeredQuestions = 0;

// Uppdatera totalantalet frågor
export function setTotalQuestions(maxQuestions: number) {
  totalQuestions = maxQuestions;
  totalQuestionsElement.textContent = totalQuestions.toString();
}

// Funktion för att uppdatera fotern
export function updateFooterProgress() {
  answeredQuestions++;
  const progressPercentage = (answeredQuestions / totalQuestions) * 100;

  // Uppdatera antal besvarade frågor
  answeredCountElement.textContent = answeredQuestions.toString();

  // Uppdatera progress-barens bredd
  progressBarElement.style.width = `${progressPercentage}%`;

  // Flytta ikonen
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
  console.log("Footer progress bar reset");
}
