var bookNumLib = [];
var bookTitleLib = [];
var bookAuthorLib = [];
var bookTypeLib = [];
var bookDateLib = [];

var bookStatus = [];

var bookNumStud;
var bookTitleStud;
var bookAuthorStud;

var bookTypeStudF;
var bookTypeStudNF;
var bookTypeStudGN;

var bookDateStud;

function displayResults() {
    //Change all the strings back to arrays
    //retrieves the following details from the local storage
    bookNumLib = JSON.parse(localStorage.getItem("libTechBookNumKey"));
    bookTitleLib = JSON.parse(localStorage.getItem("libTechTitleKey"));
    bookAuthorLib = JSON.parse(localStorage.getItem("libTechAuthorKey"));
    bookTypeLib = JSON.parse(localStorage.getItem("libTechTypeKey"));
    bookDateLib = JSON.parse(localStorage.getItem("libTechPubDateKey"));
    bookStatus = JSON.parse(localStorage.getItem("bookStatusKey"));

    displayFinalResults();
}

function displayFinalResults() {
    //retrieves the following details from the local storage
    bookNumStud = localStorage.getItem("studBookNumKey");
    bookTitleStud = localStorage.getItem("studTitleKey");
    bookAuthorStud = localStorage.getItem("studAuthorKey");
    bookDateStud = localStorage.getItem("studPubDateKey");

    if (localStorage.getItem("studTypeFictionKey") === "true") {
        bookTypeStudF = "Fiction";
    }

    if (localStorage.getItem("studTypeNonFictionKey") === "true") {
        bookTypeStudNF = "Non Fiction";
    }

    if (localStorage.getItem("studTypeGraphicNovelKey") === "true") {
        bookTypeStudGN = "Graphic Novel";
    }

    matchCases();
}

//Holds the HTML details
var table = document.getElementById("tableResults");

//Check if there is a match for one case for each when they are arrays
function matchCases() {

    let resultHolder = 0;

    for (let i = 0; i < bookNumLib.length; i++) {
        //checks if the search element exists in the array and if it isnt left empty --> allows for more realistic search
        if (bookNumLib[i].includes(bookNumStud) && bookNumStud != "" || bookTitleLib[i].includes(bookTitleStud)  && bookTitleStud != "" 
        || bookAuthorLib[i].includes(bookAuthorStud)  && bookAuthorStud != "" || bookDateStud === bookDateLib[i] || 
        bookTypeStudF === bookTypeLib[i] || bookTypeStudNF === bookTypeLib[i] || bookTypeStudGN === bookTypeLib[i]) {
            updateHTML(i);
            resultHolder = 1;
        }
    }

    if (resultHolder === 0) {
        document.getElementById("noResults").innerHTML = "Sorry! No results found :(";
    }

}

//Update HTML elements to display the book details
function updateHTML(i) {
    var table = document.getElementById("tableResults");

    table.style.display = "block";

    //Creates a new row for each book matched
    var newRow = table.insertRow();

    //Insert cells into the new row
    var cell1 = newRow.insertCell();
    //Add book number to cell 1
    cell1.innerHTML = bookNumLib[i];

    var cell2 = newRow.insertCell();
    //Add book title to cell 2
    cell2.innerHTML = bookTitleLib[i];

    var cell3 = newRow.insertCell();
    //Add book author to cell 3
    cell3.innerHTML = bookAuthorLib[i];

    var cell4 = newRow.insertCell();
    //Add book type to cell 4
    cell4.innerHTML = bookTypeLib[i];

    var cell5 = newRow.insertCell();
    //Add pub date to cell 5
    cell5.innerHTML = bookDateLib[i];

    var cell6 = newRow.insertCell();
    //Add availablity to cell 6
    cell6.innerHTML = bookStatus[i];

    //if the status of the book is available, then it would be green text, otherwise it would be red
    if (bookStatus[i] === "Yes") {
        cell6.style.color = "green";
    } else {
        cell6.style.color = "red";
    }

    document.getElementById("noResults").innerHTML = "";
}