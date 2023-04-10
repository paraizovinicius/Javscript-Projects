
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

    if (pipePosition < 120 && pipePosition > 0 && marioPosition < '100px'){
        pipe.style.animation = 'none';
        pipe.style.left = `${pipePosition}px`
        mario.src = 'game-over.png';
        
        
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




