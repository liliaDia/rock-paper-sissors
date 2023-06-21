const game = () => {
  const choices = ["rock", "paper", "sissors"];

  let playersSelection = "";
  let computersSelection = "";
  let rounds = 1;
  let playerWon = 0;
  let computerWon = 0;

  const message =
    "lets play rock paper sissors! Best of 5 rounds, Please type rock paper sissors round: ";

  const playerchoice = () => {
    let choice = prompt(message + rounds);

    if (!choice) return;

    choice = choice.toLowerCase();
    while (!choices.includes(choice)) {
      choice = prompt("please enter a valid choice");
    }
    return choice;
  };

  const consgetComputerChoice = () => {
    let num = Math.floor(Math.random() * 3);
    console.log("computer chooses ", choices[num]);
    return choices[num];
  };

  const didPlayerWinRound = (playersSelection, computersSelection) => {
    return (
      (playersSelection === "rock" && computersSelection === "sissors") ||
      (playersSelection === "paper" && computersSelection === "rock") ||
      (playersSelection === "sissors" && computersSelection === "paper")
    );
  };

  const singleRound = (playersSelection, computersSelection) => {
    if (playersSelection === computersSelection) {
      console.log("its a tie");
    } else if (didPlayerWinRound(playersSelection, computersSelection)) {
      console.log("player won this round!");
      playerWon++;
    } else {
      console.log("computer won this round!");
      computerWon++;
    }
    rounds++;
  };

  for (let i = 1; i <= 5; i++) {
    playersSelection = playerchoice();
    computersSelection = consgetComputerChoice();

    singleRound(playersSelection, computersSelection);
  }

  console.log("is this happening??", playerWon, computerWon);
  if (playerWon === computerWon) {
    console.log("its a tie  refresh to play again");
    return "its a tie  refresh to play again";
  } else if (playerWon > computerWon) {
    console.log("player won!!!!!!  refresh to play again");
    return "player won!!!!!!  refresh to play again";
  } else if (computerWon > playerWon) {
    console.log("computer won!!!!!! refresh to play again");
    return "computer won!!!!!! refresh to play again";
  }
};

game();
