console.log("안녕")

const check = document.querySelectorAll(".check");

check.forEach(e =>{
    e.addEventListener("click", () =>{
        e.style.color = "red";
        e.parentNode.style.color = "blue";
        e.parentNode.style.textDecoration = "line-through";
    })
});