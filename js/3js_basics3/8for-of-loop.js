//for of loop==>iterate over data 
const arr=[1,2,3,4,5]
for(const i of arr){
    console.log(i);
}

const greetings="hello world";
for(const greet of greetings){
    console.log(`each char is ${greet}`);
}

//maps{key=>value}==>object holds key(unique) value pair,remember order of keys entered(not like objects)
const map=new Map()
map.set('IN',"india");
map.set('USA',"united states of america");
map.set('FR',"france");
console.log(map);

//for of loop on map
// 1st
for (const key  of map){
    console.log(key);
}
// 2nd
for (const value  of map){           //same output as 1st
    console.log(value);
}
// 3rd 
for (const [key,value]  of map){     //destructuring in array
    console.log(key,":-",value);
}


// for of loop on objects
const myobject={
    name:"mukesh",
    class:"12th sc",
    roll_no:45
}

// for (const [key,value] of myobject){   // objets are not iteratable like this(use for in loop)
//     console.log(`${key}:-${value}`);
// }