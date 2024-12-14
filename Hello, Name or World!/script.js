function hello(name = '') {
   return name === '' ? "Hello, World!" : "Hello, " + name.charAt(0).toUpperCase() + name.slice(1).toLowerCase() + "!";
}


console.log(hello("putRa"));
