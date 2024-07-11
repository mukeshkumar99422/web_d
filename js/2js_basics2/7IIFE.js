//imediately invoked function expression(imediate function call)
//to reduce the pollution of global scope in particular part of code==>function will create its own scope
//(functoin)();

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




