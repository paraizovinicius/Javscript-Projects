
const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');


const jump = () => {
    mario.classList.add('jump');

    console.log(mario)

    setTimeout(() => {
        mario.classList.remove('jump');
    }, 500);
};

const loop = setInterval(() => {

    const pipePosition = pipe.offsetLeft;
    const marioPosition = window.getComputedStyle(mario).bottom;
    console.log(marioPosition)

    if (pipePosition < 120 && pipePosition > 50 && marioPosition < '110px'){
        pipe.style.animation = 'none';
        pipe.style.left = `${pipePosition}px`
    }
},10);

function addEventListenerToSpaceBar() {
    document.addEventListener("keydown", function (event) {
        if (event.code === "Space") {
            jump();
        }
    });
}
addEventListenerToSpaceBar();




