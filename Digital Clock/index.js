let mins = document.getElementById("min");
let sec = document.getElementById("sec");
let hrs = document.getElementById("hrs");
let zone = document.getElementById("zone");


setInterval(()=>{

    let current = new Date();

    let hours =  current.getHours() ;

    zone.innerHTML = hours > 12 ? "AM":"PM";

    hrs.innerHTML = (hours% 12 || 12).toString().padStart(2,0);

    mins.innerHTML = (current.getMinutes()<10?"0":"") + current.getMinutes()

    sec.innerHTML = (current.getSeconds()<10?"0":"") + current.getSeconds()
},1000);