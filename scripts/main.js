let decision;

const validateDecision = () => {
  decision = prompt("Piedra, papel o tijera?").toLowerCase();
  if (decision != "piedra" && decision != "papel" && decision != "tijera") {
    alert("Debe decidir si: piedra, papel o tijera");
    validateDecision();
  }
  return decision;
};
let playerSelection = validateDecision();

let n;

const computerSelection = () => {
  n = Math.random() * 10;
  var selection = Math.floor(n);
  if (selection == 0) {
    return computerSelection();
  }
  if (selection == 1 || selection == 4 || selection == 7) {
    return "piedra";
  } else if (selection == 2 || selection == 5 || selection == 8) {
    return "papel";
  } else if (selection == 3 || selection == 6 || selection == 9) {
    return "tijera";
  }
};

let computerSelectionVar = computerSelection();

const playRound = (playerSelection, computerSelectionVar) => {
  if (
    (playerSelection == "piedra" && computerSelectionVar == "papel") ||
    (playerSelection == "papel" && computerSelectionVar == "tijera") ||
    (playerSelection == "tijera" && computerSelectionVar == "piedra")
  ) {
    return "Has perdido la ronda!";
  } else if (
    (playerSelection == "piedra" && computerSelectionVar == "tijera") ||
    (playerSelection == "papel" && computerSelectionVar == "piedra") ||
    (playerSelection == "tijera" && computerSelectionVar == "papel")
  ) {
    return "Has ganado la ronda!";
  } else if (playerSelection == computerSelectionVar) {
    return "Empate!";
  }
};

console.log(playRound(playerSelection, computerSelectionVar));
