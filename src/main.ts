import "./style.scss";

const questionContainer = document.createElement("section");

questionContainer.innerHTML = `
  <div class="answer-container">
        <label class="answer-quiz">
          <input type="radio" id="option1" name="quiz" /> Alternativ 1
        </label>
        <label class="answer-quiz">
          <input type="radio" id="option2" name="quiz" /> Alternativ 2
        </label>
        <label class="answer-quiz">
          <input type="radio" id="option3" name="quiz" /> Alternativ 3
        </label>
      </div>

`;

document.body.appendChild(questionContainer);

// ===============================================================================
// ================== score & function for answer selection ======================
// ===============================================================================
/*
let score = 0;
function checkAnswer(selected: string, correct: string) {
  if (selected === correct) score++;
}
*/
// ===============================================================================
// ===============================================================================
// ===============================================================================

// _______________________________________________________________________________

// ===============================================================================
// ====== array to store the used questions and function to avoid reuse ==========
// ===============================================================================
/*
let usedIndices: number[] = [];

function getNextQuestion() {
  let index;
  do {
    index = Math.floor(Math.random() * questions.length);
  } while (usedIndices.includes(index));
  usedIndices.push(index);
  return questions[index];
}
*/
// ===============================================================================
// ===============================================================================
// ===============================================================================

// _______________________________________________________________________________

// ============================================================================
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
Varje person ska ha gjort minst två pull requests.*/
// ==============================================================================================================
