var studBookNum;
var studTitle;
var studAuthor;

var studBookTypeFiction;
var studBookTypeNonFiction;
var studBookTypeGraphicNovel;

var studPubDate;

//function runs when form is submitted
function getStudentSearchData(searchBookForm) {
    //save value inputed in form to variables
    studBookNum = searchBookForm.bookNumS.value;
    //save variable value to local storage
    localStorage.setItem("studBookNumKey", studBookNum);

    studTitle = searchBookForm.titleS.value;
    localStorage.setItem("studTitleKey", studTitle.toLowerCase());

    studAuthor = searchBookForm.authorS.value;
    localStorage.setItem("studAuthorKey", studAuthor.toLowerCase());

    studBookTypeFiction = searchBookForm.bookTypeSFiction.checked;
    localStorage.setItem("studTypeFictionKey", studBookTypeFiction);

    studBookTypeNonFiction = searchBookForm.bookTypeSNonFiction.checked;
    localStorage.setItem("studTypeNonFictionKey", studBookTypeNonFiction);

    studBookTypeGraphicNovel = searchBookForm.bookTypeSGraphicNovel.checked;
    localStorage.setItem("studTypeGraphicNovelKey", studBookTypeGraphicNovel);

    studPubDate = searchBookForm.pubDateS.value;
    localStorage.setItem("studPubDateKey", studPubDate);
}