//basic arow function
const addTwo=(num1,num2)=>{                        //no function keyword used
    return num1+num2;
}
console.log(addTwo(3,4));

//implicit return(direct return)==>when use curly brackets then return keyword
const addThree=(num1,num2,num3)=>(num1+num2+num3);
console.log(addThree(1,2,3));

//return object via arrow function
const returnObject=(username)=>({username:username});    //without parenthisis error
console.log(returnObject("mukesh"));

//this in arrow function
const This=(data)=>{
    numbers=data;
    console.log(this);                               //empty context(different from normal function)
    console.log(this.numbers);                       //undefined(same as normal function)
}
This(45);
