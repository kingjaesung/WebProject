
// id로 접근하기
function accessId() {
    const div1 = document.getElementById("div1");

    const bgColor = div1.style.backgroundColor;
    if (bgColor === "red") {
        div1.style.backgroundColor = "yellow";
    } else {
        div1.style.backgroundColor = "red";
    }
}

//class로 접근하기

function accessClass() {
    //요소를 여러 개 접근하는 경우 [배열] 형태로 반환
    const array = document.getElementsByClassName("div2");

    //인덱스를 이용해서 요소 하나씩 접근
    array[0].style.backgroundColor = "pink";
    array[0].innerHTML = "첫 번째 요소";

    array[1].style.backgroundColor = "tomato";
    array[1].innerHTML = "두 번째 요소";

    array[2].style.backgroundColor = "blue";
    array[2].innerHTML = "세 번째 요소";

}

function accessTagName() {
    const tagName = document.getElementsByTagName("li");

    for (let i = 0; i < tagName.length; i++) {
        const num = tagName[i].innerText; //요소에 작성된 내용 얻어오기
        tagName[i].style.backgroundColor = "rgb(130,220, " + (50 * num) + ")";
    }
}

// function inputTest(){
//     const inputTest = document.getElementById("input-test");
//     const inputValue = prompt("무엇을 입력할꺼니 뭐든 해봐");
//     inputTest.innerText = inputValue;
//     console.log(inputTest.innerText);
// }

function inputTest() {
    const inputTest = document.getElementById("input-test");
    const value = inputTest.value;
    console.log(value);
    alert(value);
    inputTest.value = "";
}

function accessName() {
    const hobbyList = document.getElementsByName("hobby");
    let selected = [];

    for (let i = 0; i < hobbyList.length; i++) {
        if (hobbyList[i].checked) {
            selected.push(hobbyList[i].value);
        }
    }
    const resultDiv = document.getElementById("name-div");
    if (selected.length > 0) {
        resultDiv.innerHTML = `
            선택한 취미: ${selected.join(",")} <br /></br />
            선택된 개수: ${selected.length}`;
    } else {
        resultDiv.innerHTML = "선택된 항목이 없습니다";
    }


}

// CSS 선택자로 접근하기
function accessCss() {
    //단일 요소 선택
    document.querySelector("#css-div").style.border = "3px solid red";

    // 여러 개 중 첫 번째 요소 선택
    document.querySelector("#css-div > div").style.fontSize = "30px";

    // querySelectorALL : 모든 자식 div 요소 선택
    const array = document.querySelectorAll("#css-div > div");
    for(let i = 0; i < array.length; i++){
        array[i].style.backgroundColor = "gold"
    }
}

function readValue(){
    const bg = document.getElementById("chatting-bg");
    const input = document.querySelector("#chatting-input");

    if(input.value.trim().length >0){
        bg.innerHTML += "<p> <span> " + input.value + "</span></p>"
        bg.scrollTop = bg.scrollHeight;
    }
    input.value = "";
    input.focus();
}

function inputEnter(event){
    if(event.key == "Enter") {
        readValue();
    }
}
