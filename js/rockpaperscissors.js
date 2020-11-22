const computerChoices = ['Rock', 'Paper', 'Scissors'];

let playerSelection;
let computerSelection;

function computerPlay () {
    let compPick = Math.floor(Math.random() * computerChoices.length);
    computerPick = computerChoices[compPick];
    return computerPick;
}

function playerPlay () {
    let playerPick = prompt("Take your pick, rock, paper, or scissors: ").toLowerCase();
    return playerPick;
}

function playRound (playerSelection, computerSelection) {
    playerSelection = playerPlay();
    computerSelection = computerPlay();
    if (playerSelection == 'rock' && computerSelection == 'Paper') {
        alert("Paper beats rock! Computer wins!");
        computerScore++;
    } 
    else if (playerSelection == 'rock' && computerSelection == 'Scissors') {
        alert("Rock beats scissors! Player wins!");
        playerScore++;
    }
    else if (playerSelection == 'rock' && computerSelection == 'Rock') {
        alert("It's a tie!");
        playerScore++;
        computerScore++;
    }
    else if (playerSelection == 'paper' && computerSelection == 'Rock') {
        alert("Paper beats rock! Player wins!");
        playerScore++;
    }
    else if (playerSelection == 'paper' && computerSelection == 'Paper') {
        alert("It's a tie!");
        playerScore++;
        computerScore++;
    }
    else if (playerSelection == 'paper' && computerSelection == 'Scissors') {
        alert ("Scissors beat paper! Computer wins!");
        computerScore++;
    }
    else if (playerSelection == 'scissors' && computerSelection == 'Rock') {
        alert ("Rock beats scissors! Computer wins!");
        computerScore++;
    }
    else if (playerSelection == 'scissors' && computerSelection == 'Paper') {
        alert ("Scissors beat paper! Player wins!");
        playerScore++;
    }
    else if (playerSelection == 'scissors' && computerSelection == 'Scissors') {
        alert ("It's a tie!");
        playerScore++;
        computerScore++;
    }
    else {
        alert("Please input a valid play.");
    }
}

let playerScore = 0;
let computerScore = 0;

function winner () {
    playerScore > computerScore ? alert("Player wins!") : alert("Computer wins!");
}

function game () {
    for (i = 0; i < 5; i++) {
        playRound(playerSelection, computerSelection);
        console.log("your score = " + playerScore);
        console.log("Computer's score = " + computerScore);
    }
    winner();
}

console.log(game());