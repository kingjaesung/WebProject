document.getElementById("formInput1").addEventListener("keydown", (e) => {
    const form1 = document.getElementById("form1");
    if (e.key == "Enter") {
        form1.innerHTML = e.target.value;
        e.target.value = "";

        e.target.focus();


    }
})

document.getElementById("outputButton").addEventListener("click", () => {
    const form2 = document.getElementById("form2");
    const formWidth = document.getElementById("width");
    const formHeight = document.getElementById("height");
    const color = document.getElementById("color");
    const font = document.getElementById("font");

    font.style.backgroundColor = "blue";
    form2.style.width = `${formWidth.value}px`;
    form2.style.height = formHeight.value + "px";
    form2.style.backgroundColor = color.value;
    form2.innerHTML = font.value;

    form2.style.display = "flex";
    form2.style.justifyContent = "center";
    form2.style.textAlign = "center";
    form2.style.alignItems = "center";
    console.log(num.toLocaleString());
});

const num = 123456789;

const book = [{
    "책 제목": "멀티미디어 배움터 2.0",
    "가격": "25000"
},
{
    "책 제목": "모바일 멀티미디어",
    "가격": "27000"
},
{
    "책 제목": "자바입문: 이론과 실습",
    "가격": "25000"
}
]

// 수정중인 로직
function addPrice1() {

    let prices = [25000,27000,25000];

    for (let i = 1 ; i <= prices.length; i++){

    }

    let book1Count = Number(document.getElementById("book1Count").value);
    let book2Count = Number(document.getElementById("book2Count").value);
    let book3Count = Number(document.getElementById("book3Count").value);

    let book1Total = document.getElementById("book1Total");
    let book2Total = document.getElementById("book2Total");
    let book3Total = document.getElementById("book3Total");

    book1Total.value = Number(book[0]["가격"]) * book1Count; 
    book2Total.value = Number(book[1]["가격"]) * book2Count;
    book3Total.value = Number(book[2]["가격"]) * book3Count;



}


// 내가 쓴 로직
function addPrice2() {
    const num1 = 25000;
    const num2 = 27000;
    let book1Count = Number(document.getElementById("book1Count").value);
    let book2Count = Number(document.getElementById("book2Count").value);
    let book3Count = Number(document.getElementById("book3Count").value);

    let book1Total = document.getElementById("book1Total");
    let book2Total = document.getElementById("book2Total");
    let book3Total = document.getElementById("book3Total");


    book1Total.value = num1 * book1Count;
    book2Total.value = num2 * book2Count;
    book3Total.value = num1 * book3Count;

    let sum = 0;
    let sumPrice = 0;

    sum = book1Count + book2Count + book3Count;
    sumPrice = Number(book1Total.value) + Number(book2Total.value) + Number(book3Total.value);

    let totalBookCount = document.getElementById("totalBookCount");
    let bookTotal = document.getElementById("bookTotal");

    totalBookCount.value = sum;
    bookTotal.value = sumPrice;



}

document.getElementById("book1Count").addEventListener("input", addPrice2);
document.getElementById("book2Count").addEventListener("input", addPrice2);
document.getElementById("book3Count").addEventListener("input", addPrice2);

// 개선 로직
/**function addPrice2() {
  const prices = [25000, 27000, 25000];

  let totalCount = 0;
  let totalPrice = 0;

  for (let i = 0; i < prices.length; i++) {
    const count = Number(document.getElementById(`book${i + 1}Count`).value);
    const total = count * prices[i];
    document.getElementById(`book${i + 1}Total`).value = total;

    totalCount += count;
    totalPrice += total;
  }

  document.getElementById("totalBookCount").value = totalCount;
  document.getElementById("bookTotal").value = totalPrice;
}

// 이벤트 등록도 반복문으로!
const prices = [25000, 27000, 25000];
for (let i = 0; i < prices.length; i++) {
  document.getElementById(`book${i + 1}Count`).addEventListener("input", addPrice2);
} */