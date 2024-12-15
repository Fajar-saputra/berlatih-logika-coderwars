function first(arr, n = 1) {
   return arr.slice(0, n);
}
 
 let arr = ['a', 'b', 'c', 'd', 'e'];

//  first(arr, 2) //=> ['a', 'b']
console.log(first(arr, 2))