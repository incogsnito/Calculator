const input = document.querySelector(".input");
const output = document.querySelector("#equations");

input.addEventListener("click", (e) => {
  function addContent() {
    if (!e.target.matches("button")) return;
    inputValue = e.target.textContent;

    if (inputValue === "delete") {
      output.value = output.value.slice(0, -1);
      return;
    } else if (inputValue === "=") {
      output.value = Function("return " + output.value)()
      return;

      if (output.value === "Infinity") {
        output.value = "";
        alert("Can't divide by zero");
        return;
      }
    } else if (inputValue === "Ac") {
      output.value = "";
      return;
    }

    output.value += inputValue;
  }

  addContent();
});

output.addEventListener("keydown", (e) => {
function keys() {
    if (!e.key === "Enter");
    if (e.key === "Enter") {
      output.value = Function("return " + output.value)();
      e.preventDefault();
    }  
  }

  keys();
});
