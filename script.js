function createCanvas(sqrPerSide) {
  const container = document.getElementById("container");
  container.style.gridTemplateColumns = `repeat(${sqrPerSide}, 1fr)`;
  container.style.gridTemplateRows = `repeat(${sqrPerSide}, 1fr)`;

  for (let i = 1; i <= (sqrPerSide*sqrPerSide); i++) {
    let cell = document.createElement('div');
    container.appendChild(cell);
  }
}

function draw() {
  let cells = document.querySelectorAll('#container div');
  cells.forEach(function(div) {
    div.addEventListener("mouseover", function() {
      div.style.backgroundColor = "black";
    });
  });
}

function resetCanvas() {
  let resetButton = document.querySelector("#resetButton");
  resetButton.addEventListener("click", function() {
    
    let cells = document.querySelectorAll('#container div');
    cells.forEach(function(div) {
      div.remove();
    });

    let chosenSides = prompt("How many squares per side?  Example: 50  Max amount: 100");
    while (!chosenSides || chosenSides < 1 || chosenSides > 100) {
      chosenSides = prompt("How many squares per side?  Example: 50  Max amount: 100");
    }
    
    createCanvas(chosenSides);
    draw();
  });
}

createCanvas(16);
draw();
resetCanvas();