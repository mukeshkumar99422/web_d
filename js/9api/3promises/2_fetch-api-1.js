//fetch=>API for fetching resources across internet==>return 'promise'
//fetch api=>powerful,flexible replacement for XMLHttpRequest

//fetch in async-await
async function fetchData(){
    try{
        const response=await fetch("https://api.github.com/users/mukeshkumar99422");
        const data=await response.json();          //extracting json body from response object(as promise)
        // console.log(response);
        console.log(data);
    }
    catch(error){
        console.log(`error:-${error}`);
    }
}
fetchData();

//fetch in .then-.catch
fetch("https://api.github.com/users/mukeshkumar99422")
.then((result)=>{
    return result.json();
})
.then((data)=>{
    console.log(data.id);
})
.catch((error)=>{
    console.log(`E:${error}`);
})