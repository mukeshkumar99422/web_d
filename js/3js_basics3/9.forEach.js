//forEach:-perform specified operation on every element of array via callback function(parameters=><item,index,arr>)
const coding=["js","python","c","c++","*************"];
coding.forEach(function (item){            //function have no name
    console.log(item);
})
// arrow function 
coding.forEach((item)=>{                   //function without name
    console.log(item);
})

//passing different function as callback function
function printMe(item){
    console.log(item);
}
coding.forEach(printMe);

//all three arguments passing
coding.forEach(function(item,index,arr){
    console.log(item,index,arr);
})

//forEach==> array of objects
const mycoding=[
    {
        language:"javascript",
        fileName:"js",
    },
    {
        language:"python",
        fileName:"py",
    },
    {
        language:"java",
        fileName:"java",
    },
    {
        language:"c",
        fileName:"c",
    }
]
mycoding.forEach((item)=>{
    console.log(item.language,":-",item.fileName);
})