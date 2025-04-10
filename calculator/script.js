let digits = document.querySelectorAll(".digit");
let displayednumber = 9999999999999999999;
document.getElementById("answer").innerText = displayednumber;

let entries = [];



digits.forEach((digit) => {
    digit.addEventListener('click', () => {
        entries.push(digit.innerText);
        document.getElementById("entries").innerText = entries.join(' ');
    })
});