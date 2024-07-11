const user={                                            //object literals
    username:'mukesh',                                  //properties
    loginCount:9,
    signedIn:true,

    getUserDetails:function(){                          //=>method
        console.log('got user details from database');
        console.log(`usename:${this.username}`);
    }
}

//with construction function==>create multiple instances of same object literal
//eg:-const promiseOne=new Promise()
 function User(username,email,password){
    this.username=username;
    this.email=email;
    this.password=password;

    this.greeting=function(){
        console.log(`Hello:${this.username}`);
    }
    return this;
 }

 const userOne=new User('mukesh','mukeshkumar@email.com',1234);           //NOTE:-new keyword is for creating new context by creating fresh object instance 
 const userTwo=new User('hitesh','hitesh@example.com',1234);              //if not use 'new' then it will overwrite userOne
 console.log(userOne);
 console.log(userOne instanceof User);
 console.log(userOne.constructor);

