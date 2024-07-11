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
console.log(timeStamp);

// Dates

let mydate = new Date()
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());
// console.log(typeof myDate);

// let myCreatedDate = new Date(2023, 0, 23)
// let myCreatedDate = new Date(2023, 0, 23, 5, 3)
// let myCreatedDate = new Date("2023-01-14")
let myCreatedDate = new Date("01-14-2023")
// console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now()

// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());
// console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth() + 1);
console.log(newDate.getDay());

// `${newDate.getDay()} and the time `

newDate.toLocaleString('default', {
    weekday: "long",
    
})
