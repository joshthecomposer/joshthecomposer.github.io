//Button Variables
var button1 = document.getElementById("button-container");
var button2 = document.getElementById("button-container2");
var button3 = document.getElementById("button-container3");

//Exercise Variables
var exercise = document.getElementById("exercise");
var rest = document.getElementById("rest");
var sets = document.getElementById("sets");
var saveState = false;
var exerciseTimerInit;
var restTimerInit;

//Audio Variables
var beginAudio = new Audio('audio/begin.mp3');
var restAudio = new Audio('audio/rest.mp3');
var setAudio = new Audio('audio/nextSet.mp3');
var endAudio = new Audio('audio/done.mp3');
button1.addEventListener("click", function () {
    exerciseTimerInit = exercise.value;
    restTimerInit = rest.value;
});
button1.addEventListener("click", startExercise);
button1.addEventListener("click", beginAudioFn);

function beginAudioFn() {
    beginAudio.play();
}


function startExercise() {
    button3.style.display = "none";
    button3
    var timer;

    if (saveState) {
        timer = document.getElementById('timer-text').innerHTML;
    } else {
        timer = exerciseTimerInit;
        saveState = false;
    }

    button1.style.display = "none";
    button2.style.display = "grid";
    button2.addEventListener("click", function () {
        button1.style.display = "grid";
        button2.style.display = "none";
        clearInterval(myInterval);
        saveState = true;
})
    document.getElementById('timer-text').innerHTML = timer;

    myInterval = setInterval(n, 1000);

    function n() {
            button1.removeEventListener("click", beginAudioFn);
            if (timer >= 1) { 
                timer--;
                document.getElementById('timer-text').innerHTML = timer;
                saveState = false;
            } else {
                if (sets.value <= 1) {
                    sets.value = 0;
                    endAudio.play();
                    clearInterval(myInterval);
                    return;
                } else {
                    clearInterval(myInterval);
                    restAudio.play();
                    startRest();
                    sets.value = sets.value - 1;
                    sets.innerHTML = sets.value;
                }
        }
    }
};


function startRest() {
    button2.style.display = "none";
    button3.style.display = "grid";
    var timer = rest.value;

    document.getElementById('timer-text').innerHTML = timer;

    myInterval = setInterval(n, 1000);

    function n() {
        if (timer >= 1) {
            timer--;
            document.getElementById('timer-text').innerHTML = timer;
        } else {
            clearInterval(myInterval);
            setAudio.play();
            saveState = false;
            startExercise();
        }
    }
}