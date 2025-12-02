let container = document.querySelector(".notesContainer");
let btn = document.querySelector(".btn");


function saveData() {
    let allNotes = document.querySelectorAll(".input-box");
    let data = [];
    allNotes.forEach(note => {
        data.push(note.innerHTML);
    });
    localStorage.setItem("notes", JSON.stringify(data));
}


function showNotes() {
    let storedNotes = JSON.parse(localStorage.getItem("notes"));
    if (storedNotes) {
        storedNotes.forEach(content => {
            let inputbox = document.createElement("p");
            let img = document.createElement("img");

            inputbox.className = "input-box";
            inputbox.setAttribute("contenteditable", "true");
            inputbox.innerHTML = content;
            img.src = "delete.png";

            inputbox.appendChild(img);
            container.appendChild(inputbox);
        });
    }
}

btn.addEventListener("click", () => {
    let inputbox = document.createElement("p");
    let img = document.createElement("img");

    inputbox.className = "input-box";
    inputbox.setAttribute("contenteditable", "true");
    img.src = "delete.png";

    inputbox.appendChild(img);
    container.appendChild(inputbox);

    saveData();
});


container.addEventListener("click", (e) => {
    if (e.target.tagName === "IMG") {
        e.target.parentElement.remove();
        saveData();
    }
});

container.addEventListener("keyup", (e) => {
    if (e.target.classList.contains("input-box")) {
        saveData();
    }
});


showNotes();
