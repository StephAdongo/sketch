const container = document.getElementById("container");

function makeRows(rows, cols) {
  container.style.setProperty('--grid-rows', rows);
  container.style.setProperty('--grid-cols', cols);
  for (c = 0; c < (rows * cols); c++) {
    let cell = document.createElement("div");
    cell.innerText = (c + 1);
    container.appendChild(cell).className = "grid-item";
  };
};

makeRows(16, 16);

const hoover = document.createElement("hover");
hoover.classList.add("hoover");


const button = document.querySelector(".button");

 function createGrid(gridSize) {
   container.innerHTML = "";
   const squareSize = Math.floor(container.clientWidth / gridSize);
   for (let i = 0;i < gridSize * gridSize; i++) {
    const square = document.createElement("div");
    square.classList.add("square");
    square.style.width = `${squareSize}px`;
    square.style.height = `${squareSize}px`;
    container.appendChild(square);
   }
}

button.addEventListener("click", () => {
    let gridSize = prompt ("Enter number of squares per side (Max :100):");
    while (gridSize === null || isNaN(gridSize) || gridSize > 100) {
        gridSize = prompt("Invalid input. Please enter a number between 1 and 100:");
      };
    gridSize = parseInt(gridSize);
    createGrid(gridSize);
});


