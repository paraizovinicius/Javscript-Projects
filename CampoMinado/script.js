function replaceCell(cell) {
    // Cria um novo elemento de imagem
    var bomb = document.createElement("img");
    bomb.src = "bombear.png";

    // Substitui o conteúdo da célula pelo elemento de imagem
    cell.innerHTML = "";
    cell.appendChild(bomb);

}