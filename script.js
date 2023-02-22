let input = document.getElementById("input");

function add(value) {
  input.value += value;
}

function calculate() {
  try {
    input.value = eval(input.value);
  } catch (error) {
    if (error instanceof SyntaxError) {
      input.value = "Error";
    }
  }
}

function clearInput() {
  input.value = "";
}

function reset() {
  input.value = "";
}

function handleKeyPress(event) {
  if (event.keyCode === 13) {
    calculate();
  }
}