//Remove Book
var bookToRemove;
var confirmationCode;

var libTechBookNum = [];
var libTechTitle = [];
var libTechAuthor = [];
var libTechType = [];
var libTechPubDate = [];
var bookStatus = [];

var index = 0;

//function runs when form is submitted
function removeBook(removeBookForm) {
    //get all the book info from local storage
    libTechBookNum = JSON.parse(localStorage.getItem("libTechBookNumKey"));
    libTechTitle = JSON.parse(localStorage.getItem("libTechTitleKey"));
    libTechAuthor = JSON.parse(localStorage.getItem("libTechAuthorKey"));
    libTechType = JSON.parse(localStorage.getItem("libTechTypeKey"));
    libTechPubDate = JSON.parse(localStorage.getItem("libTechPubDateKey"));
    bookStatus = JSON.parse(localStorage.getItem("bookStatusKey"));

    //get book number we need to remove
    bookToRemove = removeBookForm.bookNumL.value;
    index = libTechBookNum.indexOf(bookToRemove);

    //get confirmation code
    confirmationCode = removeBookForm.confirm.value;

    //check if the code (314159) is correct and then remove book
    if (confirmationCode === "314159") {
        //remove the book at the same index from all variables and then update the local storage
        libTechBookNum.splice(index, 1);
        localStorage.setItem("libTechBookNumKey", JSON.stringify(libTechBookNum));

        libTechTitle.splice(index, 1);
        localStorage.setItem("libTechTitleKey", JSON.stringify(libTechTitle));

        libTechAuthor.splice(index, 1);
        localStorage.setItem("libTechAuthorKey", JSON.stringify(libTechAuthor));

        libTechType.splice(index, 1);
        localStorage.setItem("libTechTypeKey", JSON.stringify(libTechType));

        libTechPubDate.splice(index, 1);
        localStorage.setItem("libTechPubDateKey", JSON.stringify(libTechPubDate));

        bookStatus.splice(index, 1);
        localStorage.setItem("bookStatusKey", JSON.stringify(bookStatus));

        alert("Book removed successfully!");
    } else {
        alert("The confirmation code is not correct, or the book you are trying to remove doesn't exist");
    }
}