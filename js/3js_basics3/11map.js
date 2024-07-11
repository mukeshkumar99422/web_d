//map=>do this action on every elements

const myNums=[1,2,3,4,5,6,7,8,9,10];
const newNums1=myNums.map((num)=>num+10);
console.log(newNums1);

//chaining
const newNums2=myNums
                .map((num)=>num*10)
                .map((num)=>num+1)
                .map((num)=>num/10)
                .filter((num)=>num>5);

console.log(newNums2);