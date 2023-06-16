const choices = ["rock", "paper", "sissors"];
const consgetComputerChoice = () => {
  let num = Math.floor(Math.random() * 3);
  console.log(num);
  return num;
};

let idx = consgetComputerChoice();
let computersSelection = choices[idx];
console.log(computersSelection);

const singleRound = (playersSelection, computersSelection) => {
  if (playersSelection === computersSelection) {
    console.log("its a tie");
    return "its a tie";
  } else if (
    (playersSelection === "rock" && computersSelection === "sissors") ||
    (playersSelection === "paper" && computersSelection === "rock") ||
    (playersSelection === "sissors" && computersSelection === "paper")
  ) {
    console.log("player won");
  } else {
    console.log("computer won!");
    return "computer won";
  }
};

singleRound("paper", computersSelection);
