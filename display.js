let header = document.getElementById('header');
let container = document.getElementById('container');

function hideHeader() {
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