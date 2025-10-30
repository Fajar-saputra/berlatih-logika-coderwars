// const humanYearsCatYearsDogYears = function (humanYears) {
//     let catYears = 0;
//     let dogYears = 0;

//     if (humanYears === 1) {
//         catYears = 15;
//         dogYears = 15;
//     } else if (humanYears === 2) {
//         catYears = 15 + 9;
//         dogYears = 15 + 9;
//     } else if (humanYears >= 3) {
//         catYears = 24; 
//         dogYears = 24;

//         // Tambahkan tahun sisanya: (humanYears - 2) * tahun tambahan
//         const remainingYears = humanYears - 2;
        
//         catYears += remainingYears * 4;
//         dogYears += remainingYears * 5;
//     } 

//     return [humanYears, catYears, dogYears];
// };

// refactor
function humanYearsCatYearsDogYears(humanYears) {
  switch (humanYears) {
    case 1:
      return [1, 15, 15]
    case 2:
      return [2, 24, 24];
    default:
      return [humanYears, (humanYears - 2) * 4 + 24, (humanYears - 2) * 5 + 24 ];
  }
  
}

console.log(humanYearsCatYearsDogYears(3));
