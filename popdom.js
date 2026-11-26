
var first = document.getElementById("one")
var second = document.getElementById("two")
var third = document.getElementById("three")
function pop() {
    document.getElementById("popup").style.display = "block";
}
function submitform() {
    var name = document.getElementById("name").value
    var date = document.getElementById("dob").value
    var gender = document.querySelector('input[name="gender"]:checked').value;
    var mobile = document.getElementById("mobile").value
    var email = document.getElementById("email").value
    document.getElementById("details").innerHTML =
        "Name: " + name + "<br>" +
        "Date of Birth: " + date + "<br>" +
        "Gender: " + gender + "<br>" +
        "Mobile Number: " + mobile + "<br>" +
        "Email: " + email;
    document.getElementById("popup").style.display = "none";
}



