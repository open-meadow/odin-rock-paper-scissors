console.log("Hello World");

// find computer input
// use Math.random between 0, 1, 2
// 0 = rock
// 1 = paper
// 2 = scissors

// take user input

// compare
// show winner

const getComputerChoice = () => {
  let computerChoice = Math.floor(Math.random() * 3);
  if (computerChoice === 0) {
    return "rock";
  } else if (computerChoice === 1) {
    return "paper";
  } else {
    return "scissors";
  }
};

const playRound = (playerSelection, computerSelection) => {
  console.log("Player selection ", playerSelection);
  console.log("Computer selection ", computerSelection);

  // if player chooses rock
  if (playerSelection.toLowerCase() === "rock") {
    if (computerSelection.toLowerCase() === "rock") {
      console.log("Draw! Both have rock");
      return "Draw! Both have rock";
    } 
    if (computerSelection.toLowerCase() === "scissors") {
      console.log("You Win! rock beats scissors");
      return "You Win! rock beats scissors";
    } 
    if (computerSelection.toLowerCase() === "paper") {
      console.log("You Lose! rock loses to paper");
      return "You Lose! rock loses to paper";
    }
  }

  // if player chooses scissors
  if (playerSelection.toLowerCase() === "scissors") {
    if (computerSelection.toLowerCase() === "scissors") {
      console.log("Draw! Both have scissors");
      return "Draw! Both have scissors";
    } 
    if (computerSelection.toLowerCase() === "paper") {
      console.log("You Win! scissors beats paper");
      return "You Win! scissors beats paper";
    } 
    if (computerSelection.toLowerCase() === "rock") {
      console.log("You Lose! scissors loses to rock");
      return "You Lose! scissors loses to rock";
    }
  }

  // if player chooses paper
  if (playerSelection.toLowerCase() === "paper") {
    if (computerSelection.toLowerCase() === "paper") {
      console.log("Draw! Both have paper");
      return "Draw! Both have paper";
    } 
    if (computerSelection.toLowerCase() === "rock") {
      console.log("You Win! paper beats rock");
      return "You Win! paper beats rock";
    } 
    if (computerSelection.toLowerCase() === "scissors") {
      console.log("You Lose! paper loses to scissors");
      return "You Lose! paper loses to scissors";
    }
  }
};

getComputerChoice();
console.log(getComputerChoice());

const playerSelection = "rock";
playRound(playerSelection, getComputerChoice());
