function computerPlay() {
  let num = Math.floor(Math.random()*3);
  let answer;
  switch (num) {
    case 0:
      answer = "rock";
      break;
    case 1:
      answer = "paper";
      break;
    case 2:
      answer = "scissors";
      break;
  }
  return answer;
}

function playRound() {
  let playerSelection = this.id;
  let computerSelection = computerPlay();

  let win;
  let winner;

  if (playerSelection === computerSelection) {
    
    winner = "tie";
    console.log(playerSelection);
    console.log(computerSelection);
    console.log(winner);
  }

  if (playerSelection === "rock") {
    if (computerSelection === "paper") {
      win = false;
    } else if (computerSelection === "scissors") {
      win = true;
    }
  } else if (playerSelection === "paper") {
    if (computerSelection === "rock") {
      win = true;
    } else if (computerSelection === "scissors") {
      win = false;
    }
  } else if (playerSelection === "scissors") {
    if (computerSelection === "rock") {
      win = false;
    } else if (computerSelection === "paper") {
      win = true;
    }
  }

  if (win === true) {
    
    winner = "player";
    console.log(playerSelection);
    console.log(computerSelection);
    console.log(winner);
    updateScore(winner);
    checkPlayerWin();

  } else if (win === false) {
    
    winner = "computer";
    console.log(playerSelection);
    console.log(computerSelection);
    console.log(winner);
    updateScore(winner);
    checkComputerWin();

  }

  return winner;
}

function updateScore(winner) {
  let field;
  if (winner === 'player') {
    field = playerScoreField;
  } else if (winner === 'computer') {
    field = computerScoreField;
  } else {
    return;
  }
  let currentScore = Number(field.textContent);
  let newScore = currentScore + 1;
  field.textContent = newScore;
}

function checkPlayerWin() {
  let currentScore = Number(playerScoreField.textContent);
  if (currentScore >= 5) {
    winnerField.textContent = 'Congrutalations! You won against the Computer. Want to play again?';
  }
}

function checkComputerWin() {
  let currentScore = Number(computerScoreField.textContent);
  if (currentScore >= 5) {
    winnerField.textContent = 'Oh no! The computer won. Better Luck next time. Want to play again?';
  }
}

function game() {
  let playerWinCount = 0;
  let computerWinCount = 0;
  let message;

  while (playerWinCount + computerWinCount < 5) {
    playerSelection = prompt("Choose 'Rock', 'Paper' or 'Scissors'.")
    computerSelection = computerPlay();
    let winner = playRound(playerSelection, computerSelection);

    if (winner === "player") {
      playerWinCount += 1;
      message = "You won! " + playerSelection.replace(playerSelection[0], playerSelection[0].toUpperCase()) + " beats " + computerSelection.replace(computerSelection[0], computerSelection[0].toUpperCase()) + ".";
    } else if (winner === "computer") {
      computerWinCount += 1;
      message = "The computer won! " + computerSelection.replace(computerSelection[0], computerSelection[0].toUpperCase()) + " beats " + playerSelection.replace(playerSelection[0], playerSelection[0].toUpperCase()) + ".";
    } else if (winner === "tie") {
      message = "It's a Tie! Try again."; 
    } else {
      message = "An error occured. Please try again."
    }

    console.log(message);
    console.log("The score is: " + playerWinCount + " : " + computerWinCount);
  }

  console.log("The final winner is: " + ((playerWinCount < computerWinCount) ? "The Computer" : "You"));
}

const rockButton = document.querySelector('#rock');
const paperButton = document.querySelector('#paper');
const scissorsButton = document.querySelector('#scissors');
const playerScoreField = document.querySelector('#playerScore');
const computerScoreField = document.querySelector('#computerScore');
const winnerField = document.querySelector('#winner');

rockButton.addEventListener('click', playRound);
paperButton.addEventListener('click', playRound);
scissorsButton.addEventListener('click', playRound);
