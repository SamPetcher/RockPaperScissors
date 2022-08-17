function getComputerChoice() {
  const rand = Math.random(); //Returns a random
  if (rand <= 0.33) {
    return "rock";
  } else if (rand >= 0.33 && rand <= 0.66) {
    return "paper";
  }
  return "scissors";
}

let playerChoice = "rock";

function playRound(computerChoice, playerChoice) {
  switch (true) {
    case computerChoice === playerChoice:
      return 0;
      break;
    case computerChoice === "rock" && playerChoice === "paper":
    case computerChoice === "scissors" && playerChoice === "rock":
    case computerChoice === "paper" && playerChoice === "scissors":
      return 2;
      break;

    default:
      return 1;
  }
}

let machineWins = 0;
let humanWins = 0;
let ties = 0;

// for (let i = 0; i < 5; i++) {
//   const result = playRound(getComputerChoice(), prompt());
//   switch (true) {
//     case result === 2:
//       humanWins++;
//       break;
//     case result === 1:
//       machineWins++;
//       break;
//     default:
//       ties++;
//   }
// }
console.log(machineWins, humanWins, ties);
