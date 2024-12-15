function converter(mpg) {
   // Konstanta untuk konversi
   const imperialGallonToLiters = 4.54609188;
   const mileToKilometer = 1.609344;

   // Menghitung kilometers per liter (kpl)
   const kpl = mpg * mileToKilometer / imperialGallonToLiters;

   // Membulatkan hasil hingga 2 desimal
   return Math.round(kpl * 100) / 100;
}
