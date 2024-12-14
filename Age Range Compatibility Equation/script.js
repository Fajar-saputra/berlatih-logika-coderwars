function datingRange(age) {
   let min, max;
   if (age <= 14) {
      min = Math.floor(age - 0.10 * age);
      max = Math.floor(age + 0.10 * age);
   } else {
      min = Math.floor(age / 2 + 7);
      max = Math.floor((age - 7) * 2);
   }

   return min + "-" + max;
}

function datingRange_fromCoderwars(age)
{
   return age <= 14 ? Math.floor(age + 0.10 * age) + "-" + Math.floor(age - 0.10 * age) : Math.floor((age - 7) * 2) + "-" + Math.floor(age / 2 + 7);
}


console.log(datingRange(20));
console.log(datingRange_fromCoderwars(20));
