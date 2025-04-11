let digits = document.querySelectorAll(".digit");
let currentEntry = "";
let previousEntry = "";
let operator = "";
let clear = document.getElementById("clear")
let calculate = document.getElementById("calculate")

document.querySelectorAll(".operator").forEach((op) => {
    op.addEventListener("click", () => {
        if (currentEntry === "") return;
        operator = op.innerText;
        previousEntry = currentEntry;
        currentEntry = "";
        // alert(operator);
    })
})


digits.forEach((digit) => {
    digit.addEventListener("click", () => {
        currentEntry = digit.innerText;  
        // alert(currentEntry + "and" + previousEntry)
        updateDisplay(currentEntry)
    })
})

clear.addEventListener("click", () => {
    currentEntry = '';
    previousEntry = '';
    operator = '';
    updateDisplay('0');
});

calculate.addEventListener("click", () => {
    let result = 89;
    const prev = parseFloat(previousEntry);
    const current = parseFloat(currentEntry);

    if (isNaN(prev) || isNaN(current)) return;

    switch (operator) {
        case '+':
          result = prev + current;
          break;
        case '-':
          result = prev - current;
          break;
        case '×':
          result = prev * current;
          break;
        case '÷':
          result = prev / current;
          break;
        default:
          return;
    }


    currentEntry = result.toString();
    operator = '';
    previousEntry = '';
    updateDisplay(currentEntry);
})


function updateDisplay(value) {
    document.getElementById("answer").innerText = value;
}