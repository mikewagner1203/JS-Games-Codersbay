let symbolComputer;
let symbolSpieler;
let siegeComputer = 0;
let siegeSpieler = 0;
let cpuwahl;
let cpucount = document.getElementById("wincpu");
cpucount.innerHTML = "Computer: " + siegeComputer + " Siege";
let gewinnbedingung;
let playercount = document.getElementById("winplayer");
playercount.innerHTML = "Spieler: " + siegeSpieler + " Siege";
let spielerwahl;
let result = document.getElementById("result");
result.innerHTML = "Triff eine Wahl.";
let resultvs = document.getElementById("resultvs");



function choose(spielerwahl) {

// Computer wählt sein Symbol

    cpuwahl = Math.random() * 3;
    cpuwahl = Math.round(cpuwahl + 0,5);
    
    if(cpuwahl == 1) {
        symbolComputer = "Schere";
    }
    if(cpuwahl == 2) {
        symbolComputer = "Stein";
    }
    if(cpuwahl == 3) {
        symbolComputer = "Papier";
    }
    console.log("cpu wählt ? " + cpuwahl);     //Später löschen !!!
    
    // Spieler wählt sein Symbol
    console.log("spielerwahl beginnt");     //Später löschen !!!             
    if(spielerwahl == 1) {
        symbolSpieler = "Schere";
    }
    if(spielerwahl == 2) {
        symbolSpieler = "Stein";
    }
    if(spielerwahl == 3) {
        symbolSpieler = "Papier";
    }
    
    // Symbole Vergleichen Unentschieden
    if(symbolComputer == "Schere" && symbolSpieler == "Schere") {
        result.innerHTML = "Das Spiel ist unentschieden";
        resultvs.innerHTML ="CPU: " + symbolComputer + " --VS-- SPIELER: " + symbolSpieler;         
    }
    if(symbolComputer == "Stein" && symbolSpieler == "Stein") {
        result.innerHTML = "Das Spiel ist unentschieden";
        resultvs.innerHTML ="CPU: " + symbolComputer + " --VS-- SPIELER: " + symbolSpieler;        
    }
    if(symbolComputer == "Papier" && symbolSpieler == "Papier") {
        result.innerHTML = "Das Spiel ist unentschieden";
        resultvs.innerHTML ="CPU: " + symbolComputer + " --VS-- SPIELER: " + symbolSpieler;
    }
    
    // Symbole Schere und Papier
    if(symbolComputer == "Schere" && symbolSpieler == "Papier") {  
        siegeComputer++;      
        cpucount.innerHTML = "Computer: " + siegeComputer + " Siege";        
        result.innerHTML = "Der Computer gewinnt !!! ";
        resultvs.innerHTML ="CPU: " + symbolComputer + " --VS-- SPIELER: " + symbolSpieler;
    }
    if(symbolComputer == "Papier" && symbolSpieler == "Schere") {
        siegeSpieler++;
        playercount.innerHTML = "Spieler: " + siegeSpieler + " Siege";
        result.innerHTML = "Du gewinnst !!! ";
        resultvs.innerHTML ="CPU: " + symbolComputer + " --VS-- SPIELER: " + symbolSpieler;
    }
    
    // Symbole Papier und Stein
    if(symbolComputer == "Papier" && symbolSpieler == "Stein") {
        siegeComputer++;
        cpucount.innerHTML = "Computer: " + siegeComputer + " Siege";
        result.innerHTML = "Der Computer gewinnt !!! ";
        resultvs.innerHTML ="CPU: " + symbolComputer + " --VS-- SPIELER: " + symbolSpieler;
    }
    if(symbolComputer == "Stein" && symbolSpieler == "Papier") {
        siegeSpieler++
        playercount.innerHTML = "Spieler: " + siegeSpieler + " Siege";
        result.innerHTML = "Du gewinnst !!! ";
        resultvs.innerHTML ="CPU: " + symbolComputer + " --VS-- SPIELER: " + symbolSpieler;
    }
    
    // Symbole Stein und Schere
    if(symbolComputer == "Stein" && symbolSpieler == "Schere") {
        siegeComputer++;
        cpucount.innerHTML = "Computer: " + siegeComputer + " Siege";
        result.innerHTML = "Der Computer gewinnt !!! ";
        resultvs.innerHTML ="CPU: " + symbolComputer + " --VS-- SPIELER: " + symbolSpieler;
    }
    if(symbolComputer == "Schere" && symbolSpieler == "Stein") {
        siegeSpieler++
        playercount.innerHTML = "Spieler: " + siegeSpieler + " Siege";
        result.innerHTML = "Du gewinnst !!! ";
        resultvs.innerHTML ="CPU: " + symbolComputer + " --VS-- SPIELER: " + symbolSpieler;
    }

    // Wer hat gewonnen
    if(siegeSpieler == gewinnbedingung) {
        popupwin.style.display = "flex";
        result.innerHTML = "DU HAST GEWONNEN !!!";
    }
    if(siegeComputer == gewinnbedingung) {
        popuplose.style.display = "flex";
        result.innerHTML = "DU HAST VERLOREN !!!";
    }
        
}
function closePopup() {
    window.location.reload();
}

function play() {
    let gamecount = document.getElementById("startPopup");
    gewinnbedingung = document.getElementById("gamecountinput").value;

    if (gewinnbedingung <= 0) {
        alert("Gib an wie viele Siege man zum gewinnen benötigt");
        window.location.reload();
    }
    gamecount.style.display = "none";
    let wins = document.getElementById("wins");
    wins.innerHTML = "Wer als erstes " + gewinnbedingung + " Siege erreicht, gewinnt"
}







