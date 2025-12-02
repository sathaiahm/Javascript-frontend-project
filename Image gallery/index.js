let container = document.querySelector(".gallery");
let back = document.getElementById("back");
let next = document.getElementById("next");


container.addEventListener("wheel", (e) => {
    e.preventDefault();
    container.style.scrollBehavior = "auto";
    container.scrollLeft += e.deltaY;
});


next.addEventListener("click", () => {
    container.style.scrollBehavior = "smooth";
    container.scrollLeft += 900;
});

back.addEventListener("click", () => {
    container.style.scrollBehavior = "smooth";
    container.scrollLeft -= 900;
});
