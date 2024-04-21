//think like dictionary and class mixture

//singleton object :- by constructor singleton forms by literals singleton does not forms

//object literals

const mysym=Symbol("key1")

const jsuser={
    name:"mukesh",                 //name is internally as string
    location:"jaipur",
    age:"21",
    isloggedin:false,
    last_login:["mon","tues"],
    // mysym:"mykey1" ,            //wrong method to use symbol as key
    [mysym]:"mykey1"               //correct method to use symbol as key
}
console.log(jsuser);

// //2 methods to print
console.log(jsuser.name);
console.log(jsuser["name"]);

console.log(jsuser[mysym]);        //cant use with '.'

//change value
jsuser.name="abhay"                //overwriting
console.log(jsuser.name);          //abhay

Object.freeze(jsuser)              //no changes will be propagatted
jsuser.name="mukesh"
console.log(jsuser.name);          //abhay

//function in objects
jsuser.greeting=function(){
    console.log(`Hello jsuser, ${this.name}`);
}

console.log(jsuser.greeting);         //Function
console.log(jsuser.greeting());       //message with undefinded(one extra execution)
jsuser.greeting();                    //message



//objects by constructor

const tinderuser=new Object()         //constructor
const tinderuser2={}                  //litrals

console.log(tinderuser);
console.log(tinderuser2);


//objects under objects

const regularuser={
    email:"some@gmail.com",
    fullname:{
        username:{
            firstname:"mukesh",
            lastname:"kumar"
        }
    }
}

console.log(regularuser);
console.log(regularuser.fullname);
console.log(regularuser.fullname.username);
console.log(regularuser.fullname.username.firstname);

//join objects
const obj1={1:"a",2:"b"}
const obj2={3:"c",4:"d"}

const obj3=Object.assign({},obj1,obj2)                  //{}(empty object) is target other are source//if not written than obj1 will become target
console.log(obj3);

const obj4={...obj1,...obj2}                            //most commanly used


//arrray of objects
const users=[
    {
        id:"123",
        password:"123"
    },
    {
        id:"234",
        password:"234"
    }
]

console.log(users[0].id);

//keys and values method
const obj5={
    name:"mukesh",
    email:"mukeshkumar",
    password:"123"
}

console.log(Object.keys(obj5));              //array of keys
console.log(Object.values(obj5));            //array of values
console.log(Object.entries(obj5));           //array of array containing key value pair

//check a property exist in oject or not
console.log(obj1.hasOwnProperty('a'));       //true
