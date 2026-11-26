
var first = document.getElementById("one")
var second = document.getElementById("two")
var third = document.getElementById("three")
function pop() {
    var popd = document.createElement("div");
    popd.id = "popup";
    popd.innerHTML =
        "<h1>Enter your details</h1><br><br>" +
        "Name:<input type='text' id='name' placeholder='Enter your name' ><br><br>" +
        "Date of birth:<input type='date' id='dob'><br><br>" +
        "Gender:" +
        " <input type='radio' name='gender' value='male'>Male" +
        "<input type='radio' name='gender' value='female'>Female<br><br>" +
        "Mobile number: <input type='number' id='mobile' placeholder='Enter your mobile number'><br><br>" +
        "Email id:<input type='email' id='email' placeholder='Enter your email id'><br><br>";

    var btn = document.createElement("button");
    btn.textContent = "submit";
    btn.onclick = submitform;
    popd.appendChild(btn);
    document.getElementById("popup-area").appendChild(popd);
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
    document.getElementById("popup").remove();
}



