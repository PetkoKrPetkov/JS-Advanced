function listOfNames(arrOfNames) {
    let sortedArr = arrOfNames.sort((a, b) => a.localeCompare(b));
    let num = 1;
    sortedArr.forEach(element => {
        console.log(`${num}.${element}`);
        num++;
    });

}
listOfNames(["John", "Bob", "Christina", "Ema"])