// Play one round

//generate random value between 0 and 2
function getRandomInt() {
  return Math.floor(Math.random() * 3);
}

//Computer choice function
function getComputerChoice() {
  //generate random value between 0 and 2 and store in variable random
  random = getRandomInt();
  // return choice
  random = random === 0 ? "rock" : random === 1 ? "paper" : "scissors";

  return random;
}
// human choice function
function getHumanChoice() {
  choice = prompt("enter you choice");
  choice = choice.toLowerCase();
  return choice;
}

// Play one round of the game
function playRound(humanChoice, computerChoice) {
  // humanChoice === Rock
  if (humanChoice === "rock" && computerChoice === "paper") {
    return ++computerScore;
  } else if (humanChoice === "rock" && computerChoice === "scissors") {
    return ++humanScore;
  }
  // humanChoice === Scissors
  else if (humanChoice === "scissors" && computerChoice === "rock") {
    return (console.log("You lost!! Rock beats Scissors"), computerScore++);
  } else if (humanChoice === "scissors" && computerChoice === "paper") {
    return ++humanScore;
  }
  // humanChoice === Paper
  else if (humanChoice === "paper" && computerChoice === "scissors") {
    return ++computerScore;
  } else if (humanChoice === "paper" && computerChoice === "rock") {
    return ++humanScore;
  }
}

// Take scores and return a message to say who won the game
function calculateWiner(humanScore, computerScore) {
  return humanScore === computerScore
    ? "Draw wtf?!"
    : humanScore > computerScore
      ? "BROOOO YOU WON GG!!"
      : "LOOOOOSER, YOU LOST AGAINST A MACHINE";
}

// Play 5 rounds of rock paper scissors
// USER input choice
// RECALL WIN / LOSE message
// RECALL Score
// return Final score
function playGame() {
  // GET choices computer / human

  for (let i = 1; i <= 5; i++) {
    let computerChoice = getComputerChoice();
    let humanChoice = getHumanChoice();
    playRound(humanChoice, computerChoice);
    console.log(
      "Game number: " +
        i +
        "\nHuman score: " +
        humanScore +
        "\nComputer Score: " +
        computerScore,
    );
  }
  console.log(
    calculateWiner(humanScore, computerScore) +
      "\nFinal Score:\nHuman: " +
      humanScore +
      "\nComputer: " +
      computerScore,
  );

  return;
}
// initialize score values
let humanScore = 0;
let computerScore = 0;
playGame();
