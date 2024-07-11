// for in loop==>iterate over keys

//for in loop==>objects
const myobject={
    name:"mukesh",
    class:"12th sc",
    roll_no:45
}

for (const key in myobject){
    // console.log(`${key}:-${myobject.key}`);   key comes in form of string 
    console.log(`${key}:-${myobject[key]}`);
}


//for in loop=>array
const programing=["js","rb","py","java","cpp"];
for (const i in programing){                      //here also keys of array will return in 'i'(0,1,2...)
    console.log(i,":",programing[i]);
}

// for in loop=>map 
// for in loop canot used over map
// map uses inumerable keys ==>(non-iterative)
const map=new Map()
map.set('IN',"india");
map.set('USA',"united states of america");
map.set('FR',"france");
console.log(map);

for (const key in map){
    console.log(key);
}


