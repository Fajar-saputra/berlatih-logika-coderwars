// const repeats = (arr) => {
//     const counts = {};
//     for (const num of arr) {
//         counts[num] = (counts[num] || 0) + 1;
//     }

//     return arr
//         .filter(num => counts[num] === 1)
//         .reduce((sum, num) => sum + num, 0);

// };

const repeats = (arr) => arr.filter((n) => arr.indexOf(n) !== arr.lastIndexOf(n)).reduce((a, b) => a + b, 0);

console.log(repeats([4, 5, 7, 5, 4, 8, 3]));

// 1. counts = {4: 2, 5: 2, 7: 1, 8: 1}
// 2. filter(7, 8) => [7, 8]
// 3. reduce(7 + 8) => 15
