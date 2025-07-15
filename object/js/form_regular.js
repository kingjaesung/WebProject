document.getElementById("btn1").addEventListener("click", function () {
    const div1 = document.getElementById("div1");
    div1.innerHTML = "";
    // div1에 있던 모든 내용 지우는 역할


    // a (일반 문자열) : 문자열 내에 a라는 문자열이 존재하는 검색
    const regExmp1 = /a/;
    // /a/는 슬래시로 감싸면 정규 표현식 리터럴이 된다
    div1.innerHTML += `
/a/ , apple : ${regExmp1.test("apple")} <hr />
/a/ , price : ${regExmp1.test("price")} <hr />
`;

    let regExmp2 = /[abcd]/;
    div1.innerHTML += `
    /[abcd]/, apple : ${regExmp2.test("apple")} <hr>
    /[abcd]/, sub : ${regExmp2.test("sub")} <hr>
    /[abcd]/, qwert : ${regExmp2.test("qwert")} </hr>
`;

    regExmp2 = /[^abcd]/;
    div1.innerHTML += `/[^abcd] , html : ${regExmp2.test("html")}<hr/>`;

    //^(캐럿) : 문자열의 시작을 의미

    const regExmp3 = /^group/;
    div1.innerHTML += `
    /^group/, group100 : ${regExmp3.test("group100")}<hr / >
    /^group/, 100group : ${regExmp3.test("100group")} <hr / >

`;

    const regExmp4 = /group$/;
    div1.innerHTML += `
    /group$/, group100 : ${regExmp4.test("group100")}<hr / >
    /group$/, 100group : ${regExmp4.test("100group")} <hr / >    
    `;

})

document.getElementById("inputName").addEventListener("keyup", function () {
    const span = document.getElementById("inputNameResult");

    const regExp = /^[가-힣]{2,5}$/;

    //유효성 검사
    if (regExp.test(this.value)) {
        span.innerHTML = "유효한 양식입니다"
        span.style.backgroundColor = "green"
        span.style.fontWeight = "bold";
    } else {
        span.innerHTML = "양식이 잘못 되었습니다"
        span.style.backgroundColor = "red"
        span.style.fontWeight = "bold";
    }

    if (this.value.trim().length === 0) {
        span.innerHTML = "";
        return;
    }



}
);

document.getElementById("idCheck").addEventListener("click", function () {
    const mid = document.getElementById("mid");
    const span = document.getElementById("inputIdResult")
    alert("연결중")
    const pattern = new RegExp("^[a-zA-Z][0-9a-zA-Z]{5,8}$");
    console.log("test반환 값)" + pattern.test(mid.value));

    if (pattern.test(mid.value)) {
        span.innerHTML = "유효한 아이디 입니다"
    } else {
        span.innerHTML = "아이디는 5~8글자로 입력하시고 첫글자는 영문으로, 숫자와 영문만 기재 가능";
        mid.value = "";
    }

});

document.getElementById("mid").addEventListener("focus", (e) => {
    document.getElementById("inputIdResult").innerHTML = "";
});

document.getElementById("nameCheck").addEventListener("click", () =>{
    const userName = document.getElementById("userName");
    const span = document.getElementById("msg");

    if(userName.value.replace(/\s/g, "") === ""){
        span.innerHTML = "이름을 입력해주세요"
        span.style.backgroundColor = "red";
        userName.value = "";
    }else{
        span.innerHTML = "입력 완료";
        span.style.color = "green";
    }
});

document.getElementById("userName").addEventListener("focus", function(){
    document.getElementById('msg').innerHTML = "";
}); 

document.getElementById("pwdCheck").addEventListener("click",() =>{
    const regex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%?*&])[A-Za-z\d@$!%*?&]{6,10}$/

    const input = document.getElementById("userPwd");
    const message = document.getElementById("message");

      if (regex.test(input.value)) { 
        message.innerHTML = "유효한 비밀번호입니다"; 
    } else { 
        message.innerHTML = "유효하지 않은 비밀번호입니다"; 
    };
});


// 회원가입 예제

document.getElementById("sendBtn").addEventListener("click",() =>{

    console.log("연결 확인");

    const userName = document.getElementById("user_name");
    if(userName.value.replace(/\s/g,"") === ""){
        console.log("log")
        alert("이름입력하센");
        userName.focus();
        return;
    }

    const gender = document.getElementsByName("gender");

    if(!gender[0].checked && !gender[1].checked ){
        alert("성별을 선택해주세요")
        gender[0].focus();
        return;
    } 

    const job = document.getElementById("job")
    console.log(job.value);

    if(job.value === ""){
        alert("직업을 선택하세요");
        return;
    }

    const hobby = document.getElementsByName("hobby")

       for(let i = 0; i < hobby.length; i++){


        let chk = false
        if(hobby[i].checked){
            break;
            chk = true;
        }

        if(!chk){
            alert("취미선택 안하냐잉?")
            break;
        }
        
       }
    
    
})