function sameNumber(num) {
  let isSame = true;
  let numArr = num.toString().split('');
  let sum = 0;

  for (const x of numArr) {
    if (x !== numArr[0]) {
        isSame = false;
    }
    sum += Number(x);
  }

  console.log(isSame);
  console.log(sum);
}
sameNumber(2222222);
