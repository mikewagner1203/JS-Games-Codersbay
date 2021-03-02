

let monsterDistance;
let showthrow = document.getElementById("showthrow");
showthrow.innerHTML = "Deine Wurfweite: ";

let trycounter = document.getElementById("trycounter");
let counter = 0; 

MonDist();

function shoot() {
    counter--;
    let v0 = document.getElementById("v0").value;
    let angle = document.getElementById("angle").value;
    angle = angle * (Math.PI / 180);
    
    let g = document.getElementById("planet");
    g = g.options[g.selectedIndex].value;
    
    let throwDistance = ((v0 * v0) * Math.sin(2 * angle)) / g;
    throwDistance = Math.round(throwDistance);
    
    if (throwDistance == monsterDistance) {
        let popupwin = document.getElementById("popupwin");
        popupwin.style.display = "flex";
    }
    else {        
        showthrow.innerHTML = "Deine Wurfweite war: " + throwDistance + " meter."; 
        console.log(counter); // Löschen
        trycounter.innerHTML = "Du hast noch " + counter + " Versuche.";
        
        if(counter == 0) {
            popuplose.style.display = "flex";
        }
    }
}

// Schliesst Popup 
function closePopup() {
    window.location.reload();
}

// Monsterentfernung anzeigen
function MonDist() {
    monsterDistance = Math.round(Math.random() * 90 + 10);
    let showdist = document.getElementById("showdist");
    showdist.innerHTML = "Das Monster ist: " + monsterDistance + " m entfernt.";    
}

function play() {
    let gamecount = document.getElementById("gamecount");
    counter = document.getElementById("gamecountinput").value;
    
    console.log("countervalue = " + counter);   
    if (counter <= 0) {
        alert("Wähle einen Planeten aus und gib die anzahl der Versuche ein die du spielen möchtest");
        window.location.reload();
    }
    gamecount.style.display = "none";
    trycounter.innerHTML = "Du hast " + counter + " Versuche.";
}










