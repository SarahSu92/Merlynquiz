import "./style.scss";
import typescriptLogo from "./typescript.svg";
import viteLogo from "/vite.svg";
import { setupCounter } from "./counter.ts";

//////////////////////////////////////////////////////////////////////////////////////////////////////
// Import "fetchQuestions" function from "fetchQuestionsData.ts" file.
import { fetchQuestions } from "./fetchQuestionsData";

// Get the questions data
const questions = fetchQuestions();

// Loop through the questions array and log the data in the console
questions.forEach((question) => {
  console.log(
    `Country: ${question.name}`,
    `Flag Image: ${question.flag}`,
    `Alternatives: ${question.alternative1}, ${question.alternative2}, ${question.alternative3}`,
  );
});
/////////////////////////////////////////////////////////////////////////////////////////////////////
document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  <div>
    <a href="https://vite.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://www.typescriptlang.org/" target="_blank">
      <img src="${typescriptLogo}" class="logo vanilla" alt="TypeScript logo" />
    </a>
    <h1>Vite + TypeScript</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite and TypeScript logos to learn more
    </p>
  </div>
`;

setupCounter(document.querySelector<HTMLButtonElement>("#counter")!);

/*Lägga in gissa landet med hjälp av flaggor. 
10 * 10 frågor.
En ruta som visar resultat, frågor med rätt svar. 
Skapa ett quiz med minst 20 frågor
Varje fråga ska ha 3 svarsalternativ och endast 1 svarsalternativ ska vara korrekt
Frågorna ska presenteras i slumpmässig ordning, och du ska visa 10 frågor per spelomgång
Om användaren väljer att spela igen, så ska inte samma 10 frågor komma upp på nytt
Du ska få poäng för rätt svar
Det ska bara visas en fråga åt gången på skärmen
Det ska finnas en tidräkning (uppåt). Tidräkningen ska stanna när alla frågor har besvarats.
Det ska visas en bekräftelseruta som visar hur många frågor spelaren svarade rätt på (av totalt antal frågor), och hur lång tid det tog.
Varje person ska ha gjort minst två pull requests./*
