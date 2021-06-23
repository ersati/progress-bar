// Import stylesheets
import './style.css';

const circles = document.querySelectorAll('.circle');
const bars = document.querySelectorAll('.bar');
const leftBtn = document.querySelector('.left-btn');
const rightBtn = document.querySelector('.right-btn');

let progressNumber = 4;

function checkButtons() {
  if (progressNumber === 0) {
    leftBtn.disabled = true;
    console.log(leftBtn);
  } else {
    leftBtn.disabled = false;
  }

  if (progressNumber >= circles.length) {
    rightBtn.disabled = true;
    console.log(rightBtn);
  } else {
    rightBtn.disabled = false;
  }
}

function updateProgress() {
  checkButtons();
}

updateProgress();
