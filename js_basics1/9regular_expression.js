// regular expression:- a pattern that describes a set of strings that match it, and rejects the rest.

const sen="i am very nice very goood very handsomeboy";
console.log(sen.replace("very","VERY"));                         //replace only 1st very

const regex=/very/g;                                             //very globally
console.log(sen.replace(regex,"VERY"));                          //replace all very

//g  :-globally
//gi :-case insensative globally

// https://regexr.com/