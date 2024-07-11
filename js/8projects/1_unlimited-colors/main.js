//genrate a random color

//generate 6 random numbers from 16 hex symbols->add them in color
const randomColor=function(){
    const hex="0123456789ABCDEF";
    let color='#';
    for(let i=0;i<6;i++){
         color+=hex[Math.floor(Math.random()*16)];
    }

    return color;
}

// document.querySelector('#start').addEventListener('click',function(e){
//     e.preventDefault();

//     let colorChanger=setInterval(function(){
//         document.querySelector('body').style.backgroundColor=randomColor();
//     },1000);

//     document.querySelector('#stop').addEventListener('click',function(){
//         clearInterval(colorChanger);
//     })
// })

let colorChanger;   //declaring globally
//start changing color
document.querySelector('#start').addEventListener('click',function(e){
    e.preventDefault();

    if(!colorChanger){                       //run when color changer has null(ie stopped once and not when started second time)
        colorChanger=setInterval(function(){
            document.querySelector('body').style.backgroundColor=randomColor();
        },1000);
    }
})

//stop changing color
document.querySelector('#stop').addEventListener('click',function(){
    clearInterval(colorChanger);
    colorChanger=null;                 //flushing variable's value(when no use)
})

