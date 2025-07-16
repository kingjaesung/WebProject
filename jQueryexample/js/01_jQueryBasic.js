// // 자바스크립트 
// document.querySelector("#jsBtn").addEventListener("click", function(){
//     this.style.backgroundColor = "black";
//     this.style.color = "yellow";
//     this.style.fontSize = "20px";
// });

// document.getElementById("colorChange").addEventListener("click", function(){
//     let wrapper = document.getElementById("wrapper"); //div태그
//     let ul = wrapper.getElementsByTagName("ul");//div하위 ul태그
//     let li = ul[0].getElementsByTagName("li");//ul하위 li태그

//     for(let i=0; i < li.length; i++){
//         let l = li[i];
//         if(l.className=="three"){// li태그의 클래스명
//             let txt = l.getElementsByTagName("span");
//             txt[0].style.color = "red";//span 태그의 글자색 변경
//         }
//     }
// });

// 제이쿼리

// jQuery
$("#jQueryBtn").on("click", function () {
    $(this).css("background-color", "black").css("color", "white").css("font-size", "20px");
    // $(tihs).css({
    //     "background-Color" :"black",
    //     "color" : "white",
    //     "fontSize": "20px"
    // }) 
});

$("#colorChange").on("click", function () {
    $("#wrapper > ul > li.three > span").css("color", "blue");
});

$("#hello").html("Hello jQuery").css({
    "color": "green",
    "font-size": "72px"
});

$("#btnChange").on("click", () => {
    $("#hello").html("오늘도 최선");
    $("#hello").html("읽어온 문자" + $("#hello").html());
})


$("#img").hover(
    function () {
        // 마우스 올렸을떄
        $(this).attr("src", "/jQueryexample/image/다운로드.jpg")
    },
    function () {
        $(this).attr("src", "/jQueryexample/image/다운로드 (2).jpg")
    }
)

$("#phone").on("keyup", function () {
    const regExp = /^01[016789]-\d{3,4}-\d{4}$/;

    if (regExp.test($("#phone").val() ) ){
        $("#phoneResult").text("유효한 전화번호 입니다").css("color","green");
    } else{
        $("#phoneResult").text("전화번호 형식이 유효하지 않습니다. (예: 010-1234-5678)");
        $("#phoneResult").css("color", "red");
    }

      if( $("#phone").val().length === 0){
        $("#phoneResult").text("");
    }
});

$("#singleButton").on("click", function() {
    $(this).html("오늘도 화이팅");
});

$(".multiButton").on("click", function(){
    let index = $(this).index();
    let result = index + "번째 요소를 클릭 했습니다";
    $(this).html(result);
})

let num = 1;
$("#treeImage").on("click", function(){
    num = (num % 6) +1;
    $(this).attr("src","/jQueryexample/image/tree-" + num + ".jpg");
})
















// //
// $("요소1").on("click", function(){
//   이벤트 내용~
// })


// $("요소").html("안녕") < 요소에 값 태그 포함 텍스트 값 넣어주기