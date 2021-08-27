function createCanvas() {
  const container = document.getElementById("container");
  for (let i = 1; i <= (16*16); i++) {
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

createCanvas();
draw();