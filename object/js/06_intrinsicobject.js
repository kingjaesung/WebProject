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
    }, 3000);
    // 클릭되면 setTimeout함수 실행하여 3초(3000밀리초) 뒤에
    //내부 코드 실행
})

let time_id;
const startTime = function () {
    let now = new Date();
    // 지금 시각(날짜와 시간을 가져온다)
    document.querySelector("#result").value = now.toLocaleTimeString();
    /** → id가 "result"인 input(예: <input id="result">)에
지금 시각(예: 12:34:56)을 넣어준다.*/
    time_id = setTimeout(startTime, 1000);
    /**time_id = setTimeout(startTime, 1000);
→ 1초(1000밀리초) 후에 startTime 함수를 다시 실행한다.
(그래서 1초마다 계속 시간이 갱신됨) */

};

// 책 읽기 제목 클릭
document.getElementById("readBook").addEventListener("click", function(){
    const now = new Date();                // 현재 날짜와 시간
    const firstDay = new Date(2025, 4, 1); // 시작일 (5월 1일) 

    const toNow = now.getTime();        // 현재까지 지난 시간 (1970년 1월 1일부터)
    const toFirst = firstDay.getTime(); // 시작일까지 지난 시간
    let passedTime = toNow - toFirst;   // 두 날짜 차이 (밀리초 단위)
    console.log(passedTime);

	// 밀리초 → 일(day)로 변환. Math.floor를 사용하여 소수점 이하를 절삭(정수 일 수로 표현)
    passedTime = Math.floor(passedTime/(24 * 60 * 60 * 1000));  
    
    document.querySelector('#result1').innerText = passedTime;
});

document.getElementById("btn2").addEventListener("click", () => {
    startTime();
});


document.getElementById("btn3").addEventListener("click", () => {
    clearTimeout(time_id);
    document.querySelector("#result").value = "";
})

const image = document.querySelectorAll('.imageChoice');
const targetImg = document.getElementById('target');

image.forEach(thumb => {
    thumb.addEventListener("click", function () {
        const newSrc = this.getAttribute('src');
        targetImg.setAttribute('src', newSrc);
    });

});

let num = 0;

setInterval(function () {
    num = (num % 3) + 1;
    document.getElementById("imgView").src = "/javascroptexample/image/다운로드" + num + ".jpg"
}, 300);

document.getElementById("btn4").addEventListener("click", () => {
    if (confirm("정말 네이버로 이동하시겠습니까?")) {
        location.href = "https://www.naver.com/";
    }
});

document.getElementById("btn5").addEventListener("click", () => {
    location.href = "/object/html/01_json.html";
})

document.getElementById("btn6").addEventListener("click", () => {
    let value = "";
    for (let i = 0; i < 5; i++) {
        value += Math.floor(Math.random() * 10);
    }
    const result2 = document.getElementById("result2");
    result2.innerHTML = value;
    result2.style.color = "skyblue";
})