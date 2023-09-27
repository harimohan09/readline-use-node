// step 1. import readline (as it's core module of node.js)
const readline = require("readline");

// step 2. create interface to connect with command line or terminal using createinterface()

const interface = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

// step 3. how to read value from terminal using question("string" ,callback function)

interface.question("Enter first value", (num1) => {
    interface.question("Enter second value", (num2) => {
        // here we can get both num1, num2 value

        // step 4. as it collect value in string but we want to add two no. so we have to convert these string input into number.

        const sum = Number(num1) + Number(num2);
        console.log(`sum = ${sum}`);
    });
});
