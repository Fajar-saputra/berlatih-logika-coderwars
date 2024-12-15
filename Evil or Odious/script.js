function evil(n) {
   // Ubah angka menjadi representasi biner
   const binary = n.toString(2);
   // Hitung jumlah '1' dalam representasi biner
   const countOnes = binary.split('1').length - 1;
   // Tentukan Evil atau Odious
   return countOnes % 2 === 0 ? "It's Evil!" : "It's Odious!";
 }