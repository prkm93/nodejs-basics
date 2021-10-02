const fs = require('fs');

fs.readFile('file.txt', 'utf-8', (err, data) => {
    console.log({err});
    console.log({data});
    const d = data.split("").reverse().join("");
    console.log({d});
})

console.log("Finished reading file"); 