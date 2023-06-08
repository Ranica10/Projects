//Add Book
var libTechBookNum = [];
var libTechTitle = [];
var libTechAuthor = [];
var libTechType = [];
var libTechPubDate = [];

var bookStatus = [];

var counter = 0;

//function runs onload
function getExistingBookDetails() {
    //checks if the array is empty or not
    if (JSON.parse(localStorage.getItem("libTechBookNumKey")) != null) {
        libTechBookNum = JSON.parse(localStorage.getItem("libTechBookNumKey"));
        libTechTitle = JSON.parse(localStorage.getItem("libTechTitleKey"));
        libTechAuthor = JSON.parse(localStorage.getItem("libTechAuthorKey"));
        libTechType = JSON.parse(localStorage.getItem("libTechTypeKey"));
        libTechPubDate = JSON.parse(localStorage.getItem("libTechPubDateKey"));
        bookStatus = JSON.parse(localStorage.getItem("bookStatusKey"));

        //sets counter to the length of the array which is the location of the next available index
        counter = libTechBookNum.length;
    }
}

//function runs when form is submitted
function addNewBook(addBookForm) {
    //save value inputed in form to variables in the array
    libTechBookNum[counter] = addBookForm.bookNumL.value;
    libTechTitle[counter] = addBookForm.titleL.value.toLowerCase();
    libTechAuthor[counter] = addBookForm.authorL.value.toLowerCase();
    libTechType[counter] = addBookForm.bookTypeL.value;
    libTechPubDate[counter] = addBookForm.pubDateL.value;
    bookStatus[counter] = "Yes";

    localStorage.setItem("libTechBookNumKey", JSON.stringify(libTechBookNum));
    localStorage.setItem("libTechTitleKey", JSON.stringify(libTechTitle));
    localStorage.setItem("libTechAuthorKey", JSON.stringify(libTechAuthor));
    localStorage.setItem("libTechTypeKey", JSON.stringify(libTechType));
    localStorage.setItem("libTechPubDateKey", JSON.stringify(libTechPubDate));
    localStorage.setItem("bookStatusKey", JSON.stringify(bookStatus));

    counter++;

    alert("Book added successfully!");
}