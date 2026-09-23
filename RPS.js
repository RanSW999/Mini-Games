const choices = ["Rock","Paper","Scissor"]
const resultDisplay = document.querySelector(".disp")
let userScore = 0;
let compScore = 0;
let drawScore = 0;
let round = 0;

const wonDisplay = document.getElementById("wins");
const drawDisplay = document.getElementById("draws");
const lostDisplay = document.getElementById("loses");
const roundDisplay = document.querySelector(".round");

const userDisplay = document.getElementById("user-img");
const compDisplay = document.getElementById("comp-img");

function Play(userChoice){
    const compChoice = choices[Math.floor(Math.random() * 3)];
    let result = "";

    round++;
    roundDisplay.textContent = `Round: ${round}`;

    const emojis = {
    Rock: "🪨",
    Paper: "🧻",
    Scissor: "✂️"
    };

    userDisplay.textContent = emojis[userChoice];
    compDisplay.textContent = emojis[compChoice];

    if(userChoice === compChoice){
        result = "It's a tie!"
    }
    else{
        if(userChoice === "Rock"){
            result = (compChoice === "Paper") ? "You lose!" : "You win!"
        }
        else if (userChoice === "Paper"){
            result = (compChoice === "Scissor") ? "You lose!" :"You win!"
        }
        else if (userChoice === "Scissor"){
            result = (compChoice === "Rock") ? "You lose!" :"You win!"
        }

    }
    resultDisplay.textContent = result; 

    if(result === "You win!") {
        userScore++;
    }
    else if(result === "You lose!") {
        compScore++;
    }
    else{
        drawScore++;
    }

    wonDisplay.textContent = `Won: ${userScore}`;
    drawDisplay.textContent = `Draw: ${drawScore}`;
    lostDisplay.textContent = `Lost: ${compScore}`;
}

