document.getElementById('rock').addEventListener('click', () => playGame('rock'));
document.getElementById('paper').addEventListener('click', () => playGame('paper'));
document.getElementById('scissors').addEventListener('click', () => playGame('scissors'));


const choices = ['rock', 'paper', 'scissors'];

function computerChoice() {
  const random = Math.floor(Math.random() * choices.length);
  return choices[random];
}

function theWinner(playerChoice, computerChoice) {
  if (playerChoice === computerChoice) {
    return 'Its a tie';
  } else if (
    (playerChoice === 'rock' && computerChoice === 'scissors') ||
    (playerChoice === 'paper' && computerChoice === 'rock') ||
    (playerChoice === 'scissors' && computerChoice === 'paper')
  ) {
    return 'You Won!';
  } else {
    return 'You lost!';
  }
}

function playGame(playerChoice) {
  const compChoice = computerChoice();
  const result = theWinner(playerChoice, compChoice);
  document.getElementById('result').innerText = `You = ${playerChoice}. Computer = ${compChoice}. The result is that ${result}`;
}

