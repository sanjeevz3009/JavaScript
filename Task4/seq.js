// This tool prints a sequence of numbers between the given two parameters
// This file wants to be called seq.js

const first = Number(process.argv[2]);
//const last = Number(process.argv[3]);

if (Number.isNaN(first)) {
    console.error('Usuage: node seq.js number number');
    process.exit(1);
}

for (let i = first; 1<=i; i-=1) {
    console.log(i);
}

