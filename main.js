function computerPlay(){
    const cpuPlay = ["Schere", "Stein", "Papier"];
    const cpuNumb = parseInt(Math.random() * 3);

    const cpuSelect = cpuPlay[cpuNumb];

    return cpuSelect
}


let playRound = function(){

    const player = prompt("Bitte geben Sie ihre Wahl ein:");
    const cpu = computerPlay();

    if (player === "Schere" && cpu === "Papier") {
        return "Du gewinnst! - Schere schlägt Papier"
    } else if (player === "Stein" && cpu === "Schere") {
        return  "Du gewinnst! - Stein schlägt Schere"
    } else if (player === "Papier" && cpu === "Stein") {
        return "Du gewinnst! - Papier schlägt Stein"
    } else if (player === cpu) {
        return "Unentschieden"
    } else if (player === "Schere" && cpu === "Stein") {
        return "Du verlierst - Stein schlägt Schere"
    } else if (player === "Stein" && cpu === "Papier") {
        return "Du verlierst - Papier schlägt Stein"
    } else {
        return "Du verlierst - Schere schlägt Papier"
    }
}

function game(){
    let playerPoints = 0;
    let cpuPoints = 0;

    for (let i = 0; i<5; i++) {
        let ergebnis = playRound()
        console.log(ergebnis)
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
