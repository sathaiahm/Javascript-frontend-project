let length = 12;

let passkey = document.getElementById("passkey");

let lowercase = "qwertyuioplkjhgfdsazxcvbnm";
let uppercase = "QWERTYUIOPLKJHGFDSAZXCVBNM";
let number = "1234567890";
let symbol = "~!@#$%^&*()_+-`<>,.?/";


const all_char = lowercase + uppercase + number + symbol;

function gen_pass(){

    let password = "";

    while(length > password.length){
        password += all_char[Math.floor(Math.random() * all_char.length)];
    }

    
    passkey.value = password;
        
}


function copypassword(){
    passkey.select();
    document.execCommand("copy")
}