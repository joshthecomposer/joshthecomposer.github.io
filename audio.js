var beep = new Audio("./assets/beep.mp3");
var beep2 = new Audio("./assets/highBeep.mp3");
var rest = new Audio("./assets/rest.wav");
var victory = new Audio("./assets/victory.wav");

function playBeep() {
    beep.currentTime = 0;
    beep.play();
    return;
};

function playRest() { 
    rest.play();
    return;
};

function playEnd() { 
    victory.play();
    return;
};

function playBeep2() {
    beep2.currentTime = 0;
    beep2.play();
};