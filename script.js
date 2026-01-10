const keys = document.querySelectorAll(".calculator__key");
const input = document.querySelector(".input");
const output = document.querySelector("#equations");

input.addEventListener("click", (e) => {
  function addContent() {
    if (!e.target.matches("button")) return;
    inputValue = e.target.textContent;

    if (inputValue === "delete") {
      output.value = output.value.slice(0, -1);
      return;
    } else if (inputValue === "="){
      output.value = Function('return ' + output.value)();
      return;
    } else if (inputValue === "Ac"){
      output.value = "";
      return;
    }



    output.value += inputValue;
  }

  addContent();
});
