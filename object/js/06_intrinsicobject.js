const mydate = new Date();
console.log(mydate.toLocaleDateString())
//toLocaleDateString()함수는 "년 월 일" 를 문자열로 반환하는 함수
console.log(mydate.toLocaleTimeString());
//toLocaleTimeString() 함수는 "오전/ 오후 시:분:초" 를 문자열로 반환
console.log(mydate.toLocaleString());
// toLocaleString()함수는 "년월일 오전/오후 시:분:초"를 문자열로 반환

document.getElementById("btn1").addEventListener("click", () => {
    setTimeout(function () {
        alert("setTimeout()을 사용하여 표시 됩니다")
    },3000);
})

let time_id;
const startTime = function(){
    let now = new Date();
    document.querySelector("#result").value = now.toLocaleTimeString();
    time_id = setTimeout(startTime, 1000);
};

document.getElementById("btn2").addEventListener("click", () =>{
    startTime();
});


document.getElementById("btn3").addEventListener("click", () =>{
    clearTimeout(time_id);
    document.querySelector("#result").value = "";
})

const image = document.querySelectorAll('.imageChoice');
const targetImg = document.getElementById('target');

image.forEach(thumb => {
    thumb.addEventListener("click",function() {
        const newSrc = this.getAttribute('src');
        targetImg.setAttribute('src',newSrc);
    });
    
});

let num = 0;

setInterval(function() {
    num = (num % 3) +1;
    document.getElementById("imgView").src = "/javascroptexample/image/다운로드"+ num + ".jpg"
},300);

document.getElementById("btn4").addEventListener("click", ()=>{
    if(confirm("정말 네이버로 이동하시겠습니까?")){
    location.href = "https://www.naver.com/";
    }
});

document.getElementById("btn5").addEventListener("click", () =>{
    location.href = "/object/html/01_json.html";
})

document.getElementById("btn6").addEventListener("click", ()=>{
    let value = "";
    for(let i = 0; i < 5; i++){
        value += Math.floor(Math.random()*10);
    }
    const result2 = document.getElementById("result2");
    result2.innerHTML = value;
    result2.style.color = "skyblue";
})