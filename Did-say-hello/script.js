const greetings = ["hello", "ciao", "salut", "hallo", "hola", "ahoj", "czesc"];

function validateHello(greeting) {
    return greetings.some(word => greeting.toLowerCase().includes(word));
}

 console.log(validateHello('meh'))