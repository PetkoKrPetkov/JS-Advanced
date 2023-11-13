function argumentInfo(...arguments) {

    let typesObj = {};

    for (const arg of arguments) {
        let currType = typeof (arg);
        typesObj.hasOwnProperty(currType) ? typesObj[currType] += 1 : typesObj[currType] = 1;
        console.log(`${currType}: ${arg}`);
    }

    sortedArr = Object.entries(typesObj).sort((a, b) => b[1] - a[1]);

    for (const [type, value] of sortedArr) {
        console.log(`${type} = ${value}`);
    }
}

argumentInfo('cat', 42, function () { console.log('Hello world!'); });