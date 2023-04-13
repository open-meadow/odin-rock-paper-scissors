// console.log("Hello World");

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
  // console.log("Player selection ", playerSelection);
  // console.log("Computer selection ", computerSelection);

  // if player chooses rock
  if (playerSelection.toLowerCase() === "rock") {
    if (computerSelection.toLowerCase() === "rock") {
      // console.log("Draw! Both have rock");
      return 1;
    }
    if (computerSelection.toLowerCase() === "scissors") {
      // console.log("You Win! rock beats scissors");
      return 2;
    }
    if (computerSelection.toLowerCase() === "paper") {
      // console.log("You Lose! rock loses to paper");
      return 0;
    }
  }

  // if player chooses scissors
  if (playerSelection.toLowerCase() === "scissors") {
    if (computerSelection.toLowerCase() === "scissors") {
      // console.log("Draw! Both have scissors");
      return 1;
    }
    if (computerSelection.toLowerCase() === "paper") {
      // console.log("You Win! scissors beats paper");
      return 2;
    }
    if (computerSelection.toLowerCase() === "rock") {
      // console.log("You Lose! scissors loses to rock");
      return 0;
    }
  }

  // if player chooses paper
  if (playerSelection.toLowerCase() === "paper") {
    if (computerSelection.toLowerCase() === "paper") {
      // console.log("Draw! Both have paper");
      return 1;
    }
    if (computerSelection.toLowerCase() === "rock") {
      // console.log("You Win! paper beats rock");
      return 2;
    }
    if (computerSelection.toLowerCase() === "scissors") {
      // console.log("You Lose! paper loses to scissors");
      return 0;
    }
  }
};

const game = () => {
  // alert("You will play 5 rounds");

  let score = 0;
  // for (let i = 0; i < 5; i++) {
  //   const playerChoice = prompt("Input rock, paper or scissors");
  //   const computerChoice = getComputerChoice();
  //   const result = playRound(playerChoice, computerChoice);
  //   if (result === 1) {
  //     alert(`Draw. Your score is ${score}`);
  //   }
  //   if (result === 0) {
  //     alert(`You lose. Your score is ${score}`);
  //   }
  //   if (result === 2) {
  //     score++;
  //     alert(`You Win. Your score is ${score}`);
  //   }
  // }

  // alert(`Your final score is ${score}`);

  document.addEventListener("DOMContentLoaded", () => {
    const buttons = document.querySelectorAll("button");

    buttons.forEach((button) => {
      button.addEventListener("click", () => {
        console.log("poop", button.id);

        const playerChoice = button.id;
        const computerChoice = getComputerChoice();
        const result = playRound(playerChoice, computerChoice);
        const resultDiv = document.createElement("div");

        if (result === 0) resultDiv.innerHTML = "You Lose";
        if (result === 1) resultDiv.innerHTML = "Draw";
        if (result === 2) resultDiv.innerHTML = "You Win";
        
        document.body.appendChild(resultDiv);

      });
    });
  });
};

// getComputerChoice();
// console.log(getComputerChoice());

// const playerSelection = "rock";
// playRound(playerSelection, getComputerChoice());

game();
