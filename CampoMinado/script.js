function replaceCell(cell) {
    // Cria um novo elemento de imagem
    var bomb = document.createElement("img");
    bomb.src = "bombear.png";

    // Substitui o conteúdo da célula pelo elemento de imagem
    cell.innerHTML = "";
    cell.appendChild(bomb);

}

function getRandomValues(array, quantity) { // Seleciona valores aleatórios dentre o nosso array com 'quantity' elementos
    var shuffledArray = array.slice();
    for (var i = shuffledArray.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = shuffledArray[i];
        shuffledArray[i] = shuffledArray[j];
        shuffledArray[j] = temp;
    }

    return shuffledArray.slice(0, quantity);
}


function setBombedCells() {
    var table = document.querySelector(".GameBoard");
    var cells = table.querySelectorAll("td");
    var c = 0;

    // Cria um array somente com o índice de todas as células da tabela
    // o 'value' é desprezado neste caso
    var cellIndexes = Array.from({ length: cells.length }, (_, index) => index); // essa função será aplicada para cada item do array

    // Seleciona aleatoriamente 16 células da tabela
    var randomCellsIndexes = getRandomValues(cellIndexes, 16); //Função getRandomValues
    console.log(randomCellsIndexes)

    // Define o evento onclick para cada uma das células selecionadas
    randomCellsIndexes.forEach(index => {
        cells[index].onclick = function () {
            if (c == 0){
            replaceCell(this);
            c++;
            showGameOver();
            }
        };
    });
}

function clickCells(){
    var table = document.querySelector(".GameBoard");
    var cells = table.querySelectorAll("td");

    
}


function showGameOver() {
    var h1 = document.createElement("h1");
    h1.textContent = "Game Over";
    h1.classList.add("gameover");
    document.body.appendChild(h1);
  }



setBombedCells();
clickCells();


