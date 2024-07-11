//#>    note that almost all things in js are object(array,string...)
num=new Array(1,2,3,4);                //new will create a fresh contextfor instance
console.log(num);
console.log(num.length);

num.cat='aray-object';
console.log(num.cat);

//#>    function can also be treated as object
console.log('##############################################################');
function mul(n){
    this.numb=n;
    return n*5;
}
console.log(mul.prototype);

//#>    inject in object itself
mul.cat='function-object';
console.log(mul.cat);

console.log('##############################################################');
//#>    inject in prototype
function Stud(name,score){
    this.name=name;
    this.score=score;

    return this;
}
Stud.prototype.scInc=function(){
    this.score++;
}
console.log(Stud.prototype);

const mk=new Stud("mukesh",45);         //new keyword also handle injected properties/methods for instances
mk.scInc();
console.log(mk.score);

/*

Here's what happens behind the scenes when the new keyword is used:-

<A new object is created>: The new keyword initiates the creation of a new JavaScript object.

<A prototype is linked>: The newly created object gets linked to the prototype property of the constructor function. This means that it has access to properties and methods defined on the constructor's prototype.

<The constructor is called>: The constructor function is called with the specified arguments and this is bound to the newly created object. If no explicit return value is specified from the constructor, JavaScript assumes this, the newly created object, to be the intended return value.

<The new object is returned>: After the constructor function has been called, if it doesn't return a non-primitive value (object, array, function, etc.), the newly created object is returned.

*/

