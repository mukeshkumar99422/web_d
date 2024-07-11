//==>>lexical-scoping:-Variables declared in outer function =>accessible to inner functions
// (can take from parents NOT from brother AND parents can not take from children)
function outer(){
    let username='mukesh';
    function inner(){                //excessible
        console.log(username);
    }
    inner();

}
// console.log(username);              //not excessible
outer();

//==>>closure:-powerful way to manage scope and encapsulate data
// created automatically when function is defined
function makeFunc(){
    const name='mozila';
    function displayName(){
        console.log(name);
    }
    return displayName;
}
const myFunc=makeFunc();              //return whole lexical scope(not only executional context)
myFunc();