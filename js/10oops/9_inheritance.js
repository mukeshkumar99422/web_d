//infact inheritance() is prototyple but syntax is also here
//class inherits from another class shares all attributes/methods of referenced class.
class User{
    constructor(username){
        this.username=username;
    }
    logMe(){
        console.log(`USERNAME is ${this.username}`);
    }
}

class Teacher extends User{
    constructor(username,subject){
        super(username);                    //like function.call()
        this.subject=subject;
    }
    addCource(){
        console.log(`a new cource was added by ${this.username}`);
    }
}

const teach1=new Teacher('sk meena','social');
teach1.addCource();
teach1.logMe();
console.log(teach1 instanceof Teacher);       //true

const men1=new User('mahesh');
// men1.addCource();             //User has no excess to teacher class
