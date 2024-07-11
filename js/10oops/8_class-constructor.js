//ES6
class User{
    constructor(username,email,password){
        this.username=username;
        this.email=email;
        this.password=password;
    }
    encryptPassword(){
        return `${this.password}abc`;
    }
    changeUsername(){
        return `${this.username.toUpperCase()}`;
    }
}

//object from User class
const chai=new User('chi','chai@example.com','123');
console.log(chai);

// //behind the scene(old)
// function User(username,email,password){               //constructor function
//     this.username=username;
//     this.email=email;
//     this.password=password;

//     this.changeUsername=function(){
//         return `${this.username.toUpperCase()}`;
//     }
// }
// User.prototype.encryptPassword=function(){            //define method explicitly
//     return `${this.password}abc`;
// }
// const chai=new User('chi','chai@example.com','123');
// console.log(chai);
// console.log(chai.encryptPassword());
// console.log(chai.changeUsername());