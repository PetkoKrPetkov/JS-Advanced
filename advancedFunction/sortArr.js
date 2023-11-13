function sortArray(arr, order) {

    return arr.sort((a, b) => order === 'asc' ? a - b : b - a);
}