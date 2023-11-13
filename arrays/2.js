function printArray(arr, n) {
    let condition = (_ , index ) => index % n === 0
    let result = arr.filter(condition);
    return result;

}
printArray(['5', '20', '31', '4', '20'], 2);
