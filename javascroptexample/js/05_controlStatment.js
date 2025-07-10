
// 시험성적 구하기
function subjectEvr() {
    const score = document.getElementsByClassName("subject");
    const total = document.getElementById("total");
    const evr = document.getElementById("evr");
    const grade = document.getElementById("grade");
    let sum = 0;



    for (let i = 0; i < score.length; i++) {
        if (isNaN(score[i].value)) {
            alert("숫자만 입력하세요")
            return;
        }
        if (score[i].value > 100) {
            alert("0~100 이내로만 입력하세요")
        } else {
            sum += Number(score[i].value);
        }
    }




    total.value = sum
    console.log(total.value);

    let avg = sum / score.length;
    evr.value = avg.toFixed(1);
    console.log(evr.value);

    if (evr.value >= 90) {
        grade.value = "A";
    } else if (evr.value >= 80) {
        grade.value = "B";
    } else if (evr.value >= 70) {
        grade.value = "C";
    } else {
        grade.value = "F"
    }

    console.log(grade.value);


}


let count = 0;
let random = Math.floor(Math.random() * 10) + 1;

//난수 맞추기
function fnRandom() {



    let anser = document.getElementById("anser");
    let hint = document.getElementById("hint");
    let totalCount = document.getElementById("count");

    // if (anser === null) {
    //     console.error("input 요소를 찾지 못했어요!");
    // } else {
    //     // anser.value 사용 가능
    //     console.log(anser.value);
    // }

    count++;
    totalCount.value = count;
    console.log(totalCount.value);

    if (Number(anser.value) == random) {
        alert("정답입니다");
        return;
    } else if (Number(anser.value) > random) {
        hint.innerHTML = `${anser.value}보다 낮습니다`;
    } else if (Number(anser.value) < random) {
        hint.value = `${anser.value}보다 높습니다`;
    }

    anser.value = "";



}

function inputEnter(event){
    if(event.key == "Enter") {
        fnRandom();
    }
}


//반복문 출력
function fnHelloJava() {
    const div = document.getElementById("div1");
    for (let i = 1; i <= 6; i++) {
        div.innerHTML += `<h${i}>Hello javaScrip</h{i}><br></br>`;
    }

    const div2 = document.getElementById("div2");
    for (let i = 1; i < 4; i++) {
        div.innerHTML += `<img src="/javascroptexample/image/다운로드${i}.jpg" alt=""><br></br>`;
    }


}