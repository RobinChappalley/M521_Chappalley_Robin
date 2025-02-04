class Answer {
  form;
  #LettersInTheWord = 5;
  constructor() {
    this.form = document.createElement("form");
    for (let i = 0; i < this.#LettersInTheWord; i++) {
      this.form.appendChild(this.setField(i));
    }
    this.addSubmit();
  }
  addSubmit() {
    const submitButton = document.createElement("input");
    submitButton.type = "submit";
    submitButton.setAttribute("hidden", "");
    this.form.append(submitButton);
    this.form.setAttribute("inert", "");
    document.querySelector(".board").append(this.form);
    return;
  }
  setField(id) {
    const field = document.createElement("input");
    field.classList.add("letter");
    field.type = "text";
    field.name = `letter-${id}`;
    field.id = `row-0--${id}`;
    field.setAttribute("maxlength", "1");
    return field;
  }
  toggle() {
    this.form.toggleAttribute("inert");
  }
}
export default Answer;
