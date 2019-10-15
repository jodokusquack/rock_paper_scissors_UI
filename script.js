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

  playerSelectionCapitalised = playerSelection.replace(playerSelection[0], playerSelection[0].toUpperCase());
  computerSelectionCapitalised = computerSelection.replace(computerSelection[0], computerSelection[0].toUpperCase());

  playerResultField.textContent = playerSelectionCapitalised;
  computerResultField.textContent = computerSelectionCapitalised;


  let win;
  let winner;
  let resultExplanation;

  if (playerSelection === computerSelection) {
    
    winner = "tie";

    explanationResultField.textContent = 'It\'s a tie.';
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
    resultExplanation = playerSelectionCapitalised + ' beats ' + computerSelectionCapitalised + '. <br>The Player wins this round.';
    explanationResultField.innerHTML = resultExplanation;

    updateScore(winner);
    checkPlayerWin();

  } else if (win === false) {    
    winner = "computer";
    resultExplanation = playerSelectionCapitalised + '  gets beaten by ' + computerSelectionCapitalised + '. <br>The Computer wins this round.';
    explanationResultField.innerHTML = resultExplanation;

    updateScore(winner);
    checkComputerWin();

  }

  roundResultField.classList.remove('inactive');
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
  field.classList.add('wonRound');
}

function checkPlayerWin() {
  let currentScore = Number(playerScoreField.textContent);
  if (currentScore >= requiredWins) {
    explanationResultField.innerHTML = 'Congratulations! You won against the Computer.';
    roundResultField.classList.add('playerWon');
    stopGame();
  }
}

function checkComputerWin() {
  let currentScore = Number(computerScoreField.textContent);
  if (currentScore >= requiredWins) {
    explanationResultField.innerHTML = 'Oh no! The computer won. Better Luck next time.';
    roundResultField.classList.add('computerWon');
    stopGame();
  }
}

function stopGame() {
  rockButton.classList.toggle('inactive');
  paperButton.classList.toggle('inactive');
  scissorsButton.classList.toggle('inactive');
  newGameButton.classList.toggle('inactive');
}

function newGame() {
  newGameButton.classList.toggle('inactive');
  rockButton.classList.toggle('inactive');
  paperButton.classList.toggle('inactive');
  scissorsButton.classList.toggle('inactive');
  roundResultField.classList.add('inactive');
  roundResultField.classList.remove('computerWon', 'playerWon');

  playerResultField.textContent = '';
  computerResultField.textContent = '';
  explanationResultField.textContent = '';
  
  playerScoreField.textContent = 0;
  computerScoreField.textContent = 0;
}

function removeTransition(e) {
  // if (e.propertyName !== 'transform') return; // We are only listening for the end of the transform event.
  this.classList.remove('wonRound');
}

function startGame() {
  const scoreFields = document.getElementById('scoreFields');
  const nameForm = document.getElementById('nameForm');
  const playerNameField = document.getElementById('playerNameField');

  let playerName = document.getElementById('playerName').value;

  if (playerName === '') {
    playerName = 'Player';
  }

  playerNameField.textContent = playerName;

  rockButton.addEventListener('click', playRound);
  paperButton.addEventListener('click', playRound);
  scissorsButton.addEventListener('click', playRound);

  nameForm.classList.add('inactive');
  scoreFields.classList.remove('inactive');
}

let requiredWins = 3;

const startGameButton = document.getElementById('startGameButton');

const rockButton = document.querySelector('#rock');
const paperButton = document.querySelector('#paper');
const scissorsButton = document.querySelector('#scissors');

const playerScoreField = document.querySelector('#playerScore');
const computerScoreField = document.querySelector('#computerScore');

const roundResultField = document.getElementById('roundResult');
const playerResultField = document.getElementById('roundResultPlayer');
const computerResultField = document.getElementById('roundResultComputer');
const explanationResultField = document.getElementById('roundResultExplanation');

const newGameButton = document.querySelector('#newGame');


playerScoreField.addEventListener('transitionend', removeTransition);
computerScoreField.addEventListener('transitionend', removeTransition);

startGameButton.addEventListener('click', startGame);

newGameButton.addEventListener('click', newGame);
