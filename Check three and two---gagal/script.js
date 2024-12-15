function checkThreeAndTwo(array) {
   let cek = 1; // Mulai dengan cek 1 untuk membandingkan dua elemen berturut-turut
   let cek2 = 1;

   for (let index = 0; index < array.length - 1; index++) {
      if (array[index] === array[index + 1]) {
         cek++;

         if (cek > 3) return false; // Kembalikan false jika ada lebih dari 3 berturut-turut

      } else {
         cek = 1; // Reset cek jika elemen berturut-turut tidak sama
      }
   }

   // Periksa apakah ada minimal dua angka yang sama berturut-turut
   return cek > 1 && cek <=3 ; // Mengubah kondisi untuk mengembalikan true hanya jika ada tepat 2 berturut-turut
}


 

 // ["a", "a", "a", "b", "b"] ==> true  // 3x "a" and 2x "b"

 console.log(checkThreeAndTwo(["a", "a", "a", "b", "b"]));
 console.log(checkThreeAndTwo(["a", "a", "a", "a", "a"]));
 console.log(checkThreeAndTwo(["c","b","c","c","c"]));
 console.log(checkThreeAndTwo(["a","c","c","a","c"]));