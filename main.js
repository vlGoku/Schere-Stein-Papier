function computerPlay(){
    const cpuPlay = ["Schere", "Stein", "Papier"];
    const cpuNumb = parseInt(Math.random() * 3);

    const cpuSelect = cpuPlay[cpuNumb];

    return cpuSelect
}


const playerSelect = prompt("Bitte geben Sie ihre Wahl ein:");
const computerSelect = computerPlay();

function playRound(player, cpu){

    if (player === "Schere" && cpu === "Papier") {
        const ergebnis = "Du gewinnst! - Schere schlägt Papier"
    } 

}