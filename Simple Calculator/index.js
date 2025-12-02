const display = document.getElementById("bar");

function displayfunc(input){
    display.value +=input
}

function cleardisplay(){
    display.value = ""
}

function displayresult(){
    
    try{
        display.value = eval(display.value) 
    }
    catch(error){
        display.value = "Error"
    }


}