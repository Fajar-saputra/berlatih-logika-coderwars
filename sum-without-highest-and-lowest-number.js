function sumArray(array) {
    if (array === null || array === undefined || array.length <= 1) {
        return 0;
    }
    const sortedArray = [...array].sort((a, b) => a - b);
   
    const middleElements = sortedArray.slice(1, -1);

    return middleElements.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
}

console.log(sumArray([1, 1, 11, 2, 3])); // Output: 1 + 2 + 3 = 6
console.log(sumArray([10, 2, 5, 20, 10])); // Output: 10 + 5 + 10 = 25
console.log(sumArray(null)); // Output: 0
console.log(sumArray([5])); // Output: 0