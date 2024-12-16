//==>>CREATION OF PROMISE
//PROMISE==>object represents the eventual completion (or failure) of an asynchronous operation and its resulting value.
//NOTE:-here 'resolve/reject' && in ajax 'readyState'
//NOTE:-what promise will return after completion will be passed via resolve(value) to .then
//NOTE:-what promise will return after failure will be passed via reject(error) to .catch

//==>>CONSUMPTION OF PROMISE
//.then(<callback function>)==>run when promise resolved
//.catch(<callback function>)==>run when promise rejected
//.finally(<callback function>)==>run always(either promise resolved or rejected)

//callback function=>asynchronous task,event handling etc

//async-await(wait till response from promise not recieved)==>used at place of .then
//NOTE:-'await' keyword is used for getting responses that take time
// async ()=>{
//     const response=await <promise>;   //</promise>====><resolve argumetnt>
//     console.log(response);
// }
//NOTE:-use try-catch for handling rejection also' && 'reduce chaining of .then'

//.then() method create new promise applied on another promise(chained)

const promiseOne=new Promise(function(resolve,reject){
    //Do an async task by promising:-DB call,cryptography,network etc.
    setTimeout(function(){
        console.log('async task is complete');
        resolve();
    },1000);
})
promiseOne.then(function(){
     console.log("Promise consumed");
});

//promise without variable
new Promise(function(resolve,reject){
    setTimeout(() => {
        console.log("async task 2 complete");
    }, (1000));
}).then(()=>{
    console.log("promise 2 resolved");
})

//passing parameter/argument in .then
const promiseThree=new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({usename:'mukesh',email:'mukeshkumar@example.com'});
    },2000);
});
promiseThree.then(function(user){              //think "resolve()" as callback function of .then
    console.log(user);
});

//chaining of then
const promiseFour=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        error=false;
        if(!error){
            resolve({username:'mukesh',email:'mukeshkumar@example.com'});
        }
        else{
            reject({error:'data not found'});
        }
    },3000);
});
promiseFour.then((user)=>{
    console.log(user.username);
    return user;
}).then((user2)=>{
    console.log(user2.email);
}).catch((error)=>{
    console.log(error.error);
}).finally(()=>{
    console.log("promise completed");
});

//async-await
const promiseFive=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        error=false;
        if(!error){
            resolve({lang:'javascript',file:'.js'});
        }
        else{
            reject({error:'lang not registered'});
        }
    },4000);
});

async function consumePromiseFive(){
    try{                                   //resolved
        const response=await promiseFive;
        console.log(response);
    }
    catch(error){                          //rejected
        console.log(error);
    }
};
consumePromiseFive();
