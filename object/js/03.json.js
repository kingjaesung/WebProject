const library = {
    books: [
        {
            "title": "자바스크립트 입문",
            "author": "홍길동",
            "year": 2021
        },
        {
            "title": "HTML/CSS/JavaScript",
            "author": "김철수",
            "year": 2020
        },
        {
            "title": "오라클",
            "author": "이영희",
            "year": 2022
        }
    ]
}

const readerTable = function () {
    const tableBody = document.querySelector("table tbody");
    tableBody.innerHTML = "";

    library.books.forEach(book => {
        let row = `
        <tr>
            <td>${book.title}</td>
            <td>${book.author}</td>
            <td>${book.year}</td>
        </tr>        
        `
        tableBody.innerHTML += row;
    });
};

function addBook() {
    
    const bookTitle = document.getElementById("title");
    const bookAuthor = document.getElementById("author");
    const bookYear = document.getElementById("year");

    const title = bookTitle.value;
    const author = bookAuthor.value;
    const year = Number(bookYear.value);

    if (!title || !author || isNaN(year)) {
        alert("제목, 글쓴이, 출간년도를 전부 입력 하셔야 합니다")
        return;
    }

    library.books.push(
        {
            "title": title,
            "author": author,
            "year": year,
        }
    );
    bookTitle.value = "";
    bookAuthor.value = "";
    bookYear.value = "";

    readerTable();


};
document.getElementById("title").addEventListener("keydown", handleEnter);
document.getElementById("author").addEventListener("keydown", handleEnter);
document.getElementById("year").addEventListener("keydown", handleEnter);

function handleEnter(e) {
    if (e.key === "Enter") {
        addBook();
    }
}

readerTable();