console.log(Math);               //object

console.log(Math.abs(-4));

console.log(Math.round(4.6));    //5
console.log(Math.round(4.3));    //4

console.log(Math.ceil(4.2));     //5
console.log(Math.ceil(4.6));     //5

console.log(Math.floor(4.2));     //4
console.log(Math.floor(4.6));     //4

console.log(Math.min(1,2,3,0,4));  //0
console.log(Math.max(1,2,3,0,4));  //4

// ##########################################RANDOM###########################################
console.log(Math.random())                                   //random number bw 0-1
console.log((Math.floor(Math.random()*10))+1)                //random number bw 1-10(in integer)

const min=10
const max=20

console.log(Math.floor(Math.random()*(max-min+1))+min)       //random integer bw min-max