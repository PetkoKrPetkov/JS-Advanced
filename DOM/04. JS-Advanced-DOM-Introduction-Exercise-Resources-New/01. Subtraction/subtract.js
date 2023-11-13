function subtract() {
  let firstNum = document.getElementById('firstNumber').value;
  let secNum = document.getElementById('secondNumber').value;
  let sum = Number(firstNum) - Number(secNum);

  document.getElementById('result').textContent = sum;
}
