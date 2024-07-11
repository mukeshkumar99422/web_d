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