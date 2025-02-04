import Answer from "./answer.js";
class Game {
  possibleAnswers;
  answers;
  constructor(number) {
    this.possibleAnswers = number;
    this.answers = [];
    this.createAnswer();
  }
  createAnswer() {
    for (let i = 0; i < this.possibleAnswers; i++) {
      this.answers.push(new Answer());
    }
  }
}
export default Game;
