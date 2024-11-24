const fs = require("fs");

// Asynchronous File Read
// The readFile function reads the file "input.txt" asynchronously.
// It takes three arguments:
// 1. File path ("input.txt")
// 2. Encoding ("utf-8")
// 3. A callback function (err, data)
// The "after data" console log will execute BEFORE the file contents are read and logged
// because readFile is non-blocking (asynchronous).
const data_async = fs.readFile("input.txt", "utf-8", (err, data) => {
  if (err) {
    console.error("Error reading file asynchronously:", err.message);
    return;
  }
  console.log(data); // Logs the file content after it is read asynchronously.
});

console.log("after data"); // This executes immediately, before the asynchronous read completes.

// Output for Asynchronous Section:
// after data
// <file contents of input.txt> (if successful)

// Synchronous File Read
// The readFileSync function reads the file "input.txt" synchronously.
// This means the program waits (blocks) until the file is completely read.
// It directly returns the file contents, which can be assigned to a variable.
const data_sync = fs.readFileSync("input.txt", "utf-8");
console.log(data_sync); // Logs the file content read synchronously.
console.log("after data"); // This executes AFTER the synchronous read completes.

// Output for Synchronous Section:
// <file contents of input.txt> (if successful)
// after data
