function sortingNumbers(arrOfNumbers) {
  let sortedArray = arrOfNumbers.sort((a, b) => a - b);
  let result = [];
  while (sortedArray.length > 0) {
    const first = sortedArray.shift();
    const last = sortedArray.pop();

    result.push(first);

    result.push(last);
  }
  return result;
}
sortingNumbers([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]);
