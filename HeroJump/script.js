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
personagem.appendChild(hero_still); // o personagem vai inicializar parado

const pular = () => {
    personagem.classList.add('jump');

    setTimeout(() => {
        personagem.classList.remove('jump');
    }, 500);
};

let movimentoParaDireita = null;
let movimentoParaEsquerda;
let emMovimentoDireita = false;
let emMovimentoEsquerda = false;


function moverParaDireita() {
    if (!emMovimentoDireita) {
        emMovimentoDireita = true;
  
      movimentoParaDireita = setInterval(() => {
        posicao += velocidade;
        personagem.style.left = posicao + "px";
        personagem.innerHTML = "";
        personagem.appendChild(hero_moving);
      }, 30);
    }
  
    setTimeout(() => {
      clearInterval(movimentoParaDireita);
      emMovimentoDireita = false;
    }, 3000);
  }




  function moverParaEsquerda() {
    if (!emMovimentoEsquerda) {
        emMovimentoEsquerda = true;
  
      movimentoParaEsquerda = setInterval(() => {
        posicao -= velocidade;
        personagem.style.left = posicao + "px";
        personagem.innerHTML = "";
        personagem.appendChild(hero_moving);
      }, 30);
    }
  
    setTimeout(() => {
      clearInterval(movimentoParaEsquerda);
      emMovimentoEsquerda = false;
    }, 3000);
  }


function parar() {
    clearInterval(movimentoParaDireita);
    clearInterval(movimentoParaEsquerda);
    personagem.innerHTML = "";
    personagem.appendChild(hero_still);
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

document.addEventListener("keyup", function (event) {
    if (event.code === "ArrowRight" || event.code === "ArrowLeft") {
        parar();
    }
});
