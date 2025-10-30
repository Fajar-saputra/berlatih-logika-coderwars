<?php
function evil($n) {
   // Ubah angka ke string biner
   $binary = decbin($n);
   // Hitung jumlah '1' dalam biner
   $countOnes = substr_count($binary, '1');
   // Tentukan Evil atau Odious
   return $countOnes % 2 === 0 ? "It's Evil!" : "It's Odious!";
}

// Contoh Penggunaan
echo evil(3);  // Output: "It's Evil!"
echo evil(7);  // Output: "It's Odious!"
echo evil(5);  // Output: "It's Evil!"
echo evil(1);  // Output: "It's Odious!"
