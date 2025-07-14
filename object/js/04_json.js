const user = {
    name: "재성",
    email: "wkd6344@naver.com",
    phone: "010-4818-3909"
}

let userString = JSON.stringify(user);
console.log(typeof userString);
document.getElementById("string").innerHTML = userString;

let userJson = "";
console.log(typeof JSON.parse(userString));

JSON.parse(userString, function (key, value) {
    if (key != ""){
         userJson += key+" : "+value +"<br />";
    }
    
});
document.getElementById("json").innerHTML = userJson;