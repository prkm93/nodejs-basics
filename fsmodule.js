const fs = require('fs');

fs.readFile('file.txt', 'utf-8', (err, data) => {
    // console.log({data});
    // const d = data.split("").reverse().join("");
    // console.log({d});
}) //readFile sync runs asynchronously with non blocking I/O

// const a = fs.readFileSync('file.txt'); // runs synchronously
// console.log(a.toString());

fs.writeFileSync('file.txt', 'This is a data.', (err, data) => {
    console.log("written to file");
    // console.log({data})
});

const data = fs.readFileSync('file.txt');
console.log(data.toString());
console.log("Finished reading file"); 

/** Common JS modules
 * These are imported using const module = require('moduleName');
*/

/** ES modules 
 * These are imported using import {functionName} from './module.mjs;
 * 
*/