function random(number) {
  return Math.floor(Math.random() * number);
}

function computerPlay() {
  let options = ["rock", "paper", "scissors"];
  return options[random(3)];
}

let playerScore = 0;
let computerScore = 0;
const computerSelection = computerPlay();
const playerSelection = prompt("Rock, Paper, or Scissors?");

function playRound(playerSelection, computerSelection) {
  let player = playerSelection.toLowerCase();
  switch (player) {
    case "rock":
      if (computerSelection == "scissors") {
        playerScore += 1;
        checkScore();
        return "You Win! Rock beats Scissors";
      } else if (computerSelection == "paper") {
        computerScore += 1;
        checkScore();
        return "You Lose! Paper beats Rock";
      } else {
        checkScore();
        return "You Tied! Both of you had Rock";
      }
    case "scissors":
      if (computerSelection == "paper") {
        playerScore += 1;
        checkScore();
        return "You Win! Scissors beats Paper";
      } else if (computerSelection == "rock") {
        computerScore += 1;
        checkScore();
        return "You Lose! Rock beats Scissors";
      } else {
        checkScore();
        return "You Tied! Both of you had Scissors";
      }
    case "paper":
      if (computerSelection == "rock") {
        playerScore += 1;
        checkScore();
        return "You Win! Paper beats Rock";
      } else if (computerSelection == "scissors") {
        computerScore += 1;
        checkScore();
        return "You Lose! Scissors beats Paper";
      } else {
        checkScore();
        return "You Tied! Both of you had Paper";
      }
  }
}

function checkScore() {
  if (playerScore == 5) {
    console.log("Game Over! You Won!");
  } else if (computerScore == 5) {
    console.log("Game Over! You Lost!");
  } else {
    console.log("Player: " + playerScore + " Computer: " + computerScore);
  }
}

console.log(playRound(playerSelection, computerSelection));
