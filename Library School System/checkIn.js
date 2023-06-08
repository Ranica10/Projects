// Check in a book
var bookStatus = [];
var bookNum = [];

var checkedOutBookNum;

var index = 0;

function checkInBook(checkInBookForm) {
    //retrieves the following details from the local storage
    bookStatus = JSON.parse(localStorage.getItem("bookStatusKey"));
    bookNum = JSON.parse(localStorage.getItem("libTechBookNumKey"));

    checkedOutBookNum = checkInBookForm.bookIn.value;

    //sets the variable index the index of the book number that a student wants to sign out
    index = bookNum.indexOf(checkedOutBookNum);

    //check if the book is already checked in or not using the index of the previous number
    if (bookStatus[index] != "Yes") {
        bookStatus[index] = "Yes";
        //change localstorage bookstatus to yes
        localStorage.setItem("bookStatusKey", JSON.stringify(bookStatus));
        alert("Book checked in successfully!");
    } else {
        alert("Book is already checked in!");
    }
}