let a="33";
let b=Number(a);

console.log(typeof(a));
console.log(typeof(b));

console.log(a);
console.log(b);

//"33"=>33       (converted to number and printed)
// "33abc"=>NaN  (converted to number and printed)
//true=>1
//null=>0
//undefinde=>NaN


let c="mukesh";
// let d=c.toBoolean();                                  //not valid
let d=Boolean(c);

console.log(c);
console.log(d);

const num="45";
// const num1=num.toInt(); const num1=Int(num);           //not valid

const num2=parseInt(num);
console.log(typeof(num2));

// falsy values:false, 0, -0, BigInt 0n, "", null, undefined,NaN     =>false
// truthy values:'false', "0", " ", [], {}, function(){}             =>true