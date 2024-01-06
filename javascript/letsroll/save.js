
let randomNumber = null
let randomNumber2 = null
let randomNumber3 = null
let randomNumber4 = null







let answer = parseInt(prompt("Combien de dés voulez-vous lancer ? (entre 1 & 4)"))
while (!isNaN(answer) && answer === 0 || answer >= 5 || !answer) {
    answer = parseInt(prompt("J'ai dit entre 1 & 4, tu fait exprès ou quoi ?"));
}

if (answer === 1) {
    alert("Let's roll !!")
    const dice1 = document.createElement("div")
    dice1.classList.add("dice")
    dice1.id = "monImage1"
    player.appendChild(dice1)
    rollDice()
} else if (answer === 2) {
    alert("Let's roll !!")
    const dice1 = document.createElement("div")
    dice1.classList.add("dice")
    dice1.id = "monImage1"
    player.appendChild(dice1)
    const dice2 = document.createElement("div")
    dice2.classList.add("dice")
    dice2.id = "monImage2"
    player.appendChild(dice2)
    rollDice()
    rollDice2()
} else if (answer === 3) {
    alert("Let's roll !!")
    const dice1 = document.createElement("div")
    dice1.classList.add("dice")
    dice1.id = "monImage1"
    player.appendChild(dice1)
    const dice2 = document.createElement("div")
    dice2.classList.add("dice")
    dice2.id = "monImage2"
    player.appendChild(dice2)
    const dice3 = document.createElement("div")
    dice3.classList.add("dice")
    dice3.id = "monImage3"
    player.appendChild(dice3)
    rollDice()
    rollDice2()
    rollDice3()
} else if (answer === 4) {
    alert("Let's roll !!")
    const dice1 = document.createElement("div")
    dice1.classList.add("dice")
    dice1.id = "monImage1"
    player.appendChild(dice1)
    const dice2 = document.createElement("div")
    dice2.classList.add("dice")
    dice2.id = "monImage2"
    player.appendChild(dice2)
    const dice3 = document.createElement("div")
    dice3.classList.add("dice")
    dice3.id = "monImage3"
    player.appendChild(dice3)
    const dice4 = document.createElement("div")
    dice4.classList.add("dice")
    dice4.id = "monImage4"
    player.appendChild(dice4)
    rollDice()
    rollDice2()
    rollDice3()
    rollDice4()
} else {
    console.log("Quelque chose de terrible c'est produit")
}






// ----------- Les fonctions des dés -------------


function rollDice() {

    randomNumber = Math.round(Math.random() * 5) +1;

    if (randomNumber === 1) {
        document.querySelector(".dice")
        monImage1.style.backgroundPosition = "600px 0"
    }
    if (randomNumber === 2) {
        document.querySelector(".dice")
        monImage1.style.backgroundPosition = "500px 0"
    }
    if (randomNumber === 3) {
        document.querySelector(".dice")
        monImage1.style.backgroundPosition = "400px 0"
    }
    if (randomNumber === 4) {
        document.querySelector(".dice")
        monImage1.style.backgroundPosition = "300px 0"
    }
    if (randomNumber === 5) {
        document.querySelector(".dice")
        monImage1.style.backgroundPosition = "200px 0"
    }
    if (randomNumber === 6) {
        document.querySelector(".dice")
        monImage1.style.backgroundPosition = "100px 0"
    }

}

function rollDice2() {

    randomNumber2 = Math.round(Math.random() * 5) +1;

    if (randomNumber2 === 1) {
        document.querySelector(".dice")
        monImage2.style.backgroundPosition = "600px 0"
    }
    if (randomNumber2 === 2) {
        document.querySelector(".dice")
        monImage2.style.backgroundPosition = "500px 0"
    }
    if (randomNumber2 === 3) {
        document.querySelector(".dice")
        monImage2.style.backgroundPosition = "400px 0"
    }
    if (randomNumber2 === 4) {
        document.querySelector(".dice")
        monImage2.style.backgroundPosition = "300px 0"
    }
    if (randomNumber2 === 5) {
        document.querySelector(".dice")
        monImage2.style.backgroundPosition = "200px 0"
    }
    if (randomNumber2 === 6) {
        document.querySelector(".dice")
        monImage2.style.backgroundPosition = "100px 0"
    }

}

function rollDice3() {

    randomNumber3 = Math.round(Math.random() * 5) +1;

    if (randomNumber3 === 1) {
        document.querySelector(".dice")
        monImage3.style.backgroundPosition = "600px 0"
    }
    if (randomNumber3 === 2) {
        document.querySelector(".dice")
        monImage3.style.backgroundPosition = "500px 0"
    }
    if (randomNumber3 === 3) {
        document.querySelector(".dice")
        monImage3.style.backgroundPosition = "400px 0"
    }
    if (randomNumber3 === 4) {
        document.querySelector(".dice")
        monImage3.style.backgroundPosition = "300px 0"
    }
    if (randomNumber3 === 5) {
        document.querySelector(".dice")
        monImage3.style.backgroundPosition = "200px 0"
    }
    if (randomNumber3 === 6) {
        document.querySelector(".dice")
        monImage3.style.backgroundPosition = "100px 0"
    }

}

function rollDice4() {

    randomNumber4 = Math.round(Math.random() * 5) +1;

    if (randomNumber4 === 1) {
        document.querySelector(".dice")
        monImage4.style.backgroundPosition = "600px 0"
    }
    if (randomNumber4 === 2) {
        document.querySelector(".dice")
        monImage4.style.backgroundPosition = "500px 0"
    }
    if (randomNumber4 === 3) {
        document.querySelector(".dice")
        monImage4.style.backgroundPosition = "400px 0"
    }
    if (randomNumber4 === 4) {
        document.querySelector(".dice")
        monImage4.style.backgroundPosition = "300px 0"
    }
    if (randomNumber4 === 5) {
        document.querySelector(".dice")
        monImage4.style.backgroundPosition = "200px 0"
    }
    if (randomNumber4 === 6) {
        document.querySelector(".dice")
        monImage4.style.backgroundPosition = "100px 0"
    }

}


console.log(randomNumber)
console.log(randomNumber2)
console.log(randomNumber3)
console.log(randomNumber4)