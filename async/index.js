const fs = require("fs")
// fs.writeFile("read.txt","welcome  to asycnchronous",(err)=>{
//  console.log("file is created")
//  console.log(err)
// });
// fs.appendFile("read.txt"," hello another text is added",(err)=>{
//     console.log("data is added")
// });
fs.readFile("read.txt", "utf-8", (err, data) => {
    if(err) {
        console.error("Error reading file:", err.message);
        return;
    }
    console.log("File contents:", data);
});

console.log("Reading file...");