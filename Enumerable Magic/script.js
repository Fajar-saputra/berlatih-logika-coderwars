function none(array, func) {
   for (let element of array) {
     if (func(element)) {
       return false; // Jika ada satu elemen memenuhi kondisi
     }
   }
   return true; // Tidak ada elemen memenuhi kondisi atau array kosong
 }
 