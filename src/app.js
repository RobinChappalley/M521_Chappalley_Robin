import Answer from "./answer.js";

const answer = new Answer();
const answer1 = new Answer();
const answer2 = new Answer();

document.querySelector(".board").addEventListener("click", (e) => {
  e.target.children[0].toggleAttribute("inert");
  document.getElementById("row-0--0").focus();
});
