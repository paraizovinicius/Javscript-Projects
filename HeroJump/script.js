const personagem = document.querySelector(".personagem");
const velocidade = 10;
const alturaDoPulo = 100;
let posicao = 0;
let subindo = false;


var hero_moving = document.createElement("img");
hero_moving.src = "mario.gif";

var hero_still = document.createElement("img");
hero_still.src = "marioparado.png";
personagem.innerHTML = "";
personagem.appendChild(hero_still);


function moverParaDireita() {
    
    posicao += velocidade;
    personagem.style.left = posicao + "px";
    personagem.innerHTML = "";
    personagem.appendChild(hero_moving);
}

function moverParaEsquerda() {
    
    posicao -= velocidade;
    personagem.style.left = posicao + "px";
    personagem.innerHTML = "";
    personagem.appendChild(hero_moving);
}

function parar() {
    personagem.innerHTML = "";
    personagem.appendChild(hero_still);
}



const pular = () => {
    personagem.classList.add('jump');

    setTimeout(() => {
        personagem.classList.remove('jump');
    }, 500);
};

document.addEventListener("keydown", function (event) {
    if (event.code === "ArrowRight") {
        moverParaDireita();
    } else if (event.code === "ArrowLeft") {
        moverParaEsquerda();
    } else if (event.code === "Space") {
        pular(); 
    }
});

document.addEventListener("keyup", function (event) {
    if (event.code === "ArrowRight" || event.code === "ArrowLeft") {
        parar();
    }
});