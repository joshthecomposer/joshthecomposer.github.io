//Button Variables
var button1 = document.getElementById("button-container");
var button2 = document.getElementById("button-container2");
var button3 = document.getElementById("button-container3");
var button5 = document.getElementById("button-container5");

//Exercise Variables
var exercise = document.getElementById("exercise");
var rest = document.getElementById("rest");
var sets = document.getElementById("sets");
var saveState = false;
var exerciseTimerInit;
var restTimerInit;
var working = document.getElementById("working");
var resting = document.getElementById("resting");
var finished = document.getElementById("finished");

//Audio Variables
var beginAudio = new Audio('audio/begin.mp3');
var restAudio = new Audio('audio/rest.mp3');
var setAudio = new Audio('audio/nextSet.mp3');
var endAudio = new Audio('audio/done.mp3');


//functions and eventListeners for button clicks

function refreshPage() {
    window.location.reload();
};

button1.addEventListener("click", function () {
    exerciseTimerInit = exercise.value;
    restTimerInit = rest.value;
});

button1.addEventListener("click", function (){
    if (exercise.value <= 0) {
        alert("Come on, do the bare minimum here. Enter a positive value in the exercise field at the very least...");
    } else {
        button5.addEventListener("click", function () {
            startExercise();
        });
        startExercise();
        beginAudioFn();
        
    };
});

function beginAudioFn() {
    beginAudio.play();
};



//function for counting down and pausing the inputed exercise timer
//when timer hits zero, function checks whether there are still sets left. If so, it
//begins startRest based on user rest input

function startExercise() {

    resting.style.display = "none";
    working.style.display = "block";
    button3.style.display = "none";
    button5.style.display = "none";
    var timer;

    if (saveState) {
        timer = document.getElementById('timer-text').innerHTML;
    } else {
        timer = exerciseTimerInit;
        saveState = false;
    }
    document.getElementById("button").innerHTML = "Continue";
    button1.style.display = "none";
    button2.style.display = "grid";
    button2.addEventListener("click", function () {
        button5.style.display = "grid";
        button2.style.display = "none";
        clearInterval(myInterval);
        saveState = true;
})
    document.getElementById('timer-text').innerHTML = timer;

    myInterval = setInterval(n, 1000);

    function n() {
            if (timer >= 1) { 
                timer--;
                document.getElementById('timer-text').innerHTML = timer;
                saveState = false;
            } else {
                if (sets.value <= 1) {
                    sets.value = 0;
                    endAudio.play();
                    clearInterval(myInterval);
                    document.getElementById('timer-text').innerHTML = "00";
                    working.style.display = "none";
                    finished.style.display = "block";
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

//function that starts the rest timer based on user input
// when timer hits 0, returns startExercise and begins countdown
//button does not allow pausing during rest timer because I don't feel it is necessary


function startRest() {
    working.style.display = "none";
    resting.style.display = "block";
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