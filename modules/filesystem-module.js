const {readFileSync, writeFileSync} = require('fs')

const first = readFileSync('../content/subfolder/first.txt', 'utf-8');
const second = readFileSync('../content/subfolder/second.txt', 'utf-8');

console.log(first,second)

//flag is for not to overwrite the file

writeFileSync('../content/subfolder/combined.txt', `Hers is the first file: ${first} \n and the second file: ${second}`,{flag:'a'})