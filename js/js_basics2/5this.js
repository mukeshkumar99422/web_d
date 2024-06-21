//this:refer to the current context

const user={
    username:"mukesh",
    price:20,
    welcome:function(){
        console.log(`welcome ${this.username}`)
    }
}

user.welcome();                         //it is now method
user.username="sam";
user.welcome();

//this globally
console.log(this);                      //will give empty object

//this in function
function chai(){
    let name="mukesh kumar"
    console.log(this);
    // console.log(this.name);          //will give undefined
}
chai();