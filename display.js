let header = document.getElementById('header');
let container = document.getElementById('container');

/Mobile/.test(navigator.userAgent) && !location.hash && setTimeout(function () {
    if (!scrollY) window.scrollTo(0, 1);
}, 1000);

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