//basic arow function
const addTwo=(num1,num2)=>{                        //no function keyword used
    return num1+num2;
}
console.log(addTwo(3,4));

//implicit return
const addThree=(num1,num2,num3)=>num1+num2+num3;
console.log(addThree(1,2,3));

//return object via arrow function
const returnObject=(username)=>({username:username});
console.log(returnObject("mukesh"));

