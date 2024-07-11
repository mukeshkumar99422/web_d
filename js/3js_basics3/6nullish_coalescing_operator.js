//==>??==>avoid to storing null/undefined in variables
let val1=5??10;
let val2=null??10;
let val3=undefined??null??15;

console.log(val1);
console.log(val2);
console.log(val3);