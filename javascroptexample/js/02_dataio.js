function fnAlert() {
    alert("alert 버튼 클릭됨");
}

function documentWrite() {
    document.write("자바 스크립트<br />");
    document.write("<b>안녕하세요");
}

function getInnerText() {
    const test1 = document.getElementById("test1");
    console.log(test1.innerText);
}

function setInnerText() {
    document.getElementById("test1").innerText = "innertText로 <br /> 변경된 내용입니다."
}

function getInnerHTML1() {
    const test2 = document.getElementById("test2");
    console.log(test2.innerHTML);
}

function setInnerHTML1() {
    const test2 = document.getElementById("test2");
    test2.innerHTML = "<strong>innerHTML </strong>로 변경된 내용 반갑습니다"
}

function print() {
    let title = document.getElementById("title");
    title.innerHTML = "title 변경내용"
    title.style.color = "blue";
    if (confirm("글자 색갈을 발간색으로 변경 할래요?")) {
        title.style.color = "red";
    } else {
    }
}

function fnConfirm() {
    const confirmBtn = document.getElementById("confirmBtn");

    if (confirm("버튼 배경색을 오렌지색으로 바꾸시겠습니까?")) {
        confirmBtn.style.backgroundColor = "orange";
    } else {
        confirmBtn.style.backgroundColor = "blue";
    }
}

function fnPrompt1() {
    const name = prompt("당신의 이름은 무었입니까?", "안재성");
    const age = prompt("당신의 나이는 몇살입니까>", "28");

    console.log(name);
    console.log(age);

    const divEl = document.getElementById("area2");

    if (name !== null && name.trim() !== "" && age !== null && age.trim() !== "") {
        divEl.innerHTML = "<b>앗 ,당신이 바로" + age + "살" + name + "씨루궁요~..! </b>"
    } else {
        alert("이름과 나이를 모두 입력해주세요!");
        divEl.innerHTML = "";
    }
}

function fnPrompt2() {
    const bike = prompt("당신이 타고다니는 것은 무었입니까?", "오토바이");
    const name = prompt("당신의 이름은 무었입니까?", "박찬호");

    console.log(bike);
    console.log(name);

    let divEl = document.getElementById("area3");
    divEl.innerHTML = "니가 타고다니는 건 " + bike + "맞지? 네 이름은" + name + "이거고"
}

function fnInput() {
    const input1 = document.getElementById("userId");
    const input2 = document.getElementById("userPwd");

    const id = input1.value.trim();
    const pwd = input2.value.trim();

    const reuslt = document.getElementById("result");

    if (id !== "" && pwd !== "") {
        reuslt.value = id + "," + pwd;
    } else {
        reuslt.value = "다시 확인해 주세요";
    }

    input1.value = "";
    input2.value = "";
}


function fnChange(){

    const input1 = document.getElementById("number1");
    const input2 = document.getElementById("number2");

    

    let change1 = input1.value.trim();

    input1.value = input2.value;
    input2.value = change1;

}

function fnBtn(){
    const name = document.getElementById("name");
    const namePrint = document.getElementById("namePrint");
    namePrint.innerHTML = name.value.trim();
    namePrint.style.border = "1px solid black";
    namePrint.style.borderRadius = "20px";
    namePrint.style.display = "inline-block";
    namePrint.style.width = "auto";
}