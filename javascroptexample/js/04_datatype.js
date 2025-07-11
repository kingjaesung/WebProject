
// 1. 변수를 중복 정의할 수 있다
var number = 10;
var number = "자바스크립트";
console.log(number);
console.log("-----------")

//2-1 변수가 사용된 후 선언되었을 떄
console.log(number1); // 호이스팅 발생: 선언은 위로 끌어올려지지만 값은 할당 x
var number1 = 30;
console.log(number1);
console.log("----------");

//2-2 선언보다 먼저 값을 할당해도 에러 없음(호이스팅 영향)
number2 = 40;
var number2;
console.log(number2);
console.log("---------------");

//3. for문 초기화식에서 var 변수 사용
console.log(i);
for (var i = 0; i<3 ; i++){
    console.log("Test i = " + i);
}
i = 0;
console.log("-----------");

//4. 변수 재사용
var i;
console.log(i);
for (i = 0; i<3; i++){
    console.log("Test+_1 i" + i);
}
console.log("-----------");

// 5.조건문
console.log (num)
if(num !== 10){
    var num = 20;
    console.log("num !== 10");
} else{
    console.log("num=" + num);
}
console.log("num =" + num);
console.log("-----------------")