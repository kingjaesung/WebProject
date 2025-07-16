const createNode = function(){
    const newItem = document.createElement("li"); // <;o> 요소 생성
    const subject = document.getElementById("subject");

    const newText = document.createTextNode(subject.value); // 입력값으로 텍스트 노드생성
    newItem.appendChild(newText); // <li>에 텍스트 붙임

    const itemList = document.getElementById("iteamList");
    itemList.appendChild(newItem);// 리스트에 <li> 붙임

    subject.value = ""; // 입력창 초기화

    let items = document.querySelectorAll("li");
    items.forEach(item => {
        item.addEventListener("click", () =>{
            if(item.parentNode){
                item.parentNode.removeChild(item);
            }
        })
    })
}

document.getElementById("createBtn").addEventListener("click", createNode);
