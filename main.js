function init() {
  const symbols = document.querySelectorAll(".symbol");
  for (let i = 0; i < symbols.length; i++) {
    symbols[i].addEventListener("click", myFunc);
  }
}

function myFunc(event) {
  if (event.target.id === "paper") {
    playRound("papier");
  } else if (event.target.id === "rock") {
    playRound("stein");
  } else if (event.target.id === "scissor") {
    playRound("schere");
  }
}

function computerPlay() {
  const cpuPlay = ["schere", "stein", "papier"];
  const cpuNumb = parseInt(Math.random() * 3);

  const cpuSelect = cpuPlay[cpuNumb];

  return cpuSelect;
}

let playerPoints = 0;
let cpuPoints = 0;

let playRound = function (playerChoice) {
  const reset = document.querySelector(".reset");
  const cpu = computerPlay();
  let player = playerChoice;
  const ausgabe = document.querySelector(".ausgabe");
  const scorePlayer = document.querySelector(".scorePlayer");
  const scoreCpu = document.querySelector(".scoreCpu");

  if (player === "schere" && cpu === "papier") {
    ausgabe.textContent = "Du gewinnst! - Schere schlägt Papier";
    playerPoints++;
    scorePlayer.textContent = playerPoints;
  } else if (player === "stein" && cpu === "schere") {
    ausgabe.textContent = "Du gewinnst! - Stein schlägt Schere";
    playerPoints++;
    scorePlayer.textContent = playerPoints;
  } else if (player === "papier" && cpu === "stein") {
    ausgabe.textContent = "Du gewinnst! - Papier schlägt Stein";
    playerPoints++;
    scorePlayer.textContent = playerPoints;
  } else if (player === cpu) {
    ausgabe.textContent = "Unentschieden";
  } else if (player === "schere" && cpu === "stein") {
    ausgabe.textContent = "Du verlierst - Stein schlägt Schere";
    cpuPoints++;
    scoreCpu.textContent = cpuPoints;
  } else if (player === "stein" && cpu === "papier") {
    ausgabe.textContent = "Du verlierst - Papier schlägt Stein";
    cpuPoints++;
    scoreCpu.textContent = cpuPoints;
  } else {
    ausgabe.textContent = "Du verlierst - Schere schlägt Papier";
    cpuPoints++;
    scoreCpu.textContent = cpuPoints;
  }
  if (playerPoints === 5 && playerPoints > cpuPoints) {
    ausgabe.textContent =
      "Der Spieler gewinnt mit " + playerPoints + ":" + cpuPoints;
    ausgabe.style.backgroundColor = "green";
  } else if (cpuPoints === 5 && playerPoints < cpuPoints) {
    ausgabe.textContent =
      "Der Computer gewinnt mit " + cpuPoints + ":" + playerPoints;
    ausgabe.style.backgroundColor = "red";
  }
  reset.addEventListener(
    "click",
    function () {
      document.querySelector(".ausgabe").textContent = "";
      document.querySelector(".scorePlayer").textContent = 0;
      document.querySelector(".scoreCpu").textContent = 0;
      location.reload();
    },
    false
  );
  if (playerPoints === 5 || cpuPoints === 5) {
    const symbols = document.querySelectorAll(".symbol");
    for (let i = 0; i < symbols.length; i++) {
      symbols[i].removeEventListener("click", myFunc);
    }
  }
};

init();
