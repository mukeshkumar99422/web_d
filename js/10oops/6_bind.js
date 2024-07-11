//bind()=>>similar to call()
//difference=>>return copy of function with specific this context(not execute imediately)

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

const printDetails=detail.bind(obj1,'mumbai');
printDetails();