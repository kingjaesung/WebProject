document.getElementById("formInput1").addEventListener("keydown", (e)=>{
    const form1 = document.getElementById("form1");
    if(e.key == "Enter"){
        form1.innerHTML = e.target.value;
        e.target.value = "";
        
      
    }
})

document.getElementById("outputButton").addEventListener("click", ()=>{
    const form2 = document.getElementById("form2");
    const formWidth = document.getElementById("width");
    const formHeight = document.getElementById("height");
    const color = document.getElementById("color");
    const font = document.getElementById("font");

    
    form2.style.width = formWidth.value + "px";
    form2.style.height = formHeight.value + "px";
    form2.style.backgroundColor = color.value;
    form2.innerHTML = font.value;
});