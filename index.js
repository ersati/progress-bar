// Import stylesheets
import './style.css';

const circles = document.querySelectorAll('.circle');
const bars = document.querySelectorAll('.bar');
const leftBtn = document.querySelector('.left-btn');
const rightBtn = document.querySelector('.right-btn');
const num = document.querySelector('.number');
let progressNumber = 1;

function checkButtons() {
  rightBtn.disabled = false;
  leftBtn.disabled = false;
  if (progressNumber === circles.length) {
    rightBtn.disabled = true;
  }

  if (progressNumber === 0) {
    leftBtn.disabled = true;
  }
}

function updateProgress() {
  checkButtons();
  num.textContent = progressNumber;
}

// updateProgress();

leftBtn.addEventListener('click', () => {
  if (progressNumber <= 0) {
    checkButtons();

    return;
  }

  progressNumber--;
  // circles[progressNumber].classList.remove('bg-green', 'circle-white');
  // circles[progressNumber].classList.add('circle-grey');
  num.textContent = progressNumber;

  // bars[progressNumber - 1].style.width = '0%';
  circles[progressNumber].style.animation = 'bgout 1s 2s 1 forwards';
  circles[progressNumber].children.item(0).classList.remove('text-white');
  circles[progressNumber].children.item(0).classList.add('text-grey-darker');
  if (progressNumber > 0) {
    bars[progressNumber - 1].style.animation = 'moveout 2s 1 forwards';
  } else {
    bars[progressNumber].style.animation = 'moveout 2s 1 forwards';
  }
});

rightBtn.addEventListener('click', () => {
  console.log(progressNumber);
  if (progressNumber >= circles.length) {
    checkButtons();
    return;
  }
  // updateProgress();
  // circles[progressNumber - 1].classList.remove('circle-grey');
  // circles[progressNumber - 1].classList.add('bg-green', 'circle-white');
  console.log(circles[progressNumber].children.item(0));
  circles[progressNumber].style.animation = 'bgin 1s 2s 1 forwards';
  circles[progressNumber].children.item(0).classList.add('text-white');
  circles[progressNumber].children.item(0).classList.remove('text-grey-darker');
  if (progressNumber < bars.length) {
    bars[progressNumber].style.animation = 'movein 2s 1 forwards';
  }

  progressNumber++;
  // bars[progressNumber - 2].style.width = '100%';
  num.textContent = progressNumber;
});
