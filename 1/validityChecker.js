function validityChecker(x1, y1, x2, y2) {
 
    let first = Math.sqrt(Math.pow((0 - x1), 2) + Math.pow((0 - y1), 2));
 
    if (first === Math.trunc(first)) {
        console.log(`{${x1}, ${y1}} to {0, 0} is valid`);
    } else {
        console.log(`{${x1}, ${y1}} to {0, 0} is invalid`);
    }
 
    let second = Math.sqrt(Math.pow((x2 - 0), 2) + Math.pow((y2 - 0), 2));
    if (second === Math.trunc(second)) {
        console.log(`{${x2}, ${y2}} to {0, 0} is valid`);
    } else {
        console.log(`{${x2}, ${y2}} to {0, 0} is invalid`);
    }
 
    let third = Math.sqrt(Math.pow((x2 - x1), 2) + Math.pow((y2 - y1), 2));
    if (third === Math.trunc(third)) {
        console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is valid`);
    } else {
        console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is invalid`);
    }
}