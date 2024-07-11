//prototype:-
    //Every object=>internal property:'[[Prototype]]',refers to another object(its prototype).

//prototype chain:-
    //access method/property of an object
    //->js looks in object itself
    //->if not found then continues to its prototype(until null come as protoytpe)

//searching direction :-'main object(itself)'->'prototype'->'Object(top level)'->'null'

const arr=[1,2,3,4,5,6];                 //=>prototype:Array=>prototype:Object

const User={                             //prototype:Object
    username:'mukesh',
    email:'mukeshkumar@example.com'
};

//=>inject method in itself:-
User.greet=function(){
    console.log(`hii ${this.username}`);
}
//=>inject in prototype:-
Array.prototype.printFirst=function(){
    console.log(this[0]);
}
//=>inject in top level(Object):-
Object.prototype.hii='HII I AM MUKESH KUMAR';

User.greet();
arr.printFirst();
console.log(arr.hii);
console.log(User.hii);

console.log('\n');
//=>inheritance(prototyple)
const Animal={
    walk:true,
    brain:true,
    welcome:function(){
        console.log("hii animal");
    }
};

const human={
    legs:2,
    brain:1,
    __proto__:Animal  //all humans are animal
}

const dog={
    legs:4,
    brain:1
}
dog.__proto__=Animal;   //all dogs are animal
// Object.setPrototypeOf(dog,Animal);             //modern method(<object to change its prototype>,<object/null>)
dog.welcome();

console.log('\n');
// //==>for constructor function
// function Person(name,surname){
//     this.name=name;
//     this.surname=surname;
//     this.getName=function(){
//         console.log(`${this.name} ${this.surname}`);
//     }
// }
// function Teacher(subject,exp){
//     this.exp=exp;
//     this.subject=subject;

// }
// function Student(name,surname,stand,gender){
//     this.name=name;
//     this.surname=this.surname;
//     this.stand=stand;
//     this.gender=gender;
// }

// Object.setPrototypeOf(Student,Person);
// const stud1=new Student('mukesh','kumar','12th','male');
// stud1.getName();

console.log('\n');
//target=>>insert direct trueLength method(give length by treaming) in string
let str1='  mukesh kumar  ';
console.log(str1.length);               //16

String.prototype.trueLength=function(){
    return `${this.trim().length}`;
}
console.log(str1.trueLength());          //12




