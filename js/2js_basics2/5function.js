//spread operator and used here as rest operator:-insert all arguments in array
function calculateCartPrice(val1,val2,...num1){
    return num1;
}

const arr=calculateCartPrice(1,2,99,100,101,102,103); //num1 take values from 99
console.log(arr);

//object in function
const user={
    username:"mukesh",
    price:"199"
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

handleObject(user);
handleObject({
    username:"mukesh",
    price:20
})

//array in functons
function secondNumber(myarr){
    console.log(myarr[1]);
}

const myarr=[1,2,3,4,5];
secondNumber(myarr);

//function expression
const functionExp=function(name){
    console.log(`my name is ${name}`);
}
functionExp("mukesh kumar");

//higher order function==>>function men function as parameter
function addOne(num=0){
    if(num%2==0){
        return num;
    }
    else{
        return num+1;
    }
};

function half(num=0){
    return num/2;
};

function mid(func1,func2,value){
    let temp1=func1(value);
    let temp2=func2(temp1);
    return temp2;
};

console.log(mid(addOne,half,5));