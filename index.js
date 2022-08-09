const input_number = document.getElementById('input_number');
const guess_number = document.getElementById('guess_number');
const playBtn = document.getElementById('play_btn');
const win = document.getElementById('win');
const lost = document.getElementById('lost');
const result = document.getElementById('result');

function onPlayBtnClick() {
  const guessNumber = parseInt(guess_number.value);
  const inputNumber = input_number.value;
  const randomNumber = parseInt(Math.random() * inputNumber);
  result.innerHTML = `You chose: ${guessNumber}, the machine chose: ${randomNumber}`;
  lost.classList.add('hidden');
  console.log(guessNumber, randomNumber);
  if (guessNumber === randomNumber) {
    win.classList.remove('hidden');
    lost.classList.add('hidden');
  }
  if (guessNumber !== randomNumber) {
    win.classList.add('hidden');
    lost.classList.remove('hidden');
  }
}
playBtn.addEventListener('click', onPlayBtnClick);

// 버튼을 누르면
// 범위 숫자를 받아서
// 그 사이의 랜덤 값을 불러온다
// 추측 숫자를 받아서
// 추측 숫자가 랜덤 값과 같아질 때 you win이 나오도록 조건을 설정한다.
