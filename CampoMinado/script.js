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

function clickNeighbours(cells, index, clickedcells) { // Função ao clicar no 0, ele expandir para os vizinhos

    if (index % 8 == 0) { // Esquerda
        var neighbours = [
            index + 1,
            index + 8,
            index + 9,
            index - 7,
            index - 8
        ];

        // Filtra somente os índices válidos (dentro dos limites da tabela)
        neighbours = neighbours.filter(neighbour => {
            return neighbour >= 0 && neighbour < cells.length;
        });

        // Clica em cada célula vizinha
        neighbours.forEach(neighbour => {
            if(!clickedcells.includes(cells[neighbour])){
            cells[neighbour].click();
            }
        });

    }

    else {
        if ((index - 7) % 8 == 0) { // Direita
            var neighbours = [
                index - 1,
                index - 8,
                index - 9,
                index + 7,
                index + 8
            ];

            // Filtra somente os índices válidos (dentro dos limites da tabela)
            neighbours = neighbours.filter(neighbour => {
                return neighbour >= 0 && neighbour < cells.length;
            });

            // Clica em cada célula vizinha
            neighbours.forEach(neighbour => {
                if(!clickedcells.includes(cells[neighbour])){
                cells[neighbour].click();
                }
            });

        }
        else { // Centro
            var neighbours = [
                index - 1,          // esquerda
                index + 1,          // direita
                index - 7,
                index - 8,
                index - 9,
                index + 7,
                index + 8,
                index + 9
            ];

            // Filtra somente os índices válidos (dentro dos limites da tabela)
            neighbours = neighbours.filter(neighbour => {
                return neighbour >= 0 && neighbour < cells.length;
            });

            // Clica em cada célula vizinha
            neighbours.forEach(neighbour => {
                if(!clickedcells.includes(cells[neighbour])){
                cells[neighbour].click();
                }
            });
        }
    }



}


function SumBombas(index, randomCellsIndexes) {
    var _sumBombas = 0;

    if (index % 8 == 0) { // Esquerda

        if (randomCellsIndexes.includes(index + 1)) {
            _sumBombas++;
        }
        if (randomCellsIndexes.includes(index - 7)) {
            _sumBombas++;
        }
        if (randomCellsIndexes.includes(index - 8)) {
            _sumBombas++;
        }
        if (randomCellsIndexes.includes(index + 8)) {
            _sumBombas++;
        }
        if (randomCellsIndexes.includes(index + 9)) {
            _sumBombas++;
        }

    }
    else {
        if ((index - 7) % 8 == 0) { // Direita

            if (randomCellsIndexes.includes(index - 1)) {
                _sumBombas++;
            }
            if (randomCellsIndexes.includes(index + 7)) {
                _sumBombas++;
            }
            if (randomCellsIndexes.includes(index + 8)) {
                _sumBombas++;
            }
            if (randomCellsIndexes.includes(index - 8)) {
                _sumBombas++;
            }
            if (randomCellsIndexes.includes(index - 9)) {
                _sumBombas++;
            }

        }

        else {
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
        }
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



var numCliques = 0;
var clickedcells = [];

function ClickCells() {
    var table = document.querySelector(".GameBoard");
    var cells = table.querySelectorAll("td");
    var gameover = 0;

    // Cria um array somente com o índice de todas as células da tabela
    // o 'value' é desprezado neste caso
    var cellIndexes = Array.from({ length: cells.length }, (_, index) => index); // essa função será aplicada para cada item do array

    // Seleciona aleatoriamente 10 células da tabela
    var randomCellsIndexes = getRandomValues(cellIndexes, 10); //Função getRandomValues
    console.log(randomCellsIndexes)

    // Define o evento onclick para cada uma das células selecionadas
    if (gameover == 0) {
        cellIndexes.forEach(index => {

            cells[index].onclick = function () {

                if (randomCellsIndexes.includes(index)) { // GAME OVER


                    cells.forEach((cell, index) => { // Fazer aparecer todas as bombas

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

                    if (SumBombas(index, randomCellsIndexes) == 0) {
                        var zero = document.createElement("img");
                        zero.src = "0.png";
                        this.innerHTML = "";
                        this.appendChild(zero);

                        clickNeighbours(cells, index);

                    }

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
                clickedcells.push(index);
            };




            cells[index].addEventListener("contextmenu", function (event) { // Bandeira
                var bandeira = document.createElement("img");
                bandeira.src = "Bandeira.png";

                var quadrado = document.createElement("img");
                quadrado.src = "quadrado.png";

                // Verifique se o número de cliques é ímpar ou par
                if (numCliques % 2 === 0) {
                    if (!clickedcells.includes(index)) {
                        this.innerHTML = "";
                        this.appendChild(bandeira);
                        event.preventDefault(); // Use o método preventDefault() para impedir que o menu  
                    }

                } else { // Par
                    if (!clickedcells.includes(index)) {
                        this.innerHTML = "";
                        this.appendChild(quadrado);
                        event.preventDefault(); // Use o método preventDefault() para impedir que o menu 
                    }

                }

                // Incrementa a variável de número de cliques
                numCliques++;
            });

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


