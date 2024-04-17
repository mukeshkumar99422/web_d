console.log("2">1);                                     //=>true
console.log("02">1);                                    //=>true
console.log("2"==2);   //==                             =>true
console.log("2"===2);  //===(strict equality)           =>false

//comparision and equality check are diff things in js
console.log(null>0);  //false               //null converted to 0
console.log(null>=0); //true                //null converted to 0
console.log(null==0); //false

console.log(undefined>0);  //false
console.log(undefined==0); //false
console.log(undefined>=0); //false