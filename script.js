//generate random value between 0 and 2
function getRandomInt() {
  return Math.floor(Math.random() * 3);
}

function getComputerChoice() {
  //generate random value between 0 and 2 and store in variable random
  random = getRandomInt();
  // return choice
  random = random === 0 ? "rock" : random === 1 ? "paper" : "scissors";

  return random;
}
// human choice function
function getHumanChoice() {
  choice = prompt("Choose: Rock, Paper or Scissors");
  choice = choice.toLowerCase();
  return choice;
}

// Play one round of the game
function playRound(humanChoice) {
  humanChoice = humanChoice.toLowerCase();
  let computerChoice = getComputerChoice();
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
// Event listener

const btnChoice = document.querySelectorAll("button");

btnChoice.forEach((e) => {
  e.addEventListener("click", () => {
    playRound(e.textContent);
    let winner = checkScore(humanScore, computerScore);

    const h1Win = document.querySelector("#winnerAnnounce");

    if (winner === "human") {
      h1Win.textContent = "I WOOOOOONNNNNN GG";
      div.appendChild(h1Win);
      resetScore();
    } else if (winner === "computer") {
      h1Win.textContent = "Computer wooon not GG";
      div.appendChild(h1Win);
      resetScore();
    }

    // dom manipulation
    const myChoice = document.querySelector("p");
    myChoice.textContent = "My choice is: " + e.textContent;
    const computerChoice = document.querySelector("#computerChoice");
    computerChoice.textContent = "Computer choice is: " + random;
    const myScore = document.querySelector("#myScore");
    myScore.textContent = "My score is: " + humanScore;
    const computerPscore = document.querySelector("#computerScore");
    computerPscore.textContent = "Computer score is: " + computerScore;

    div = document.querySelector("div");
    div.appendChild(myChoice);
    div.appendChild(computerChoice);
    div.appendChild(myScore);
    div.appendChild(computerPscore);
  });
});

/* function that check the scores. 
stop the game when someone has 5 points
Display a message to announce the winner 
reset scores to 0 
*/

function checkScore(humanScore, computerScore) {
  if (humanScore === 5) return "human";
  else if (computerScore === 5) return "computer";
}

function resetScore() {
  humanScore = 0;
  computerScore = 0;
}
