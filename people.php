<?php
class Person {
   // Deklarasi properti dengan visibilitas
   public $firstName;
   public $lastName;
   public $age;
   public $gender;

   // Konstruktor
   public function __construct($firstName = "John", $lastName = "Doe", $age = 0, $gender = "Male") {
     $this->firstName = $firstName;
     $this->lastName = $lastName;
     $this->age = $age;
     $this->gender = $gender;
   }

   // Metode untuk mendapatkan nama lengkap
   public function sayFullName() {
     return $this->firstName . " " . $this->lastName;
   }

   // Metode statis untuk menyapa makhluk luar angkasa
   public static function greetExtraTerrestrials($raceName) {
     return "Welcome to Planet Earth, " . $raceName . "!";
   }
}

// Membuat objek baru dari kelas Person
$Fajar = new Person("Fajar", "Saputra", 21, "Male");

// Memanggil metode dan mencetak hasilnya
echo $Fajar->sayFullName() . PHP_EOL;

echo Person::greetExtraTerrestrials("Fajar") . PHP_EOL;
