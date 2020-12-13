const choices = ["Rock", "Paper", "Scissors"];
let playerScore = 0;
let compScore = 0;
const buttons = document.querySelectorAll("button");
const scoreP = document.getElementById("scorePlayer");
const scoreC = document.getElementById("scoreComp");

for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", playRound);
}

function computerPlay() {
  let what = choices[Math.floor(Math.random() * choices.length)];
  return what;
}

function playRound(e) {
  let computerSelection = computerPlay();
  let playerSelection = e.target.innerText;
  if (
    (playerSelection === "Rock" && computerSelection === "Paper") ||
    (playerSelection === "Paper" && computerSelection === "Scissors") ||
    (playerSelection === "Scissors" && computerSelection === "Rock")
  ) {
    alert("COMP won!");
    compScore++;
    scoreP.textContent = `Player's score: ${playerScore}`;
    scoreC.textContent = `Computer's score: ${compScore}`;
  } else if (
    (playerSelection === "Rock" && computerSelection === "Scissors") ||
    (playerSelection === "Paper" && computerSelection === "Rock") ||
    (playerSelection === "Scissors" && computerSelection === "Paper")
  ) {
    alert("PLAYER won!");
    playerScore++;
    scoreP.textContent = `Player's score: ${playerScore}`;
    scoreC.textContent = `Computer's score: ${compScore}`;
  } else if (playerSelection === computerSelection) {
    alert("TIE!");
  } else {
    alert("Invalid play");
  }

  if (playerScore === 5) {
    alert("Player wins the war");
    playerScore = 0;
    compScore = 0;
    scoreP.textContent = `Player's score: ${playerScore}`;
    scoreC.textContent = `Computer's score: ${compScore}`;
  } else if (compScore === 5) {
    alert("Computer wins the war");
    playerScore = 0;
    compScore = 0;
    scoreP.textContent = `Player's score: ${playerScore}`;
    scoreC.textContent = `Computer's score: ${compScore}`;
  }
}

// function game() {
//   playRound;
//   if (playerScore === 5) {
//     alert("Player wins the war");
//     playerScore = 0;
//     compScore = 0;
//   } else if (compScore === 5) {
//     alert("Computer wins the war");
//     playerScore = 0;
//     compScore = 0;
//   }
// }
