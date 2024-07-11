// shallow copy    ==>share same Reference
// deep copy       ==>share diff Reference

const myarr=[0,1,2,3,4,5]
const myarr2=new Array(1,2,3,4,5)

console.log(myarr[0]);
console.log(myarr2[0]);

//array methods
myarr.push(6)                  //add element at end
console.log(myarr);

myarr.pop()                    //remove element from end
console.log(myarr);

myarr.shift()                  //remove element from starting(shift unshift are not optimised method ie need to shift all elements to add/remove elements at starting)
console.log(myarr);

myarr.unshift(0)               //add element at starting
console.log(myarr);

console.log(myarr.includes(9));
console.log(myarr.indexOf(3));  //give -1 for value not exist

const str1=myarr.join()        //returns string by joining all element of aray(deep copy)
console.log(str1);
console.log(typeof str1);      //string

// slice & splice
console.log("A ",myarr);

const myn1=myarr.slice(1,3)    //returns copy of a section exclude index:3==>not manipulate original array
console.log(myn1);
console.log("B ",myarr);

const myn2=myarr.splice(1,3)    //returns copy of a section include index:3==>manipulate original array
console.log(myn2);
console.log("C ",myarr);

const marvel_hero=["thor","Ironman","spiderman"]
const dc_hreo=["superman","flash","batman"]

marvel_hero.push(dc_hreo)                         //push whole array as data

console.log(marvel_hero);
console.log(marvel_hero[3][1]);

const all_hero=marvel_hero.concat(dc_hreo)        //returns new array(not manipulate marvel_hero)
console.log(all_hero);

const all_new_hero=[...marvel_hero,...dc_hreo]    //spread method(any number of array)
console.log(all_new_hero);

const real_another_array=all_new_hero.flat(1)     //concatenate all sub array (with depth 1)

//sorting array
const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.sort();                                    //modify original array
console.log(fruits);
fruits.reverse();
console.log(fruits);

const months = ["Jan", "Feb", "Mar", "Apr"];
const sorted = months.toSorted();                  //not modify original array(leave a copy)
console.log(sorted);
const reversed = sorted.toReversed();
console.log(reversed);

// array method
let mk="mukesh kumar"
console.log(Array.isArray(mk))

let mkA=Array.from(mk)                             //return array(not manipulate original array)
console.log(mk)
console.log(mkA)

console.log(Array.from({name:"mukesh"}))           //empty array

let math=40
let chem=50
let phy=60
console.log(Array.of(math,chem,phy))