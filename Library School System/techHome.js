var techLoginNumber;
var techLoginPassword;

function getInformation() {
    //get the current logged in number and password
    techLoginNumber = localStorage.getItem("techLoginNumberKey");
    techLoginPassword = localStorage.getItem("techLoginPasswordKey");

    //update the textbox in HTML
    document.getElementById("techNumber").value = techLoginNumber;
    document.getElementById("techPassword").value = techLoginPassword;
}

//function to view password when hovered on button
function viewPasswordTrue() {
    document.getElementById("techPassword").type = "text";
}

//function to make password back to a password when mouse stops hovering
function viewPasswordFalse() {
    document.getElementById("techPassword").type = "password";
}