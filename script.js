
//Exercise Variables

//Two different play buttons, one for resuming exercise after pausing and one for resuming rest after pausing.
//This is to avoid weird issues with conflicting event listeners
var exPlayBtn = document.getElementById('exPlay');
var rePlayBtn = document.getElementById('rePlay');
var pauseBtn = document.getElementById('pause');
var resetBtn = document.getElementById('reset');

var working = document.getElementById('working');
var resting = document.getElementById('resting');
var finished = document.getElementById('finished');

//These variables are initialized so that later we can pull the user input values as strings to be converted to integers.
var exInput = document.getElementById('exercise');
var reInput = document.getElementById('rest');
var seInput = document.getElementById('sets');

//The variable which is updated for the countdown and for the remaining sets
var timerText = document.getElementById('time');
var setsText = document.getElementById('setsLeft');

//some empty variables to use later
var currentTextEx;
var currentTextRe;

//The user input integers that are stored after user input values are converted from strings
var storedExValue;
var storedReValue;
var storedSetsValue;

//Initial button press stores values from input fields
exPlayBtn.addEventListener('click', storeSeValue);
exPlayBtn.addEventListener('click', storeExValue);
exPlayBtn.addEventListener('click', storeReValue);

//on start button click, timer is executed and we are thrown into the loop
// also display a sets countdown on button press
// exPlayBtn.addEventListener('click', startExTimer);

//Refresh Page when reset button is clicked

function refreshPage() {
    window.location.reload();
    return false;
};

function storeExValue() {
    //check if input field of exercise is at least 1 otherwise alert the user
    if (exInput.value < 1 || exInput.value === NaN) {
        alert('Please enter a nonzero value in the exercise field');
        return;
    } else {
        exPlayBtn.removeEventListener('click', storeExValue);
        storedExValue = parseInt(exInput.value, 10);
        console.log('storedExValue = ' + storedExValue);
    
        //Hide sets input field and display a set countdown in its place
        document.getElementById('sets').style.display = 'none';
        document.getElementById('hideThis').style.display = 'none';
        document.getElementById('setsLeft').style.display = '';
        startExTimer();
    }
};

function storeReValue() {
    if (reInput.value < 1 || reInput.value === NaN) {
        return;
    } else {
        exPlayBtn.removeEventListener('click', storeReValue);
        storedReValue = parseInt(reInput.value, 10);
        console.log('storedReValue = ' + storedReValue);
    };
};

function storeSeValue() {
    if (seInput.value < 1 || seInput.value === NaN) {
        return;
    } else {
        exPlayBtn.removeEventListener('click', storeSeValue);
        storedSetsValue = parseInt(seInput.value, 10);
        setsText.innerText = storedSetsValue;
        console.log('total sets = ' + storedSetsValue);
    }
};



//EXERCISE TIMER FUNCTIONS

function startExTimer() {
    working.style.display = '';
    if (currentTextEx !== undefined) {
        console.log("current text ex = " + currentTextEx);
        timerText.innerText = currentTextEx;
        exPlayBtn.removeEventListener('click', startExTimer);
        myInterval = setInterval(counterEx, 1000);
    } else {
        exPlayBtn.removeEventListener('click', startExTimer);
        timerText.innerText = storedExValue;
        myInterval = setInterval(counterEx, 1000);
    }
};

function counterEx() {
    if (timerText.innerText >= 1) {
        if (timerText.innerText <= 3 && timerText.innerText > 0) {
            playBeep();
        }
        pauseBtn.addEventListener('click', function () { 
            clearInterval(myInterval);
            currentTextEx = timerText.innerText;
            exPlayBtn.addEventListener('click', startExTimer);
            pauseBtn.removeEventListener('click', arguments.callee);
        });
        timerText.innerText--;
    } else {
        if (storedSetsValue <= 1) {
            clearInterval(myInterval);
            setsText.innerText = 0;
            working.style.display = 'none';
            finished.style.display = '';
            playEnd();
            return;
        } else {
            clearInterval(myInterval);
            currentTextRe = storedReValue;
            exPlayBtn.style.display = 'none';
            rePlayBtn.style.display = '';
            working.style.display = 'none';
            resting.style.display = '';
            storedSetsValue--;
            setsText.innerText = storedSetsValue;
            playRest();
            return startReTimer();
        }
    }
};


//REST TIMER FUNCTIONS

function startReTimer() {
    if (currentTextRe !== undefined) {
        console.log("current text re = " + currentTextRe);
        timerText.innerText = currentTextRe;
        rePlayBtn.removeEventListener('click', startReTimer);
        myInterval = setInterval(counterRe, 1000);
    } else {
        rePlayBtn.removeEventListener('click', startReTimer);
        timerText.innerText = storedReValue;
        myInterval = setInterval(counterRe, 1000);
    }
};

function counterRe() {
    if (timerText.innerText >= 1) {
        if (timerText.innerText <= 3 && timerText.innerText > 0) {
            playBeep();
        }
        pauseBtn.addEventListener('click', function () { 
            clearInterval(myInterval);
            currentTextRe = timerText.innerText;
            rePlayBtn.addEventListener('click', startReTimer);
            pauseBtn.removeEventListener('click', arguments.callee);
        });
        timerText.innerText--;
    } else {
        clearInterval(myInterval);
        currentTextEx = storedExValue;
        rePlayBtn.style.display = 'none';
        exPlayBtn.style.display = '';
        resting.style.display = 'none';
        working.style.display = '';
        playBeep2();
        return startExTimer();
    }
};

