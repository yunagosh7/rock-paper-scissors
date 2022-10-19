const buttons = document.querySelectorAll('button');
const scoreUser = document.getElementById("scoreUser");
const scoreComputer = document.getElementById("scoreComputer"); 
const layer = document.getElementById("layer");

//* Function for game
const computerSelection = () => {
  let n = Math.random() * 10;
  let selection = Math.floor(n);
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

const playRound = (playerSelection, computerSelectionVar) => {
  if (
    (playerSelection == "piedra" && computerSelectionVar == "papel") ||
    (playerSelection == "papel" && computerSelectionVar == "tijera") ||
    (playerSelection == "tijera" && computerSelectionVar == "piedra")
  ) {
    return "¡Has perdido la ronda!";
  } else if (
    (playerSelection == "piedra" && computerSelectionVar == "tijera") ||
    (playerSelection == "papel" && computerSelectionVar == "piedra") ||
    (playerSelection == "tijera" && computerSelectionVar == "papel")
  ) {
    return "¡Has ganado la ronda!";
  } else if (playerSelection == computerSelectionVar) {
    return "¡Empate!";
  }
};

let wins = 0;
let loses = 0;
//* Code for DOM manipulation
buttons.forEach((button)=>{
  button.addEventListener('click',()=>{
    let playerSelection = button.id;
    let computerSelectionVar = computerSelection()
    const playAgain = document.getElementById("playAgain")
    

    let response = playRound(playerSelection, computerSelectionVar)


    if(response == "¡Has ganado la ronda!"){
      wins++;
      scoreUser.textContent = wins;
    }
    else if(response == "¡Has perdido la ronda!"){
      loses++;
      scoreComputer.textContent = loses;
    }
    else if(response == "¡Empate!"){
      result.textContent = "¡Empate!"
    }
    if(wins == 5){
      result.textContent = "Has ganado!";
      layer.style.zIndex = "50"
    }
    else if(loses == 5){
      result.textContent = "Has perdido!";
      layer.style.zIndex = "50"

    }

  })
})


playAgain.addEventListener("click",()=>{
  wins = 0;
  loses = 0;
  scoreComputer.textContent = 0;
  scoreUser.textContent = 0;
  layer.style.zIndex = "0";
  result.textContent = "Clickea para jugar"
})