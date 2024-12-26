import { getNextQuestion } from "./nextQuestion";

// Function to start the game
export function createStartGameButton(): HTMLButtonElement {
  // Create the "Start Game" button
  const startGameButton = document.createElement("button");
  startGameButton.id = "start-game-btn";
  startGameButton.textContent = "Start Game";
  startGameButton.classList.add("start-game-btn");
  startGameButton.ariaLabel = "Start Game";

  // Event listener for the "Start Game" button
  startGameButton.addEventListener("click", handleStartGame);

  return startGameButton;
}

// Function to handle the "Start Game" button click
function handleStartGame(): void {
  console.log("Game started!");

  // Fade out the "Start Game" button and welcome message
  const startGameButton = document.getElementById(
    "start-game-btn",
  ) as HTMLButtonElement;
  const welcomeMessage = document.getElementById("welcome") as HTMLElement;

  startGameButton.classList.add("fade-out");
  welcomeMessage.classList.add("fade-out");

  // Wait 400ms before hiding elements and showing the next content
  setTimeout(() => {
    // Hide the "Start Game" button and welcome message
    startGameButton.style.display = "none";
    welcomeMessage.style.display = "none";

    // Display the question container and radio buttons
    const questionContainer = document.querySelector(
      ".question-container",
    ) as HTMLElement;
    questionContainer.style.display = "flex";

    // Display the question phrase and flag image (Initially set them to display: none)
    const questionPhrase = document.getElementById("question") as HTMLElement;
    const flagImage = document.querySelector(".flag") as HTMLElement;
    const option1Label = document.querySelector(
      'label[for="option1"]',
    ) as HTMLElement;
    const option2Label = document.querySelector(
      'label[for="option2"]',
    ) as HTMLElement;
    const option3Label = document.querySelector(
      'label[for="option3"]',
    ) as HTMLElement;
    const timer = document.getElementById("timer") as HTMLElement; // Timer element
    const score = document.getElementById("score") as HTMLElement; // Score element

    // Ensure these elements are set to visible before applying the fade-in class
    questionPhrase.style.display = "flex";
    flagImage.style.display = "flex";
    option1Label.style.display = "flex";
    option2Label.style.display = "flex";
    option3Label.style.display = "flex";
    timer.style.display = "flex";
    score.style.display = "flex";

    // Add fade-in class to the question phrase, flag image, and labels
    questionPhrase.classList.add("fade-in");
    flagImage.classList.add("fade-in");
    option1Label.classList.add("fade-in");
    option2Label.classList.add("fade-in");
    option3Label.classList.add("fade-in");
    timer.classList.add("fade-in");
    score.classList.add("fade-in");

    // Fetch and display the first question
    const firstQuestion = getNextQuestion();
    if (firstQuestion) {
      // Update the flag image and alternatives with the first question
      const flagImageElement = document.getElementById(
        "flag-image",
      ) as HTMLImageElement;
      flagImageElement.setAttribute("src", firstQuestion.flag);

      document.getElementById("option1")!.nextElementSibling!.textContent =
        firstQuestion.alternative1;
      document.getElementById("option2")!.nextElementSibling!.textContent =
        firstQuestion.alternative2;
      document.getElementById("option3")!.nextElementSibling!.textContent =
        firstQuestion.alternative3;
    }
  }, 400); // Wait for the fade-out animation to complete before showing next elements
}
