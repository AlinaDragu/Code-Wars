// document.getElementById('rock').addEventListener('click', () => playGame('rock'));
// document.getElementById('paper').addEventListener('click', () => playGame('paper'));
// document.getElementById('scissors').addEventListener('click', () => playGame('scissors'));


// const choices = ['rock', 'paper', 'scissors'];
// let playerScore = 0;
// let computerScore = 0;

// function computerChoice() {
//   const random = Math.floor(Math.random() * choices.length);
//   return choices[random];
// }

// function theWinner(playerChoice, computerChoice) {
//   if (playerChoice === computerChoice) {
//     return 'It\'s a tie';
//   } else if (
//     (playerChoice === 'rock' && computerChoice === 'scissors') ||
//     (playerChoice === 'paper' && computerChoice === 'rock') ||
//     (playerChoice === 'scissors' && computerChoice === 'paper')
//   ) { playerScore++;
//     return 'You Won!';
//   } else { computerScore++; 
//     return 'You lost!';
//   }
// }

// function playGame(playerChoice) {
//   const compChoice = computerChoice();
//   const result = theWinner(playerChoice, compChoice);
//   document.getElementById('result').innerText = `You = ${playerChoice}. Computer = ${compChoice}. The result is that ${result}`;
//   document.getElementById('score').innerText = `Score: Player ${playerScore} - Computer ${computerScore}`;
// }




document.querySelector('#rock').addEventListener('click', () => playGame('rock'))
document.querySelector('#paper').addEventListener('click' , () => playGame('paper'))
document.querySelector('#scissors').addEventListener('click' , () => playGame('scissors'))


let choices = ['rock','paper','scissors']
let playerScore = 0;
let computerScore = 0;


function computerChoice(){
  const random = Math.floor(Math.random() * choices.length)
  return choices[random]
}


function theWinner(playerChoice,computerChoice){
  if(playerChoice===computerChoice){
    return ' It\'s a tie'
  }else if ((playerChoice==='rock' && computerChoice==='scissors') ||
            (playerChoice==='paper' && computerChoice==='rock') ||
            (playerChoice==='scissors' && computerChoice==='paper')){
              playerScore++;
              return 'You Won'
    }else{
      computerScore++;
      return ' You lost'
    }
  }


function playGame(playerChoice) {
  const compChoice = computerChoice();
  const result = theWinner(playerChoice,compChoice);
  document.querySelector('#result').innerText = `You chose ${playerChoice} . Computer chose ${compChoice}. And the result is ${result}`
  document.querySelector('#score').innerText = `You re score is ${playerScore} - computer score is ${computerScore}`
}
