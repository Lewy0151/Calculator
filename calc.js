// Clearing Display
function clearResult() {
    document.getElementById("result").value = "";
}

// Appending A Character To Display
function appendCharacter(char) {
    document.getElementById("result").value += char;
}

// Calculating And Displaying The Result
function calculateResult() {
    const display = document.getElementById("result");

    try {
        display.value = eval(display.value);
    } catch {
        display.value = "Error";
    }
}
