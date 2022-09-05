//animate hiding the header by moving the entire website into the aether.

function hideHeader() {
    let container = document.getElementById('container');
    //keyframes
    container.animate([
        { transform: 'translateY(0rem)' },
        { transform: 'translateY(-10rem)' }
    ], {
        //timing options
        duration: 200,
        iterations: 1,
        fill: 'forwards'
    });
};

//animate the current activity box

function revealCurrentActivity() {
    let currentActivity = document.getElementById('working');
    let workingText = document.getElementById('workingText');
    setTimeout(function () { 
        currentActivity.style.display = '';
        currentActivity.animate([
            { height: '0rem' },
            { height: '8rem' }
        ], {
            //timing options
            duration: 400,
            iterations: 1,
            fill: 'forwards'
        });
    }, 500);

    setTimeout(function () { 
        workingText.style.display = 'inline-block';
    }, 1000);

};