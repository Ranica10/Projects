//Login if the correct student number is entered in
var studNumbers = ["712954", "845222"];

function studLogin(studSearchForm) {
    //checks if the entered number matches any in the array of all the student numbers
    if (studNumbers.includes(studSearchForm.studNumber.value)) {
        //opens the search page
        window.location.href = "studentSearch.html";
    } else {
        alert("Student number not found!");
    }
}