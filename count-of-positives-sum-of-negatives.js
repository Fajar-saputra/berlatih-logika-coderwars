// const countPositivesSumNegatives = (number = []) => {
//     let countPositives = 0;
//     let sumNegatives = 0;

//     for (let i = 0; i < number.length; i++) {
//         if (number[i] > 0) {
//             countPositives++;
//         } else if(number[i] < 0) {
//             sumNegatives += number[i];
//         }
//     }

//     return [countPositives, sumNegatives];
// }

// refactor
const countPositivesSumNegatives = (input) => {
    if (!input || input.length === 0) {
        return [];
    }
    
    const count = input.filter(n => n > 0).length;
    const sum = input.filter(n => n < 0).reduce((acc, n) => acc + n, 0);

    return [count, sum];
}

// refactor
function countPositivesSumNegatives(input) {
  return !input || !input.length ? [] : [
    input.filter(n => n > 0).length,
    input.filter(n => n < 0).reduce((a, b) => a + b)
  ];
}

console.log(countPositivesSumNegatives([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15]));
