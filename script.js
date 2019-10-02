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

function playRound(playerSelection, computerSelection) {
  playerSelection = playerSelection.toLowerCase();
  let win;
  let winner;
  let message;

  if (playerSelection === computerSelection) {
    
    winner = "tie";
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
  } else {
    message = "Please enter either Rock, Paper or Scissors.";
  }

  if (win === true) {
    
    winner = "player";
  } else if (win === false) {
    
    winner = "computer"
  }

  return winner;
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

game();