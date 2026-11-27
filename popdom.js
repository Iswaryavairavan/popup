
var first = document.getElementById("one")
var second = document.getElementById("two")
var third = document.getElementById("three")
function pop() {
    document.getElementById("welcome").style.display = "none";
    document.getElementById("table").style.display="none";
    document.getElementById("record").style.display="none";
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
    var genderEl = document.querySelector('input[name="gender"]:checked');
    var mobile = document.getElementById("mobile").value
    var email = document.getElementById("email").value

    if (!name) {
        alert("Please enter the name");
        return;
    }
    if (!date) {
        alert("Please select the date ");
        return;
    }
    if (!genderEl) {
        alert("Please select a gender");
        return;
    }
    if (!mobile) {
        alert("Please enter the mobile number ");
        return;
    }
    if (!email) {
        alert("Please enter the emailid ");
        return;
    }
    document.getElementById("details").innerHTML =
        "<table>" +
        "<tr>" +
        "<th>Name</th>" +
        "<th>Date of birth</th>" +
        "<th>Gender</th>" +
        "<th>Mobile Number</th>" +
        "<th>Email Id</th>" +
        "</tr>" +
        "<tr>" +
        "<td>" + name + "</td>" +
        "<td>" + date + "</td>" +
        "<td>" + genderEl.value + "</td>" +
        "<td>" + mobile + "</td>" +
        "<td>" + email + "</td>" +
        "</tr>" +
        "</table>";
    document.getElementById("popup").remove();
    document.getElementById("welcome").style.display = "block";
    document.getElementById("table").style.display="block";
    document.getElementById("record").style.display="none";
}



