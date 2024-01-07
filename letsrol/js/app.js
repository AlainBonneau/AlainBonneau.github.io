// Déclaration des nombres
let randomNumbersPlayer = [];
let randomNumbersDealer = [];

// Question pour l'utilisateur
let answer = parseInt(prompt("Combien de dés voulez-vous lancer ? (entre 1 & 4)"));

while (isNaN(answer) || answer === 0 || answer >= 5 || !answer) {
    answer = parseInt(prompt("J'ai dit entre 1 & 4, tu fais exprès ou quoi ?"));
}

const adv = document.createElement("div");
adv.classList.add("board");
adv.id = "dealer";
player.insertAdjacentElement("afterend", adv);

// Choix de l'utilisateur
if (answer >= 1 && answer <= 4) {
    alert("Let's roll !!");

    for (let i = 1; i <= answer; i++) {
        const dicePlayer = document.createElement("div");
        dicePlayer.classList.add("dice");
        dicePlayer.id = `monImage${i}`;
        player.appendChild(dicePlayer);

        const diceDealer = document.createElement("div");
        diceDealer.classList.add("dice");
        diceDealer.id = `monImage${i + 4}`;
        dealer.appendChild(diceDealer);

        rollDice(i, randomNumbersPlayer);
        rollDice(i, randomNumbersDealer);
    }
} else {
    console.log("Quelque chose de terrible s'est produit");
}

// Paramétrage des dés
function rollDice(index, randomNumbers) {
    const randomNumber = Math.round(Math.random() * 5) + 1;
    randomNumbers[index - 1] = randomNumber;

    const position = 700 - randomNumber * 100;
    document.querySelector(`#monImage${index + 4 * (randomNumbers === randomNumbersDealer ? 0 : 1)}`).style.backgroundPosition = `${position}px 0`;
}

// Vérification via la console
console.log("Player:", randomNumbersPlayer);
console.log("Dealer:", randomNumbersDealer);
