<?php

function band_name_generator(string $s): string {
   // Mengubah huruf pertama menjadi kapital
   $s = ucfirst($s);
 
   // Cek apakah huruf pertama dan terakhir sama
   if ($s[0] === $s[strlen($s) - 1]) {
       // Jika sama, ulangi kata dan gabungkan tanpa huruf pertama dari pengulangan kedua
       return ucfirst($s) . substr($s, 1);
   }

   // Jika tidak sama, tambahkan "The" di depan kata
   return "The " . $s;
}



 echo(band_name_generator("tart"));
 echo(band_name_generator("tono"));
