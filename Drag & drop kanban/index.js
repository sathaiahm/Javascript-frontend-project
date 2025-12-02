
let lists = document.getElementsByClassName("list");
let rightbox = document.getElementById("right");
let leftbox = document.getElementById("left");
let onemore = document.getElementById("one-more");
let selected = null;  


for (let list of lists) {
    list.addEventListener("dragstart", (e) => {
        selected = e.target;  
    });
}


rightbox.addEventListener("dragover", (e) => {
    e.preventDefault();  
});

rightbox.addEventListener("drop", (e) => {
    if (selected) {
        rightbox.appendChild(selected);  
        selected = null; 
    }
});


leftbox.addEventListener("dragover",(e)=>{
    e.preventDefault();
});

leftbox.addEventListener("drop",(e)=>{
    if(selected){
        leftbox.appendChild(selected);
        selected = null;
    }
});


onemore.addEventListener("dragover",(e)=>{
    e.preventDefault();
});

onemore.addEventListener("drop",(e)=>{
    if(selected){
        onemore.appendChild(selected)
        selected = null;
    }
});

