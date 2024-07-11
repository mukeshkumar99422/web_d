//this:refer to the current context(scope)

const user={
    username:"mukesh",
    price:20,
    welcome:function(){
        console.log(`welcome ${this.username}`)
    },
    show_price:function(){
        console.log(this.price);
    },
    This:function(){                  //show current object(user)
        console.log(this);
    }
}

user.welcome();
user.show_price();
user.This();

//this globally
console.log(this);                      //will give empty object=>no any globally current context(give window object when run on browser console)

//this in function
function chai(){
    let name="mukesh kumar"
    console.log(this);
    console.log(this.name);             //will give undefined
}
chai();