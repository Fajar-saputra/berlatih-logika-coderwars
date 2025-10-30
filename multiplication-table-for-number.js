// function multiTable(number) {

//     let resultStrings = "";

//     for (let i = 1; i <= 10; i++) {
//         const item = i * number;

//         const line = `${i} * ${number} = ${item}`

//         resultStrings += line;

//         if (i < 10) {
//             resultStrings += '\n';
//         }
//     }

//     return resultStrings;
// }

// refactor

function multiTable(number) {
    const lines = [];

    for (let i = 1; i <= 10; i++) {
        lines.push(`${i} * ${number} = ${  i * number }`);
    }

    return lines.join('\n')
}

// refacor
const multiTable = n => ([1,2,3,4,5,6,7,8,9,10].map(i=>`${i} * ${n} = ${i*n}`)).join('\n')

console.log(multiTable(4));
