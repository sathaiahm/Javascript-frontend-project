let image = document.getElementById("img");
let passkey = document.getElementById("passkey");

image.onclick = () =>{

    if(passkey.type === "password"){
        passkey.type = "text";
        image.src = "eye-close.png";
    }

    else{
        passkey.type = "password";
        image.src = "eye-open.png";
    }
}