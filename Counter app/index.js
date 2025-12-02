let count = 0;

let display = document.getElementById("count");
let increment = document.getElementById("increase");
let decrement = document.getElementById("decrease");
let recount = document.getElementById("recount");

increment.addEventListener("click",()=>{
    count+=1
    display.innerHTML = count;
})

decrement.addEventListener("click",()=>{
    count-=1
    display.innerHTML = count;
})

recount.addEventListener("click",()=>{
    count = 0;
    display.innerHTML = count;
})