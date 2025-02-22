// Get command-line arguments
const args = process.argv.slice(2);

// Check if two arguments are provided
if (args.length !== 2) {
    console.log("Please provide exactly two numbers.");
    process.exit(1);
}

// Convert arguments to numbers
const num1 = parseFloat(args[0]);
const num2 = parseFloat(args[1]);

// Check if the inputs are valid numbers
if (isNaN(num1) || isNaN(num2)) {
    console.log("Both arguments must be valid numbers.");
    process.exit(1);
}

// Calculate and print the sum
const sum = num1 + num2;
console.log(`The sum of ${num1} and ${num2} is: ${sum}`);
