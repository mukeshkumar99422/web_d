console.log(Math.PI);
Math.PI=5;
console.log(Math.PI);       //remain same

console.log('\n');
const description=Object.getOwnPropertyDescriptor(Math,'PI');
console.log(description);
// {
//     value: 3.141592653589793,
//     writable: false,                                //can not be changed
//     enumerable: false,                              //can not be iterated
//     configurable: false
// }

// Object.defineProperty(Math,'PI',{                   //we can not change property of predifined constants
//     writable: true
// })
// Math.PI=5;
// console.log(Math.PI);

let chai={
    name:'ginger tea',
    available:true,
    price:45,

    chaiDo:function(){
        console.log('chai nhi bni');
    }
}

console.log('\n')
/////////ITERATION///////////////////////////////////////////
for (let [key,value] of Object.entries(chai)){
    if((typeof value)!='function'){
        console.log(`${key}:${value}`);
    }
}
console.log('\n')
// stop iterating price
Object.defineProperty(chai,'price',{
    enumerable:false
})
//price will not be iterated
for (let [key,value] of Object.entries(chai)){
    if((typeof value)!='function'){
        console.log(`${key}:${value}`);
    }
}

console.log('\n')
///////////VALUE////////////////////////////////////////////
console.log(chai.name);
chai.name='green tea';                   //will change
console.log(chai.name);
console.log('\n')
// stop iterating price
Object.defineProperty(chai,'name',{
    writable:false
})
chai.name='ginger tea';
console.log(chai.name);                    //will remain same