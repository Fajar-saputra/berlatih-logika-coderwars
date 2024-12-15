class Person {
   constructor(firstName = "John", lastName = "Doe", age = 0, gender = "Male") {
     this.firstName = firstName;
     this.lastName = lastName;
     this.age = age;
     this.gender = gender;
   }
 
   sayFullName() {
     return `${this.firstName} ${this.lastName}`;
   }
 
   static greetExtraTerrestrials(raceName) {
     return `Welcome to Planet Earth ${raceName}`;
   }
 }

let Fajar = new Person("Fajar", "Saputra", 21, "Male");

console.log(Fajar.sayFullName());

console.log(Fajar.greetExtraTerrestrials("Fajar"));

