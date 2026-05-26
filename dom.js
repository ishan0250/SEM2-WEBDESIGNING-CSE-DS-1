let heading = document.getElementById("heading");
let input = document.getElementById("userinput");

heading.textContent = "Dom manipulation in javascript";
heading.style.color = "blue";
heading.style.fontSize = "28px";

document.getElementById("changetextbtn").addEventListener("click", function() {
    if (input.value !== "") {
        heading.innerHTML = input.value;
    }
});
document.getElementById("bgcolorbtn").onclick=function(){
    document.body.style.backgroundColor="orange";
};
document.getElementById("fontbtn").onclick=function(){
    document.body.style.fontSize="38px";
};
