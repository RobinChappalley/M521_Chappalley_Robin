import Answer from "./answer.js";
import Game from "./game.js";

const game = new Game(5);
let positionOfFocus;
const guess = [];

const handleFocus = (id) => {
  document.getElementById(`row-0--${id}`).focus();
};
document.querySelector(".board").addEventListener("click", (e) => {
  e.target.children[0].toggleAttribute("inert");
  positionOfFocus = 0;
  handleFocus(positionOfFocus);

  document.querySelector("form").addEventListener("keyup", (e) => {
    console.log("quelque chose a été tapé !");
    handleTyping(e);
  });
});

const handleTyping = (e) => {
  if (isAlphaNumericKey(e.key)) {
    guess[positionOfFocus] = e.key;
    positionOfFocus++;
    handleFocus(positionOfFocus);
  } else if (e.key === "ArrowLeft") {
    handleFocus(positionOfFocus - 1);
    positionOfFocus--;
  } else if (e.key === "ArrowRight") {
    handleFocus(positionOfFocus + 1);
    positionOfFocus++;
  }
};

const isAlphaNumericKey = (key) => {
  return /^([\x30-\x39]|[\x61-\x7a])$/i.test(key);
};
