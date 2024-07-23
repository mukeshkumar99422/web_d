const name="mukesh"
const repo=50

console.log(name+repo+" value");                        //old method(try to avoid)
//NOTE the colon used:-
console.log(`my name is ${name.toUpperCase()} and repo is ${repo}`);  //backtics(modern)=>also methods can be used on the way


const newName=name.substring(0,2)
console.log(newName);

const anotherName="  mk  "
console.log(anotherName);
console.log(anotherName.trim());

const url="https://mukesh.com/mukesh%20"
console.log(url.replace('%20','-'));

console.log(url.includes('//'));

const arr="m-u-k-e-s-h"
console.log(arr.split('-'));          //return array

console.log(url.concat(arr));
//String.concat(url,arr);             //also correct
//url+arr;                            //also correct

console.log(url.length);              //length is property not method so no ()

//add charachter in existing string
const exString="#";
exString+="f";
console.log(exString);               // #1
