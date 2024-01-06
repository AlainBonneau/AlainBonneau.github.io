// ---------- Déclaration des nombres ----------
let randomNumber = null
let randomNumber2 = null
let randomNumber3 = null
let randomNumber4 = null
let randomNumber5 = null
let randomNumber6 = null
let randomNumber7 = null
let randomNumber8 = null
// ---------------------------------------------


// -------- Question pour l'utilisateur --------
let answer = parseInt(prompt("Combien de dés voulez-vous lancer ? (entre 1 & 4)"))
while (!isNaN(answer) && answer === 0 || answer >= 5 || !answer) {
    answer = parseInt(prompt("J'ai dit entre 1 & 4, tu fait exprès ou quoi ?"));
}
// ---------------------------------------------


const adv = document.createElement("div")
adv.classList.add("board")
adv.id = "dealer"
player.insertAdjacentElement("afterend", adv)



// ---------- Choix de l'utilisateur -----------
if (answer === 1) {
    alert("Let's roll !!")
    const dice1 = document.createElement("div")
    dice1.classList.add("dice")
    dice1.id = "monImage1"
    player.appendChild(dice1)

    const advDice1 = document.createElement("div")
    advDice1.classList.add("dice")
    advDice1.id = "monImage5"
    dealer.appendChild(advDice1)


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

    const advDice1 = document.createElement("div")
    advDice1.classList.add("dice")
    advDice1.id = "monImage5"
    dealer.appendChild(advDice1)
    const advDice2 = document.createElement("div")
    advDice2.classList.add("dice")
    advDice2.id = "monImage6"
    dealer.appendChild(advDice2)


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

    const advDice1 = document.createElement("div")
    advDice1.classList.add("dice")
    advDice1.id = "monImage5"
    dealer.appendChild(advDice1)
    const advDice2 = document.createElement("div")
    advDice2.classList.add("dice")
    advDice2.id = "monImage6"
    dealer.appendChild(advDice2)
    const advDice3 = document.createElement("div")
    advDice3.classList.add("dice")
    advDice3.id = "monImage7"
    dealer.appendChild(advDice3)


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

    const advDice1 = document.createElement("div")
    advDice1.classList.add("dice")
    advDice1.id = "monImage5"
    dealer.appendChild(advDice1)
    const advDice2 = document.createElement("div")
    advDice2.classList.add("dice")
    advDice2.id = "monImage6"
    dealer.appendChild(advDice2)
    const advDice3 = document.createElement("div")
    advDice3.classList.add("dice")
    advDice3.id = "monImage7"
    dealer.appendChild(advDice3)
    const advDice4 = document.createElement("div")
    advDice4.classList.add("dice")
    advDice4.id = "monImage8"
    dealer.appendChild(advDice4)


    rollDice()
    rollDice2()
    rollDice3()
    rollDice4()
} else {
    console.log("Quelque chose de terrible c'est produit")
}
// -----------------------------------------------


// ------------- Paramètrage des dés --------------
function rollDice() {

    randomNumber = Math.round(Math.random() * 5) +1;
    randomNumber5 = Math.round(Math.random() * 5) +1;

    if (randomNumber === 1) {
        document.querySelector(".dice")
        monImage1.style.backgroundPosition = "600px 0"
        
    } if (randomNumber5 === 1) {
        document.querySelector(".dice")
        monImage5.style.backgroundPosition = "600px 0"
    }

    if (randomNumber === 2) {
        document.querySelector(".dice")
        monImage1.style.backgroundPosition = "500px 0"
    } if (randomNumber5 === 2) {
        document.querySelector(".dice")
        monImage5.style.backgroundPosition = "500px 0"
    }

    if (randomNumber === 3) {
        document.querySelector(".dice")
        monImage1.style.backgroundPosition = "400px 0"
    } if (randomNumber5 === 3) {
        document.querySelector(".dice")
        monImage5.style.backgroundPosition = "400px 0"
    }

    if (randomNumber === 4) {
        document.querySelector(".dice")
        monImage1.style.backgroundPosition = "300px 0"
    } if (randomNumber5 === 4) {
        document.querySelector(".dice")
        monImage5.style.backgroundPosition = "300px 0"
    }

    if (randomNumber === 5) {
        document.querySelector(".dice")
        monImage1.style.backgroundPosition = "200px 0"
    } if (randomNumber5 === 5) {
        document.querySelector(".dice")
        monImage5.style.backgroundPosition = "200px 0"
    }

    if (randomNumber === 6) {
        document.querySelector(".dice")
        monImage1.style.backgroundPosition = "100px 0"
    } if (randomNumber5 === 6) {
        document.querySelector(".dice")
        monImage5.style.backgroundPosition = "100px 0"
    }

}

function rollDice2() {

    randomNumber2 = Math.round(Math.random() * 5) +1;
    randomNumber6 = Math.round(Math.random() * 5) +1;

    if (randomNumber2 === 1) {
        document.querySelector(".dice")
        monImage2.style.backgroundPosition = "600px 0"
    } if (randomNumber6 === 1) {
        document.querySelector(".dice")
        monImage6.style.backgroundPosition = "600px 0"
    }

    if (randomNumber2 === 2) {
        document.querySelector(".dice")
        monImage2.style.backgroundPosition = "500px 0"
    } if (randomNumber6 === 2) {
        document.querySelector(".dice")
        monImage6.style.backgroundPosition = "500px 0"
    }

    if (randomNumber2 === 3) {
        document.querySelector(".dice")
        monImage2.style.backgroundPosition = "400px 0"
    } if (randomNumber6 === 3) {
        document.querySelector(".dice")
        monImage6.style.backgroundPosition = "400px 0"
    }

    if (randomNumber2 === 4) {
        document.querySelector(".dice")
        monImage2.style.backgroundPosition = "300px 0"
    } if (randomNumber6 === 4) {
        document.querySelector(".dice")
        monImage6.style.backgroundPosition = "300px 0"
    }

    if (randomNumber2 === 5) {
        document.querySelector(".dice")
        monImage2.style.backgroundPosition = "200px 0"
    } if (randomNumber6 === 5) {
        document.querySelector(".dice")
        monImage6.style.backgroundPosition = "200px 0"
    }

    if (randomNumber2 === 6) {
        document.querySelector(".dice")
        monImage2.style.backgroundPosition = "100px 0"
    } if (randomNumber6 === 6) {
        document.querySelector(".dice")
        monImage6.style.backgroundPosition = "100px 0"
    }

}

function rollDice3() {

    randomNumber3 = Math.round(Math.random() * 5) +1;
    randomNumber7 = Math.round(Math.random() * 5) +1;

    if (randomNumber3 === 1) {
        document.querySelector(".dice")
        monImage3.style.backgroundPosition = "600px 0"
    } if (randomNumber7 === 1) {
        document.querySelector(".dice")
        monImage7.style.backgroundPosition = "600px 0"
    }

    if (randomNumber3 === 2) {
        document.querySelector(".dice")
        monImage3.style.backgroundPosition = "500px 0"
    } if (randomNumber,randomNumber7 === 2) {
        document.querySelector(".dice")
        monImage7.style.backgroundPosition = "500px 0"
    }

    if (randomNumber3 === 3) {
        document.querySelector(".dice")
        monImage3.style.backgroundPosition = "400px 0"
    } if (randomNumber7 === 3) {
        document.querySelector(".dice")
        monImage7.style.backgroundPosition = "400px 0"
    }

    if (randomNumber3 === 4) {
        document.querySelector(".dice")
        monImage3.style.backgroundPosition = "300px 0"
    } if (randomNumber7 === 4) {
        monImage7.style.backgroundPosition = "300px 0"
    }

    if (randomNumber3 === 5) {
        document.querySelector(".dice")
        monImage3.style.backgroundPosition = "200px 0"
    } if (randomNumber7 === 5) {
        document.querySelector(".dice")
        monImage7.style.backgroundPosition = "200px 0"
    }

    if (randomNumber3 === 6) {
        document.querySelector(".dice")
        monImage3.style.backgroundPosition = "100px 0"
    } if (randomNumber7 === 6) {
        document.querySelector(".dice")
        monImage7.style.backgroundPosition = "100px 0"
    }

}

function rollDice4() {

    randomNumber4 = Math.round(Math.random() * 5) +1;
    randomNumber8 = Math.round(Math.random() * 5) +1;

    if (randomNumber4 === 1) {
        document.querySelector(".dice")
        monImage4.style.backgroundPosition = "600px 0"
    } if (randomNumber8 === 1) {
        document.querySelector(".dice")
        monImage8.style.backgroundPosition = "600px 0"
    }

    if (randomNumber4 === 2) {
        document.querySelector(".dice")
        monImage4.style.backgroundPosition = "500px 0"
    } if (randomNumber8 === 1) {
        document.querySelector(".dice")
        monImage8.style.backgroundPosition = "500px 0"
    }

    if (randomNumber4 === 3) {
        document.querySelector(".dice")
        monImage4.style.backgroundPosition = "400px 0"
    } if (randomNumber8 === 3) {
        document.querySelector(".dice")
        monImage8.style.backgroundPosition = "400px 0"
    }

    if (randomNumber4 === 4) {
        document.querySelector(".dice")
        monImage4.style.backgroundPosition = "300px 0"
    } if (randomNumber8 === 4) {
        document.querySelector(".dice")
        monImage8.style.backgroundPosition = "300px 0"
    }

    if (randomNumber4 === 5) {
        document.querySelector(".dice")
        monImage4.style.backgroundPosition = "200px 0"
    } if (randomNumber8 === 5) {
        document.querySelector(".dice")
        monImage8.style.backgroundPosition = "200px 0"
    }

    if (randomNumber4 === 6) {
        document.querySelector(".dice")
        monImage4.style.backgroundPosition = "100px 0"
    } if (randomNumber8 === 6) {
        document.querySelector(".dice")
        monImage8.style.backgroundPosition = "100px 0"
    }

}
// -----------------------------------------------------



// ------------ Vérification via la console ------------
console.log(randomNumber)
console.log(randomNumber2)
console.log(randomNumber3)
console.log(randomNumber4)
console.log(randomNumber5)
console.log(randomNumber6)
console.log(randomNumber7)
console.log(randomNumber8)
// -----------------------------------------------------