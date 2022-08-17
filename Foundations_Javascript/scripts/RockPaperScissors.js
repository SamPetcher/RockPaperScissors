let machineWins = 0;
let humanWins = 0;
let ties = 0;

const rock = "rock";
const paper = "paper";
const scissors = "scissors";

function getComputerChoice() {
  const rand = Math.random(); //Returns a random
  if (rand <= 0.33) {
    return "rock";
  } else if (rand >= 0.33 && rand <= 0.66) {
    return "paper";
  }
  return "scissors";
}

function playRound(computerChoice, playerChoice) {
  const victorNode = document.createElement("h1");
  const humanMsg = document.createTextNode("Human Victory");
  const robotMsg = document.createTextNode("Robot Victory");
  const tieMsg = document.createTextNode("No Victory");

  switch (true) {
    case computerChoice === playerChoice:
      victorNode.appendChild(tieMsg);
      break;
    case computerChoice === "rock" && playerChoice === "paper":
    case computerChoice === "scissors" && playerChoice === "rock":
    case computerChoice === "paper" && playerChoice === "scissors":
      victorNode.appendChild(humanMsg);

      break;

    default:
      victorNode.appendChild(robotMsg);
  }
  document.querySelector("#areyawinningson").appendChild(victorNode);
}
// console.log(machineWins, ties, humanWins)
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
