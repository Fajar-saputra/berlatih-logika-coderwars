const array = [1, -4, 7, 12];

// function positiveSum(arrayRandom = []) {
//     let total = 0;

//     for (let i = 0; i < arrayRandom.length; i++) {
//         if (arrayRandom[i] > 0) {
//             total += arrayRandom[i];
//         }
//     }

//     return total;
// }

const positiveSum = (array = []) => {
    return array.filter((n) => n > 0).reduce((acc, curr) => acc + curr, 0);
};



console.log(positiveSum(array));

