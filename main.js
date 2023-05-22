function computerPlay(){
    const cpuPlay = ["schere", "stein", "papier"];
    const cpuNumb = parseInt(Math.random() * 3);

    const cpuSelect = cpuPlay[cpuNumb];

    return cpuSelect
}


let playRound = function(){

    const player = prompt("Bitte geben Sie ihre Wahl ein: (Stein, Schere, Papier").toLowerCase();
    const cpu = computerPlay();

    if (player === "schere" && cpu === "papier") {
        return "Du gewinnst! - Schere schlägt Papier"
    } else if (player === "stein" && cpu === "schere") {
        return  "Du gewinnst! - Stein schlägt Schere"
    } else if (player === "papier" && cpu === "stein") {
        return "Du gewinnst! - Papier schlägt Stein"
    } else if (player === cpu) {
        return "Unentschieden"
    } else if (player === "schere" && cpu === "stein") {
        return "Du verlierst - Stein schlägt Schere"
    } else if (player === "stein" && cpu === "papier") {
        return "Du verlierst - Papier schlägt Stein"
    } else {
        return "Du verlierst - Schere schlägt Papier"
    }
}

function game(){
    let playerPoints = 0;
    let cpuPoints = 0;

    while (playerPoints < 5 && cpuPoints < 5) {
        let ergebnis = playRound();
        console.log(ergebnis);
        let pWin = ergebnis.indexOf('g');

        if (pWin === 3) {
            playerPoints++
        } else if (pWin === 27){
            cpuPoints++
        }
    }

    if (playerPoints > cpuPoints) {
        console.log ("Der Spieler gewinnt mit " + playerPoints + ":" + cpuPoints);
    } else if (cpuPoints > playerPoints) {
        console.log("Der Computer gewinnt mit " + cpuPoints + ":" + playerPoints);
    } else {
        console.log("Es ist ein Unentschieden");
    }
}
