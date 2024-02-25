let currentInput = "0";

function appendValue(value) {
  if (currentInput === "0") {
    currentInput = value;
  } else {
    currentInput += value;
  }
  document.getElementById("display").innerText = currentInput;
}

function calculate() {
  let result;
  try {
    result = eval(currentInput);
    currentInput = result.toString();
  } catch (error) {
    result = "Error";
  }
  document.getElementById("display").innerText = result;
}
