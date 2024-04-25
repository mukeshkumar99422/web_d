//{}is scope
//anything written outside {} will be global scope(available in block scope also)
if(true){
    let a=10                  //declared via let will be available in that scope only
    const b=20
    var c=30                  //var should be avoided(will declare globally)
}

// console.log(a);            //give not defined error
// console.log(b);            //give not defined error
console.log(c);               //not give any error(declared globally)

//hoisting
console.log(addone(5));
// console.log(addtwo(5));    //will give error
function addone(num){
    return num+1;
}

const addtwo=function(num){
    return num+2;
}