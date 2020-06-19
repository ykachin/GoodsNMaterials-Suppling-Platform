const colors = [
  '#70C1FF', 
  '#5A5FE8', 
  '#35E8DD', 
  '#63C6FF', 
  '#A747FF'
]

const bubbles = Array.from(document.querySelectorAll('.bubble'));

let randomColor = [];

for (let i = 0; i < bubbles.length; i++) {
  randomColor.push(~~(Math.random()*colors.length));
}

bubbles.map((bubble, index) => {
  bubble.style.backgroundColor = colors[randomColor[index]];
})