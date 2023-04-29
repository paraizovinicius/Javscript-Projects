const personagem = document.getElementById("personagem");
const velocidade = 10;
const alturaDoPulo = 100;
let posicao = 0;
let subindo = false;

function moverParaDireita() {
    posicao += velocidade;
    personagem.style.left = posicao + "px";
    console.log(posicao)
}

function moverParaEsquerda() {
    posicao -= velocidade;
    personagem.style.left = posicao + "px";
}

function pular() {
    subindo = true;
    const intervalo = setInterval(function () {
        if (posicao <= alturaDoPulo && subindo) {
            posicao += velocidade;
            personagem.style.bottom = posicao + "px";
        } else if (posicao > 0) {
            posicao -= velocidade;
            personagem.style.bottom = posicao + "px";
            subindo = false;
        } else {
            clearInterval(intervalo);
        }
    }, 10);
}

document.addEventListener("keydown", function (event) {
    if (event.code === "ArrowRight") {
        moverParaDireita();
    } else if (event.code === "ArrowLeft") {
        moverParaEsquerda();
    } else if (event.code === "Space") {
        pular();
    }
});