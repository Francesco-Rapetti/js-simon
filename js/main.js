let numbers = [];
const numbersElement = document.getElementById("numbers");
const userNumbersContainer = document.getElementById("userNumbersContainer");
const resultMessage = document.getElementById("resultMessage");
let win = true;
let userNumbers = [];
let userGuessed = [];

for (let i = 0; i < 5; i++) {
    let element = Math.floor(Math.random() * 99) + 1;
    while (numbers.includes(element)) {
        element = Math.floor(Math.random() * 99) + 1;
    }
    numbers.push(element);
    i < 4 ? numbersElement.innerHTML += element + " - " : numbersElement.innerHTML += element;
}

console.log(numbers);

setTimeout(() => {
    numbersElement.classList.add("d-none");
}, 5*1000);

setTimeout(() => {
    guessNumbers(numbers);
}, 5.1*1000);

function guessNumbers(array) {
    // numbersElement.classList.add("d-none");
    for (let i = 0; i < array.length; i++) {
        let userNumber = parseInt(prompt("Inserisci un numero da 1 a 99"));
        while (isNaN(userNumber) || userNumber == null || userNumber < 1 || userNumber > 99) {
            alert("numero non valido");
            userNumber = parseInt(prompt("Inserisci un numero da 1 a 99"));
        }
        userNumbers.push(userNumber);
        if (array.includes(userNumber)) {
            userGuessed.push(true);
        } else {
            userGuessed.push(false);
            win = false;
        }
    }
    numbersElement.classList.remove("d-none");
    for (let i = 0; i < userNumbers.length; i++) {
        if (userGuessed[i]) {
            userNumbersContainer.innerHTML += `<h1 class="text-success">${userNumbers[i]}</h1>`
        } else {
            userNumbersContainer.innerHTML += `<h1 class="text-danger">${userNumbers[i]}</h1>`
        }
    }
    if (win) {
        resultMessage.innerHTML = "Hai vinto!";
        resultMessage.classList.add("text-success");
    } else {
        resultMessage.innerHTML = "Hai perso!";
        resultMessage.classList.add("text-danger");
    }
    resultMessage.classList.remove("d-none");
    userNumbersContainer.classList.remove("d-none");
}