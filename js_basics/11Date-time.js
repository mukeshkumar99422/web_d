let myDate=new Date()                       //store current date(object data type)

console.log(myDate);                        //2024-04-17T12:30:05.119Z
console.log(myDate.toString());             //Wed Apr 17 2024 12:30:05 GMT+0000 (Coordinated Universal Time)
console.log(myDate.toDateString());         //Wed Apr 17 2024
console.log(myDate.toLocaleString());       //4/17/2024, 12:30:05 PM
console.log(myDate.toLocaleDateString());   //4/17/2024

let createdDate1=new Date(2023,0,23)         //0:january      y,m,d
let createdDate2=new Date("01-14-2023")                     //m,d,y
let createdDate3=new Date("2023-01-14")      //01:january     y,m,d

console.log(createdDate1.toLocaleString());
console.log(createdDate2.toLocaleString());
console.log(createdDate3.toLocaleString());

let timeStamp=Date.now()                      //store millisecond date
console.log(timeStamp);
console.log(timeStamp)

