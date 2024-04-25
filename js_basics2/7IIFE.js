//imediately invoked function expression(imediate function call)
//to reduce the pollution of global scope:-other wise we can call function also(chai())
//(functoin)()

(function chai(){                   //named iffe
    console.log(`DB connected`);
})();

//arrow function iife
(()=>{                              //unnammed iffe
    console.log(`DB CONNECT TWO`);
})();

//pass argument
((name)=>{
    console.log(`${name}`);
})("mukesh");




