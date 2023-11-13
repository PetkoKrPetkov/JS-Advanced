function rotateArr(arr, numOfRotations) {
    for (let index = 1; index <= numOfRotations; index++) {
        let buff = arr.pop();
        arr.unshift(buff);
        
    }
    console.log(arr.join(' '));
}
rotateArr(['5', '20', '31', '4', '20'], 2);
