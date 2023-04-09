
function init() {
    const mario = document.querySelector('.mario');
    

    const jump = () => {
        mario.classList.add('jump');

        console.log(mario)

        setTimeout(() => {
            mario.classList.remove('jump');
        }, 500);
    };

    function addEventListenerToSpaceBar() {
        document.addEventListener("keydown", function (event) {
            if (event.code === "Space") {
                jump();
            }
        });
    }

    addEventListenerToSpaceBar();
}

init();