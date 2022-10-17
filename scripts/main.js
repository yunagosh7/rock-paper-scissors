let decision;

const validateDecision = () => {
  decision = prompt("Piedra, papel o tijera?").toLowerCase();
  if (decision != "piedra" && decision != "papel" && decision != "tijera") {
    alert("Debe decidir si: piedra, papel o tijera");
    validateDecision();
  }
  return decision;
};


const computerSelection = () => {
  var n = Math.random() * 10;
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



const playRound = (playerSelection, computerSelectionVar) => {
    console.log(playerSelection, computerSelectionVar)
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




const game = (playRound, validateDecision, computerSelection)=>{
    let wins = 0;
    let loses = 0;
    let result;
    let playerSelection;
    let computerSelectionVar;
    for(let i=0; wins < 30 ; i++){
        playerSelection = validateDecision();
        computerSelectionVar = computerSelection();

        result = playRound(playerSelection,computerSelectionVar);
        if(result == '¡Has perdido la ronda!'){
            loses++;
            console.log('Vas perdiendo: ', loses, ' veces');
        }
        else if(result == '¡Has ganado la ronda!'){
            wins++;
            console.log('Vas ganando: ', wins, ' veces');
        }
        else if(result == '¡Empate!'){
            console.log('Empate!')
        }
        if(wins == 5 ) {
            console.log('Has ganado!')
            break
        } else if(loses == 5){
            console.log('Has perdido!')
            break
        }
    }
}

game(playRound,validateDecision,computerSelection)