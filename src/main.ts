import "./style.scss";
import { setupCounter } from "./counter.ts";

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
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

setupCounter(document.querySelector<HTMLButtonElement>("#counter")!);
