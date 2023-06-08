// Check out a book
var bookStatus = [];
var bookNum = [];

var checkedOutBookNum;
var userId;

var index = 0;

function checkOutBook(checkOutBookForm) {
    bookStatus = JSON.parse(localStorage.getItem("bookStatusKey"));
    bookNum = JSON.parse(localStorage.getItem("libTechBookNumKey"));

    //take the value of the checked out book number from the form
    checkedOutBookNum = checkOutBookForm.bookOut.value;

    //get which index the booknumber is located at
    index = bookNum.indexOf(checkedOutBookNum);

    if (index != -1) {
        if (bookStatus[index] === "Yes") {
            bookStatus[index] = "No";
            //change localstorage bookstatus to no
            localStorage.setItem("bookStatusKey", JSON.stringify(bookStatus));
            alert("Book checked out successfully!");
        } else {
            alert("Sorry, this book is already checked out!");
        }
    }
}