// const coding=["js","ruby","java","python","cpp"];
// const value=coding.forEach((item)=>{
//     // console.log(item);
//     return item;
// })
// console.log(value);        //undefined


//filter=>from array with specific conditions
const myNums=[1,2,3,4,5,6,7,8,9,10];
const newNums1=myNums.filter((num)=>num>4); //NOTE:-if use {} then use return keyword
console.log(newNums1);  //[5,6,7,8,9,10]

// same with forEach method 
const newNums2=[];
myNums.forEach((num)=>{
    if(num>4){
        newNums2.push(num);
    }
})

// filter=>array of Object
const books = [
    {
      title: "Harry Potter and the Sorcerer's Stone",
      author: "J.K. Rowling",
      genre: "Fantasy",
      publicationYear: 1997,
    },
    {
      title: "To Kill a Mockingbird",
      author: "Harper Lee",
      genre: "Classic",
      publicationYear: 1960,
    },
    {
      title: "1984",
      author: "George Orwell",
      genre: "Dystopian",
      publicationYear: 1949,
    },
    {
      title: "The Great Gatsby",
      author: "F. Scott Fitzgerald",
      genre: "Classic",
      publicationYear: 1925,
    },
    {
      title: "Pride and Prejudice",
      author: "Jane Austen",
      genre: "Romance",
      publicationYear: 1813,
    },
    {
      title: "Brave New World",
      author: "Aldous Huxley",
      genre: "Science Fiction",
      publicationYear: 1932,
    },
];
const userNeedBook=books.filter((book)=>{
    return (book.genre==="Fantasy")&&(book.publicationYear>=1990);
});
console.log(userNeedBook);