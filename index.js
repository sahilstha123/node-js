const fs = require("fs");

// // Create a new file named 'read.txt' and write initial content to it.
// // If the file already exists, this will overwrite any existing content.
// fs.writeFileSync("read.txt", "welcome to node js");

// // Overwrite the content of 'read.txt' with new text.
// // This will replace whatever was previously in the file.
// fs.writeFileSync("read.txt", "overwrite the before text");

// // Append additional text to 'read.txt' without removing existing content.
// // This adds " welcome to node js" at the end of the current file content.
// fs.appendFileSync("read.txt", " welcome to node js");

// // Read the entire content of 'read.txt' synchronously.
// // The result will be a string containing all the text in the file.
// const byte_code = fs.readFileSync("read.txt", "utf-8"); // Specify 'utf-8' encoding for readable output

// // Log the contents of 'byte_code' to the console.
// // Note: In JavaScript, we typically work with strings, but Node.js allows us to read raw byte data if needed.
// console.log(byte_code);

// create a folder
// fs.mkdirSync("node_js");
// fs.renameSync("read.text","bio.text")// rename 
// fs.unlinkSync("bio.text") //delete file
fs.rmdirSync("node_js") // delete folder
