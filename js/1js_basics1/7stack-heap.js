// 1.stack memory(via copy)=>in primitive data type
// 2.heap memory(via reference)=>in non-primitive data type

let myName="mukesh"
let anotherName=myName            //given a copy
anotherName="deepak"
console.log(myName);              //mukesh
console.log(anotherName);         //deepak


let userOne={
    email:"mukeshkumar",
    upi:1234
}
let userTwo=userOne               //value given via reference
userTwo.upi=4567
// userTwo={                      //will not change userOne
//     email:"mukeshkumar",
//     upi:123456
// }
console.log(userOne.upi);         //4567
console.log(userTwo.upi);         //4567
