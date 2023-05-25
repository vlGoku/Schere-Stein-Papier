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

  if (player === "schere" && cpu === "papier") {
    document.querySelector(".ausgabe").textContent =
      "Du gewinnst! - Schere schlägt Papier";
    playerPoints++;
    document.querySelector(".scorePlayer").textContent = playerPoints;
  } else if (player === "stein" && cpu === "schere") {
    document.querySelector(".ausgabe").textContent =
      "Du gewinnst! - Stein schlägt Schere";
    playerPoints++;
    document.querySelector(".scorePlayer").textContent = playerPoints;
  } else if (player === "papier" && cpu === "stein") {
    document.querySelector(".ausgabe").textContent =
      "Du gewinnst! - Papier schlägt Stein";
    playerPoints++;
    document.querySelector(".scorePlayer").textContent = playerPoints;
  } else if (player === cpu) {
    document.querySelector(".ausgabe").textContent = "Unentschieden";
  } else if (player === "schere" && cpu === "stein") {
    document.querySelector(".ausgabe").textContent =
      "Du verlierst - Stein schlägt Schere";
    cpuPoints++;
    document.querySelector(".scoreCpu").textContent = cpuPoints;
  } else if (player === "stein" && cpu === "papier") {
    document.querySelector(".ausgabe").textContent =
      "Du verlierst - Papier schlägt Stein";
    cpuPoints++;
    document.querySelector(".scoreCpu").textContent = cpuPoints;
  } else {
    document.querySelector(".ausgabe").textContent =
      "Du verlierst - Schere schlägt Papier";
    cpuPoints++;
    document.querySelector(".scoreCpu").textContent = cpuPoints;
  }
  if (playerPoints === 5 && playerPoints > cpuPoints) {
    document.querySelector(".ausgabe").textContent =
      "Der Spieler gewinnt mit " + playerPoints + ":" + cpuPoints;
  } else if (cpuPoints === 5 && playerPoints < cpuPoints) {
    document.querySelector(".ausgabe").textContent =
      "Der Computer gewinnt mit " + cpuPoints + ":" + playerPoints;
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
