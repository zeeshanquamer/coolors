const colorDivs = document.querySelectorAll(".color");
const generateBtn = document.querySelectorAll(".generate");
const sliders = document.querySelectorAll('input[type="range"]');
const generateHexes = document.querySelectorAll(".color h2");
let initialColors;

function generateHex() {
  // const letters = "0123456789ABCDEF";
  // let hash = "#";
  // for (let i = 0; i < 6; i++) {
  //   hash += letters[Math.floor(Math.random() * 16)];
  // }
  // return hash;
  const hexColor = chroma.random();
  return hexColor;
}
function randomColors() {
  colorDivs.forEach((div, index) => {
    const hexText = div.children[0];
    const randomColor = generateHex();
    div.style.backgroundColor = randomColor;
    hexText.innerText = randomColor;
    checkTextContrast(randomColor, hexText);
  });
}
function checkTextContrast(color, text) {
  const luminance = chroma(color).luminance();
  if (luminance > 0.5) {
    text.style.color = "black";
  } else {
    text.style.color = "whiite";
  }
}

console.log();
randomColors();
