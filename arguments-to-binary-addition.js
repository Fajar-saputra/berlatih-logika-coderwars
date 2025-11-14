a// function arr2bin(arr) {
    
//     let total = 0;

//     for (let item of arr) {
//         if (item === null || typeof item !== 'number' || item === undefined) {
//             item = 0;
//         }

//         total += item;
//     }
    
//     return total.toString(2);
// }


// refacor

// const arr2bin = (arr) => {
//     const totalSum = arr.reduce((acc, item) => {
//         const value = typeof item === 'number' ? item : 0;
//         return acc + value;
//     }, 0);
    
//     return totalSum.toString(2);
// };;

// refactor

function arr2bin(arr){
  return arr.reduce((x,y)=>x+(typeof y=="number"?y:0),0).toString(2);
}
