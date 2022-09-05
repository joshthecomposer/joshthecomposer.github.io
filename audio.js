let beep = new Audio("./assets/beep.mp3");
let beep2 = new Audio("./assets/highBeep.mp3");
let rest = new Audio("./assets/rest.wav");
let victory = new Audio("./assets/victory.wav");

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
    beep2.play();
};