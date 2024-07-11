// static property/method=>>associated with a class rather than with instances

class User{
    constructor(username){
        this.username=username;
    }
    logMe(){
        console.log(`USERNAME is ${this.username}`);
    }

    static notPassToInstance='This is static prop'; //static property/attribute
    static createId(){                              //static method
        return Math.random();
    }
}

class Teacher extends User{
    constructor(username,subject){
        super(username);
        this.subject=subject;
    }
}

const men1=new User('mukesh');
const teach1=new Teacher('mahesh','hindi');

// console.log(men1.createId());                   //error
// console.log(teach1.notPassToInstance);          //undefined

console.log(User.notPassToInstance);               //will run correctly