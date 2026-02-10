let displayTimer=document.querySelector(".display-timer");
let start=document.querySelector("#start");
let stop=document.querySelector("#stop");
let Reset=document.querySelector("#Reset");

let msecs=0;
let secs=0;
let mints=0;
let timerid=null;

function timer()
{
    msecs++;
    if(msecs==100)
    {
        msecs=0;
        secs++;
    }
    if(secs==60)
    {
        secs=0;
        mints++;
    }
    let strmsecs=msecs<10? `0${msecs}`:msecs ;
    let strsecs= secs<10? `0${secs}`:secs ;
    let strmints=mints<10? `0${mints}`:mints ;
    displayTimer.innerText =`${strmints} :${strsecs}: ${ strmsecs}`;
}

start.addEventListener("click",() =>{
    if(timerid==null){
      timerid= setInterval(timer,10)
    }
   
})
stop.addEventListener("click",()=>{
    clearInterval(timerid);
    timerid=null;
})
Reset.addEventListener("click",()=>{
    clearInterval(timerid);
    timerid=null;
    secs=msecs=mints=0;
    displayTimer.innerText=`00 : 00 : 00 `;
})





