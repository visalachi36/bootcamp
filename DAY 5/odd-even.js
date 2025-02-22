// Get command-line arguments
const args = process.argv.slice(2);

// Check if two arguments are provided
if (args.length !== 1) {
    console.error("Please provide exactly two numbers.");
    process.exit(1);
}

// Convert arguments to numbers
const num = Number(args[0]);


// Check if the inputs are valid numbers
if (isNaN(num) ) {
    console.error("A arguments must be valid numbers.");
    process.exit(1);
}

// Calculate and print the sum
if(num%2==0){
    console.log("Even");
    
}
else{
    console.log("Odd");
    
}