const course={
    courcename:"js in hindi",
    price:999,
    courceInstructor:"hitesh"
}

console.log(course.courceInstructor)

// ==>instead of this
const {courceInstructor}=course;
console.log(courceInstructor);

// ==>instead of this
const{courceInstructor:instructor}=course;
console.log(instructor);

//==>
const person={
    a:1,
    b:{
        c:2,
        d:3
    }
}
const {a,b:{d},b:{c}}=person;
console.log(a,d,c);

//Destructuring of array:-
const array=[1,2];
const [first,second]=array;
console.log(`first:${first}`);                      //1
console.log(`first:${second}`);                     //2
console.log("\n");