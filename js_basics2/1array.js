const myarr=[0,1,2,3,4,5]
const myarr2=new Array(1,2,3,4,5)

console.log(myarr[0]);
console.log(myarr2[0]);

//array methods
myarr.push(6)                  //add element at end
console.log(myarr);

myarr.pop()                    //remove element from end
console.log(myarr);

myarr.shift()                  //remove element from starting
console.log(myarr);

myarr.unshift(0)               //add element at starting
console.log(myarr);

console.log(myarr.includes(9));
console.log(myarr.indexOf(3));

const newarr=myarr.join()      //returns string by joining all element of aray
console.log(newarr);
console.log(typeof newarr);    //string

slice & splice
console.log("A ",myarr);

const myn1=myarr.slice(1,3)    //returns copy of a section exclude end limit  //not manipulate original array(shalow copy)
console.log(myn1);
console.log("B ",myarr);

const myn2=myarr.splice(1,3)    //returns copy of a section include end limit //manipulate original array(deep copy)
console.log(myn2);
console.log("C ",myarr);

const marvel_hero=["thor","Ironman","spiderman"]
const dc_hreo=["superman","flash","batman"]

marvel_hero.push(dc_hreo)                         //push array as data

console.log(marvel_hero);
console.log(marvel_hero[3][1]);

const all_hero=marvel_hero.concat(dc_hreo)        //returns new array //not manipulate original aray
console.log(all_hero);

const all_new_hero=[...marvel_hero,...dc_hreo]    //same to previous //spread method:-any number of array
console.log(all_new_hero);

const real_another_array=all_new_hero.flat(1)     //concatenate all sub array (with depth 1)