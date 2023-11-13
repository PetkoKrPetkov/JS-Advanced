function getFibo() {

    let firstNum = 0;
    let secondNum = 1;

    return function fibo() {
        let result = firstNum + secondNum;
        firstNum = secondNum;
        secondNum = result;


        return firstNum;
    }
}

let fib = getFibo();
console.log(fib()); // 1
console.log(fib()); // 1
console.log(fib()); // 2
console.log(fib()); // 3
console.log(fib()); // 5
console.log(fib()); // 8
console.log(fib()); // 13