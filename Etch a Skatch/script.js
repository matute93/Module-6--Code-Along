// // Selecting Elemnets on page

const canvas = document.querySelector('#etch-a-sketch');
const ctx = canvas.getContext('2d');
const shakebutton = document.querySelector('.shake');
const MOVE_AMOUNT = 40;

// //Setup Canvas
const { width, height } = canvas;
let x = Math.floor(Math.random() * width);
let y = Math.floor(Math.random() * height);
ctx.lineJoin = 'round';
ctx.lineCap = 'round';
ctx.lineWidth = MOVE_AMOUNT;

// // random the point somewhere

let hue = 0;
ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;
ctx.beginPath(); 
ctx.moveTo(x, y);
ctx.lineTo(x, y);
ctx.stroke();
// // draw function

function draw({ key }) {
    // increment the hue for changing color
    hue += 10
    ;
    console.log(hue);
    ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;
    console.log(key);
    // start the path
    ctx.beginPath();
    ctx.moveTo(x, y);
    // moving the point with arrows keys
    switch (key) {
      case 'ArrowUp':
        y -= MOVE_AMOUNT;
        break;
      case 'ArrowRight':
        x += MOVE_AMOUNT;
        break;
      case 'ArrowDown':
        y += MOVE_AMOUNT;
        break;
      case 'ArrowLeft':
        x -= MOVE_AMOUNT;
        break;
      default:
        break;
    }
    ctx.lineTo(x, y);
    ctx.stroke();
  }

// // Write The Handler for the keys
function handleKey(e) {
    if (e.key.includes('Arrow')) {
      e.preventDefault();
      draw({ key: e.key });
    }
  }
//   Shake and Clear
function clearCanvas() {
    canvas.classList.add('shake');
    ctx.clearRect(0, 0, width, height);
    canvas.addEventListener(
      'animationend',
      function() {
        console.log('Done the shake!');
        canvas.classList.remove('shake');
      },
      { once: true }
    );
  }
  window.addEventListener('keydown', handleKey);
  shakebutton.addEventListener('click', clearCanvas);

