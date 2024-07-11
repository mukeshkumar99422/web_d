//<function>.call(<who will be the this context>,<argument(comma separated));
//<function>.call(<who will be the this context>,<argument(array format));
//basic
function detail(hometown){
    console.log(`Name is ${this.username},email is ${this.email},hometown is ${hometown}`);
}

const obj1={
    username:'mukesh',
    email:'mukeshkumar@mukesh.com',

    greeting:function(){
        console.log(`hello ${this.username}`);
    }
}
const obj2={
    username:'hitesh',
    email:'hiteshkumar@mukesh.com',
}
obj1.greeting.call(obj2);
detail.call(obj2,'mumbai');

console.log('\n');
//object creation
function SetUsername(username){
    //complex db call
    this.username=username;
    return this;
}
function createUser(username,email,password){
    this.email=email;
    this.password=password;

    // SetUsername(username);                //here this will call SetUsername as current context(delete after function executed)
    SetUsername.call(this,username);
    return this;
}

const user1=new createUser('Mukesh','mukeshkumar@example.com',1234);
console.log(user1);