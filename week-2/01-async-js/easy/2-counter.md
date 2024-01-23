## Counter without setInterval

Without using setInterval, try to code a counter in Javascript. There is a hint at the bottom of the file if you get stuck.


let cnt=0;

function interval(){
    console.log(cnt);
    setTimeout(()=>{
        interval();
    },1000)
}
interval();



































































(Hint: setTimeout)