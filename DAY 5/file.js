const fs = require('fs');
const path = require('path');

// Get command-line arguments
const args = process.argv.slice(2);

// Check if a file path is provided
if (args.length !== 1) {
    console.log("Please provide exactly one file path.");
    process.exit(1);
}

const filePath = path.resolve(args[0]);

// Check if the file exists
if (!fs.existsSync(filePath)) {
    console.log("The specified file does not exist.");
    process.exit(1);
}

// Get file statistics
fs.stat(filePath, (err, stats) => {
    if (err) {
        console.error("Error reading file stats:", err);
        process.exit(1);
    }
    
    console.log(`File: ${filePath}`);
    console.log(`Size: ${stats.size} bytes`);
    console.log(`Creation Date: ${stats.birthtime}`);
    console.log(`Last Modified Date: ${stats.mtime}`);
});