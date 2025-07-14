//인라인 이벤트 모델 확인하기
function test1(button) {
    button.style.backgroundColor = "pink";
    button.style.color = "white";
}

function changeBg(color) {
    const result = document.querySelector("#result");
    result.style.backgroundColor = color;
}

// 방법 1 : 요소를 변수로 지정 & 미리 만든 함수 사용
// let btn = document.querySelector("#btn1");
// btn.onclick = changeColor;

// function changeColor() {
//     document.querySelector("p").style.color = "#f00";
// }

// 방법 2 : 요소를 따로 변수로 만들지 않고 사용
// document.querySelector("#btn1").onclick = changeColor;

// function changeColor() {
//     document.querySelector("p").style.color = "#0f0";
// }

// 방법 3 : 직접 함수를 선언
// document.querySelector("#btn1").onclick = function() {
//     document.querySelector("p").style.color = "#00f";
// };

document.getElementById("test2-1").onclick = function () {
    alert("고전 이벤트 모델로 출력된 대화상자")
}

document.getElementById("test2-2").onclick = function () {
    document.getElementById("test2-1").onclick = null;
    alert("test2-1 이벤트를 제거 하였습니다");
}

document.getElementById("test2-3").onclick = function (e) {
    // 방법 1: 직접 선택
    // document.getElementById("test2-3").style.backgroundColor = "pink";

    // 방법 2: 이벤트 객체 e 사용
    //e.target은 클릭된 요소를 가리킴
    // e.target.style.backgroundColor = "skyblue";

    // 방법 3: this 사용 (이벤트가 발생한 요소를 가리킴)
    this.style.backgroundColor = "yellow";
};

document.getElementById("test3").addEventListener("click", function () {
    //this.style.width = "300px
    this.style.width = (this.clientWidth + 20) + "px";
});

document.getElementById("test3").addEventListener("click", function () {
    this.style.height = (this.clientHeight + 20) + "px";
})

// document.getElementById("changeBtn1").addEventListener("click", function(){
//     const div1 = document.getElementById("div1");
//     const input1 = document.getElementById("input1");
//     const bgColor = input1.value;
//     div1.style.backgroundColor = bgColor;
//     input1.value = "";

// })

/*
change 이벤트
    사용자가 텍스트를 입력 완료한 뒤 포커스를 다른 곳으로 
    옮기거나(blur) 또는 Enter 키를 눌렀을 때
    입력한 값이 이전과 다를 경우에만 change 이벤트가 발생
    즉시 발생하지 않음. 입력 도중에는 발생하지 않음 
*/

document.getElementById("input1").addEventListener("change", function () {

    console.log("change 이벤트 발생");
    const div1 = document.getElementById("div1");

    const bgColor = this.value;
    div1.style.backgroundColor = bgColor;
    this.value = "";
})

const answers = ["꿈을 갖기 위해서", "교도소", "오목", "독수리 오형제"];

const listItems = document.querySelectorAll("#nonsense li");
const answerDiv = document.getElementById("answer");

listItems.forEach((li, index) => {
    li.addEventListener("mouseover", () => {
        answerDiv.className = "";
        answerDiv.innerHTML = answers[index];
    });

    li.addEventListener("mouseout", () => {
        answerDiv.innerHTML = "정답보여주기";
    });
});

document.getElementById("quiz").addEventListener("click",e =>{
    if (e.target.src.includes("quiz1.png")){
        e.target.src = "../image/quiz1_1.png";
    } else {
        e.target.src = "../image/quiz1.png";
    }
})

document.getElementById("goNaver").addEventListener("click", function(e){
    // 매개변수 e 또는 event == 이벤트 발생 객체
    //                         (이벤트와 관련된 정보가 담겨있는 객체)
    e.preventDefault(); // HTML 요소가 가지고 있는 기본 이벤트를 제거
    alert("네이버 이동이 되지 않습니다");
});
