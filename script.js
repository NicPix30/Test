const canvas = document.querySelector('canvas');
const c = canvas.getContext('2d');

canvas.width = innerWidth;
canvas.height = innerHeight;

class Daisy {
  constructor(name, color) {
    this.name = name;
    this.color = color;
  }
}

let grid = [[], [], [], [], []];

function BuyPlant() {
  if (grid.length <= 5) {
    grid.push(new Daisy('bob', `hsl(${Math.random() * 360}, 50%, 50%)`));
  }
}

setInterval(function test() {
  BuyPlant();
  console.log(grid);
}, 1000);
