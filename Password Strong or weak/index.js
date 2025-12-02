let passkey = document.getElementById("passkey");  
let str = document.getElementById("strength");
let msg = document.getElementById("pass-msg");


msg.style.display = "none";

passkey.addEventListener('input', () => {
    const length = passkey.value.length;

  
    if (length === 0) {
        msg.style.display = "none";
        passkey.style.borderColor = ""; 
        str.innerHTML = "";
        return;
    }
    
    msg.style.display = "block";

   
    if (length > 0 && length < 4) {
        str.innerHTML = " Weak ❌";
        msg.style.color = "red";
        passkey.style.borderColor = "red";
    } 
    else if (length > 4 && length < 6) {
        str.innerHTML = " Medium ⚠️";
        msg.style.color = "orange";  
        passkey.style.borderColor = "orange";
    } 
    else if (length >= 8) {
        str.innerHTML = " Strong ✅";
        msg.style.color = " green";
        passkey.style.borderColor = "green";
    }
});

