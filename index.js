// Import stylesheets
import './style.css';

const circles = document.querySelectorAll('.circle');
const bars = document.querySelectorAll('.bar');
const leftBtn = document.querySelector('.left-btn');
const rightBtn = document.querySelector('.right-btn');
const num = document.querySelector('.number');
let progressNumber = 2;
console.log(bars, circles);
function checkButtons() {
  rightBtn.disabled = false;
  leftBtn.disabled = false;
  if (progressNumber === circles.length) {
    rightBtn.disabled = true;
    console.log(rightBtn);
  }

  if (progressNumber === 0) {
    leftBtn.disabled = true;
    console.log(leftBtn);
  }
}

function updateProgress() {
  checkButtons();
  num.textContent = progressNumber;
  console.log(circles[progressNumber]);
}

// updateProgress();

leftBtn.addEventListener('click', () => {
  if (progressNumber <= 0) {
    console.log(progressNumber);
    checkButtons();

    return;
  }

  progressNumber--;
  circles[progressNumber].classList.remove('bg-green');
  circles[progressNumber].classList.add('bg-white');
  num.textContent = progressNumber;
});

rightBtn.addEventListener('click', () => {
  if (progressNumber >= circles.length) {
    console.log(progressNumber);
    checkButtons();
    return;
  }
  updateProgress();
  progressNumber++;
  circles[progressNumber - 1].classList.add('bg-green');
  num.textContent = progressNumber;
});
