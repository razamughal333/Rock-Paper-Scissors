let playerScoreEl = document.querySelector("#player-score");
let computerScoreEl = document.querySelector("#computer-score");
let drawScoreEl = document.querySelector("#draw-score");
let playerScore = 0;
let computerScore = 0;
let drawScore = 0;

function getComputerChoice() {
  let computerOptions = ["rock", "paper", "scissors"];
  let randomIndex = Math.floor(Math.random() * 3);
  return computerOptions[randomIndex];
}
// Logic to determine the winner
function getResult(player, computer) {
  if (player === computer) {
    return "draw";
  }

  if (
    (player === "rock" && computer === "scissors") ||
    (player === "paper" && computer === "rock") ||
    (player === "scissors" && computer === "paper")
  ) {
    return "win";
  } else {
    return "lose";
  }
}

let choices = document.querySelectorAll(".choice");
let resultMessage = document.querySelector("#result-message"); //El to display result
let instruction = document.querySelector(".instruction");

choices.forEach((button) => {
  button.addEventListener("click", () => {
    let playerChoice = button.id; //get id attribute of the button clicked
    let computerChoice = getComputerChoice();
    let result = getResult(playerChoice, computerChoice); //get result of the round and decide what to do

    if (result === "win") {
      playerScore++;
      playerScoreEl.innerText = playerScore;
      resultMessage.innerText = `Your ${playerChoice}, beats ${computerChoice} — You Win!`;
      resultMessage.style.color = "#51ff00";
      resultMessage.style.backgroundColor = "#000000";
      resultMessage.style.borderRadius = "5px";
      resultMessage.style.padding = "2px";
    } else if (result === "lose") {
      computerScore++;
      computerScoreEl.innerText = computerScore;
      resultMessage.innerText = `${computerChoice} beats your ${playerChoice} — You Lose!`;
      resultMessage.style.color = "#d12929";
      resultMessage.style.backgroundColor = "#ffebeb";
      resultMessage.style.borderRadius = "5px";
      resultMessage.style.padding = "2px";
    } else {
      drawScore++;
      drawScoreEl.innerText = drawScore;
      resultMessage.innerText = `You both picked ${playerChoice} — It's a Draw!`;
      resultMessage.style.color = "#0c457d";
      resultMessage.style.backgroundColor = "#e97509";
      resultMessage.style.borderRadius = "5px";
      resultMessage.style.padding = "2px";
    }

    instruction.style.display = "none";
  });
});
