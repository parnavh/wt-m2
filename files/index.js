/**
 * File System module in node.js
 * Things to keep in mind:
 *  - functions with no "Sync" in the name are asynchronous functions and will require a callback function as the last argument
 *  - functions with "Sync" in the name are synchronous functions and will not require a callback function as the last argument
 *  - The callback function will be called with the error as the first argument and the result/data as the second argument
 *  - functions with "Sync" i.e. synchronous function in the name will return the result/data as the return value, so you will have to store it in a variable
 */

// import file system module (fs)
const fs = require('fs')

// main types of modes
// r : read
// r+: read + write
// w : write
// w+: write + read
// a : append
// a+: append + read

// read file and log its contents asynchronously
fs.readFile('some.txt', function (err, data) {
    if (err) {
        console.log('error occured');
    } else {
        // converting the file contents to string
        let string = data.toString()
        console.log('from callback');
        console.log(string);
    }
});

// read file and log its contents synchronously
console.log('started readFileSync');
const data = fs.readFileSync('some.txt');
const string = data.toString()
console.log("finished readFileSync: " + string);

// write content "hello" to the file "some.txt"
fs.writeFile('some.txt', 'hello', (err) => {
    if (err) {
        console.log(err);
    } else {
        console.log('file written');
    }
});

// write content "wriiting again" to the file "some.txt" with encoding "utf8"
fs.writeFile('some.txt', 'writting again', 'utf8', function () {
    console.log('done');
});

// append content "yes" to the file "some.txt" synchronously
fs.writeFileSync('some.txt', 'yes'); 

// append content "appended" to the file "some.txt" asynchronously
fs.appendFile('some.txt', ' appended', function (err) {
    console.log('done');
})

// callback function for fs.open
function callback (err, fd) {
    // do somethiing here
}

// openening "some.txt" with mode "w+"
fs.open('some.txt', 'w+', callback)
// calback is the callback function

// deleting the "some.txt" file
fs.unlink('some.txt', function () {
    console.log('deleted');
});

// renaming the file "some.txt" to "changed.txt"
fs.rename('some.txt', 'changed.txt', function () {
    console.log('renamed');
})