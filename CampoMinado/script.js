function showAllBombs() {
    var table = document.querySelector(".GameBoard");
    var cells = table.querySelectorAll("td");

    cells.forEach((cell, index) => {
        if (randomCellsIndexes.includes(index)) { // if cell is a bomb
            var bomb = document.createElement("img");
            bomb.src = "bombear.png";

            // Substitui o conteúdo da célula pelo elemento de imagem
            cell.innerHTML = "";
            cell.appendChild(bomb);
        }
    });
}



function SumBombas(index, randomCellsIndexes) {
    var _sumBombas = 0;

    if (randomCellsIndexes.includes(index - 9)) {
        _sumBombas++;
    }
    if (randomCellsIndexes.includes(index - 8)) {
        _sumBombas++;
    }
    if (randomCellsIndexes.includes(index - 7)) {
        _sumBombas++;
    }
    if (randomCellsIndexes.includes(index - 1)) {
        _sumBombas++;
    }
    if (randomCellsIndexes.includes(index + 1)) {
        _sumBombas++;
    }
    if (randomCellsIndexes.includes(index + 7)) {
        _sumBombas++;
    }
    if (randomCellsIndexes.includes(index + 8)) {
        _sumBombas++;
    }
    if (randomCellsIndexes.includes(index + 9)) {
        _sumBombas++;
    }


    return _sumBombas
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


function ClickCells() {
    var table = document.querySelector(".GameBoard");
    var cells = table.querySelectorAll("td");
    var gameover = 0;

    // Cria um array somente com o índice de todas as células da tabela
    // o 'value' é desprezado neste caso
    var cellIndexes = Array.from({ length: cells.length }, (_, index) => index); // essa função será aplicada para cada item do array

    // Seleciona aleatoriamente 16 células da tabela
    var randomCellsIndexes = getRandomValues(cellIndexes, 16); //Função getRandomValues
    console.log(randomCellsIndexes)

    // Define o evento onclick para cada uma das células selecionadas
    if (gameover == 0) {
        cellIndexes.forEach(index => {
            cells[index].onclick = function () {


                if (randomCellsIndexes.includes(index)) { // GAME OVER


                    cells.forEach((cell, index )=> { // Fazer aparecer todas as bombas

                        if (randomCellsIndexes.includes(index)) { // if cell is a bomb
                            var bomb = document.createElement("img");
                            bomb.src = "bombear.png";
                
                            // Substitui o conteúdo da célula pelo elemento de imagem
                            cell.innerHTML = "";
                            cell.appendChild(bomb);
                        }
                    });
                    gameover++;
                    showGameOver();

                    // Remove o evento onclick de todas as células para impedir que o jogo continue
                    cells.forEach(cell => {
                        cell.onclick = null;
                    });
                }

                else { // CASO NÃO FOR GAME OVER ...

                    if (SumBombas(index, randomCellsIndexes) == 1) {
                        var um = document.createElement("img");
                        um.src = "1.png";
                        this.innerHTML = "";
                        this.appendChild(um);
                    }
                    if (SumBombas(index, randomCellsIndexes) == 2) {
                        var dois = document.createElement("img");
                        dois.src = "2.png";
                        this.innerHTML = "";
                        this.appendChild(dois);
                    }
                    if (SumBombas(index, randomCellsIndexes) == 3) {
                        var tres = document.createElement("img");
                        tres.src = "3.png";
                        this.innerHTML = "";
                        this.appendChild(tres);
                    }
                    if (SumBombas(index, randomCellsIndexes) == 4) {
                        var quatro = document.createElement("img");
                        quatro.src = "4.png";
                        this.innerHTML = "";
                        this.appendChild(quatro);
                    }
                    if (SumBombas(index, randomCellsIndexes) == 5) {
                        var cinco = document.createElement("img");
                        cinco.src = "5.png";
                        this.innerHTML = "";
                        this.appendChild(cinco);
                    }
                }
            };
        });
    }
}





function showGameOver() {
    var h1 = document.createElement("h1");
    h1.textContent = "Game Over";
    h1.classList.add("gameover");
    document.body.appendChild(h1);
}



ClickCells();


