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

function getResult(player, computer) {
  if (player === computer) return "draw";

  if (
    (player === "rock" && computer === "scissors") ||
    (player === "paper" && computer === "rock") ||
    (player === "scissors" && computer === "paper")
  ) {
    return "win";
  }

  return "lose";
}

let choices = document.querySelectorAll(".choice");
let resultMessage = document.querySelector("#result-message"); //El to display result
let instruction = document.querySelector(".choice-instruction");

choices.forEach((button) => {
  button.addEventListener("click", () => {
    let playerChoice = button.id;
    let computerChoice = getComputerChoice();
    let outcome = getResult(playerChoice, computerChoice);

    if (outcome === "win") {
      playerScore++;
      playerScoreEl.textContent = playerScore;
      resultMessage.textContent = `Your ${playerChoice}, beats ${computerChoice} — You Win!`;
      resultMessage.style.color = "#51ff00";
      resultMessage.style.backgroundColor = "#000000";
      resultMessage.style.borderRadius = "5px";
      resultMessage.style.padding = "2px";
    } else if (outcome === "lose") {
      computerScore++;
      computerScoreEl.textContent = computerScore;
      resultMessage.textContent = `${computerChoice} beats your ${playerChoice} — You Lose!`;
      resultMessage.style.color = "#d12929";
      resultMessage.style.backgroundColor = "#ffebeb";
      resultMessage.style.borderRadius = "5px";
      resultMessage.style.padding = "2px";
    } else {
      drawScore++;
      drawScoreEl.textContent = drawScore;
      resultMessage.textContent = `You both picked ${playerChoice} — It's a Draw!`;
      resultMessage.style.color = "#0c457d";
      resultMessage.style.backgroundColor = "#e97509";
      resultMessage.style.borderRadius = "5px";
      resultMessage.style.padding = "2px";
    }

    instruction.style.display = "none";
  });
});
