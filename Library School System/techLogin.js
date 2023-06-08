//Login if the correct user id is entered in
var techNumbers = ["712954", "845222"];
var techPasswords = ["314159", "011235"];

var index = 0;

var techLoginNumber;
var techLoginPassword;

function techLogin(techSearchForm) {
    techLoginNumber = techSearchForm.techNumber.value;
    techLoginPassword = techSearchForm.techPassword.value;

    localStorage.setItem("techLoginNumberKey", techLoginNumber);
    localStorage.setItem("techLoginPasswordKey", techLoginPassword);

    //checks if the entered number matches any in the array of all the student numbers
    if (techNumbers.includes(techLoginNumber)) {
        //opens the search page
        index = techNumbers.indexOf(techLoginNumber);
        //check if the user name matches with the password
        if (techPasswords[index] === techLoginPassword) {
            //opens the tech home page if it does
            window.location.href = "techHome.html";
        } else {
            alert("User ID not found or incorrect password!");
        }
    } else {
        alert("User ID not found or incorrect password!");
    }
}