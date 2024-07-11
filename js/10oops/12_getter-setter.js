//getter(get) method=>>gets value of a property.
//setter(set) method=>>sets value of a property.
//'_' prefix before property==>>considered private or internal(not excessed externally)

//eg:-".length"==>>property having 'get method' over it

///////////////////////////////CLASS BASED////////////////////////////////
// class User{
//     constructor(email,password){
//         this._email=email;
//         this._password=password;
//     }
    
//     get password(){                  //anyone excessing password will get modified value
//         return `mukesh${this._password}mukesh`
//     }
//     set password(value){             //if '_' not putted then 'exceded max call stack' error=>>(constructor also setting up values)
//         this._password=value;
//     }

//     get email(){
//         return `${this._email.toUpperCase()}`;
//     }
//     set email(value){
//         this._email=value.toLowerCase();
//     }
// }

// const mukesh=new User('mukeshkumar@mukesh.com','abc');
// console.log(mukesh.password); 
// console.log(mukesh.email);

///////////////////////////////PROPERTIES BASED////////////////////////////////
// function User(email,password){
//     this._email=email;
//     this._password=password;

//     Object.defineProperty(this,'email',{                        //copy-paste easy
//         get:function(){
//             return `${this._email.toUpperCase()}`;
//         },
//         set:function(value){
//             this._email=value;
//         }
//     })


//     Object.defineProperty(this,'password',{
//         get:function(){
//             return `mukesh${this._password}mukesh`;
//         },
//         set:function(value){
//             this._password=value;
//         }
//     })
// }


// const chai=new User('chai@chai.com','poerifhqpr');
// console.log(chai.email);
// console.log(chai.password);

///////////////////////////////OBJECT BASED////////////////////////////////
const User={
    _email:'m@mk.com',
    _password:'jkl',

    get email(){
        return `${this._email.toLocaleUpperCase()}`;
    },
    set email(value){
        this._email=value.toLocaleLowerCase();
    }
}
console.log(User.email); 
