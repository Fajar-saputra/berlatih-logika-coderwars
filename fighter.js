 function quote(fighter) {
    // Ubah nama fighter menjadi lowercase untuk perbandingan case-insensitive
    const fighterName = fighter.toLowerCase();

    // Cek nama fighter dan kembalikan quote yang sesuai
    if (fighterName === "george saint pierre") {
        return "I am not impressed by your performance.";
    } else if (fighterName === "conor mcgregor") {
        return "I'd like to take this chance to apologize.. To absolutely NOBODY!";
    }
}

function circleCircumference(circle) {
  // Menghitung keliling lingkaran menggunakan rumus 2πr
  // Menggunakan Math.PI untuk nilai π yang akurat
  return Math.round((2 * Math.PI * circle.radius) * 1000000) / 1000000;
}

