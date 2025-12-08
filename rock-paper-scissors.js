// const rps = (p1, p2) => {
//   const player1 = p1.toLowerCase();
//   const player2 = p2.toLowerCase();

//   if (player1 === player2) return "Draw!";

//   const winMap = {
//     rock: "scissors",
//     scissors: "paper",
//     paper: "rock"
//   };

//   return winMap[player1] === player2
//     ? "Player 1 won!"
//     : "Player 2 won!";
// };

// function describeAge(age) {
//   const prefix = "You're a(n)";

//   if (age <= 12) return `${prefix} kid`;
//   if (age <= 17) return `${prefix} teenager`;
//   if (age <= 64) return `${prefix} adult`;

//   return `${prefix} elderly`;
// }

function describeAge(age) {
    const p = "You're a(n)";
    return age <= 12 ? `${p} kid` : age <= 17 ? `${p} teenager` : age <= 64 ? `${p} adult` : `${p} elderly`;
}
