let gamecounter = 12;

let number1 = Math.round(Math.random() * 9 + 0.5);
let number2 = Math.round(Math.random() * 9 + 0.5);
let number3 = Math.round(Math.random() * 9 + 0.5);
console.log(number1, number2, number3); // Später löschen

function checkNumbers() {
    let pnum1 = document.getElementById("playernumber1")
    let pnum2 = document.getElementById("playernumber2");
    let pnum3 = document.getElementById("playernumber3");     
    
    let helper1 = document.getElementById("helper1");
    let helper2 = document.getElementById("helper2");
    let helper3 = document.getElementById("helper3");
    
    let rightPlace = 0;
    let showcounter = document.getElementById("gamecounter");
    console.log(gamecounter);
    // Nummern vergleichen und Helferfarben setzen.
    
    if (pnum1.value == number1) {
        rightPlace++; 
        console.log("rightPlace = check"); 
        helper1.style.backgroundColor = "rgb(127, 255, 0)";                     
    } else if (pnum1.value == number2 || pnum1.value == number3) {
        helper1.style.backgroundColor = "rgb(255, 255, 0)";
    } else if (pnum1.value != number1 && pnum1.value != number2 && pnum1.value != number3) {
        helper1.style.backgroundColor = "rgb(241, 44, 93)";
    }
    
    if (pnum2.value == number2) {
        rightPlace++; 
        console.log("rightPlace = check");  
        helper2.style.backgroundColor = "rgb(127, 255, 0)";      
    } else if (pnum2.value == number1 || pnum2.value == number3) {
        helper2.style.backgroundColor = "rgb(255, 255, 0)";
    } else if (pnum2.value != number1 && pnum2.value != number2 && pnum2.value != number3) {
        helper2.style.backgroundColor = "rgb(241, 44, 93)";
    }
    
    if (pnum3.value == number3) {
        rightPlace++;   
        console.log("rightPlace = check");  
        helper3.style.backgroundColor = "rgb(127, 255, 0)";            
    } else if (pnum3.value == number1 || pnum3.value == number2) {
        helper3.style.backgroundColor = "rgb(255, 255, 0)";
    } else if (pnum3.value != number1 && pnum3.value != number2 && pnum3.value != number3) {
        helper3.style.backgroundColor = "rgb(241, 44, 93)";
    } 
    
    gamecounter--;
    showcounter.innerHTML = "Du hast noch " + gamecounter + " Versuche.";
    
    // Siegbedingung
    if (rightPlace == 3 && gamecounter > 0) {
        popupwin.style.display = "flex";
    }
    // Spiel verloren
    if (gamecounter == 0) {
        popuplose.style.display = "flex";
    }    
}

function closePopup() {
    window.location.reload();
}

function play() {
    let startpopup = document.getElementById("startPopup");
    startpopup.style.display = "none";
}

        