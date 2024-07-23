//reduce=>think like fibonacci sequence
// arr.reduce(
//     (accumulator,currentvalue)=>accumulator+currentvalue;
//     ,initialvalue
// )

const myNums=[1,2,3,4];
const myTotal1=myNums.reduce(function (acc,curr){  //initially 0 will be given to acc--next time sum will be given to acc
    console.log(`acc:${(acc)} and curr:${(curr)}`);
    return acc+curr;
},0);
console.log(myTotal1);                                   //1+2+3+4

//using arrow function
const myTotal2=myNums.reduce((acc,curr)=>(acc*curr),1);  //1*2*3*4
console.log(myTotal2);

//reduce=>array of object
const shopingCart=[
    {
        cource:"web-d",
        price:1000
    },
    {
        cource:"dsa",
        price:2000
    },
    {
        cource:"data science",
        price:5000
    }
];
const totalPrice=shopingCart.reduce((acc,curr)=>(acc+(curr.price)),0);
console.log(totalPrice);