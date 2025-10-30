<?php
function convertToKPL($mpg) {
   $imperialGallonToLiters = 4.54609188;
   $mileToKilometer = 1.609344;

   $kpl = $mpg * $mileToKilometer / $imperialGallonToLiters;

   return round($kpl, 2);
}

// Contoh penggunaan
echo convertToKPL(10) . PHP_EOL;  // Output: 3.54
echo convertToKPL(25) . PHP_EOL;  // Output: 8.83
echo convertToKPL(50) . PHP_EOL;  // Output: 17.67
