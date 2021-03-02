let yourguess = document.getElementById("yourguess");
let showresult = document.getElementById("showresult");
let showcounter = document.getElementById("showcounter");
let maxnumber;
let number;
let counter;

function play() {
    let startpopup = document.getElementById("startPopup");
    startpopup.style.display = "none";
    counter = document.getElementById("gamecountinput").value;
    maxnumber = document.getElementById("maxnumber").value;
    number = Math.floor(Math.random() * maxnumber);
    showcounter.innerHTML = "Versuche: " + counter;
    let shownumber = document.getElementById("instruct")
    shownumber.innerHTML = "Versuche die Zahl zwischen 1 und " + maxnumber + " zu erraten.";
    if (counter <= 0 || maxnumber <= 0) {
        alert("Gib die Maximale Zahl und die Versuche ein (1-999).");
        window.location.reload();
    }
    console.log(number);
}

function checkNumber() {
    let guess = parseInt(yourguess.value);			
    if (guess < number) {
        showresult.append(guess + " war zu niedrig. | ");
    }
    if (guess > number) {
        showresult.append(guess + " war zu hoch. | ");
    }
    if (guess == number) {
        showresult.innerHTML  = "Richtig!";
        popupwin.style.display = "flex";
    } 

    counter--
    showcounter.innerHTML = "Versuche: " + counter;   

    if (counter == 0) {
        popuplose.style.display = "flex";
    }    
}

function closePopup() {
    window.location.reload();
}

