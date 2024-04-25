const score=400
const balance=new Number(100.893)
console.log(score);                        //400
console.log(balance);                      //[Number:100]

//toFixed:-no of digit after
//toPrecision:-total digits
console.log(score.toString().length);
console.log(score.toFixed(2));             //400.00
console.log(balance.toPrecision(4));       //100.9 
console.log(balance.toPrecision(3));       //101

console.log(balance.toFixed(1));


