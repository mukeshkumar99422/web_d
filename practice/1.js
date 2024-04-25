let a="muKeSh"
let newname=""
for(let i=0;i<a.length;i++){
    if(i==0||i==(a.length-1)){
        newname+=a[i].toUpperCase();
    }
    else{
        newname+=a[i].toLowerCase();
    }
}

console.log(newname);