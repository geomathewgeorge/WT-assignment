

let email = document.getElementById("email");
let error = document.getElementById("error");
var check = function () {
  if (document.getElementById('password').value ==
    document.getElementById('confirm_password').value) {
    document.getElementById('message').style.color = 'green';
    document.getElementById('message').innerHTML = 'matching';
  } else {
    document.getElementById('message').style.color = 'red';
    document.getElementById('message').innerHTML = 'Not matching';
  }
}


var validate = function () {
  let regexp = /^([A-Za-z0-9\.-]+)@([A-Za-z0-9\-]+).([a-z]{2,3})(.[a-z]{2,3})?$/;
  if (regexp.test(document.getElementById("email").value)) {
    document.getElementById("error").innerText = "Valid mail-id"
    document.getElementById("error").style.color = "green";

  }
  else {
    error.innerHTML = "Invalid mail-id";
    error.style.color = "red";
  }
}
var phone = function () {

  var mobile = document.getElementById('mobile');


  var mess = document.getElementById('mess');



  if (mobile.value.length != 10) {

    mess.innerHTML = "Should be 10 digit number!!";
    mess.style.color = "red";

  }
  else {
    mess.innerText = "Valid contact number "
    mess.style.color = "green"
  }
}
var name1 = function () {
  let regexp = /^[A-Za-z]+$/;
  if (regexp.test(document.getElementById('name').value)) {
    document.getElementById('error1').innerText = "valid";
    document.getElementById('error1').style.color = "green";
  }
  else {
    document.getElementById('error1').innerText = "Use Charcter Only!!";
    document.getElementById('error1').style.color = "red";
  }
}

function validation() {

  var user = document.getElementById('user').value;
  var empid = document.getElementById('empid').value;
  var pass = document.getElementById('pass').value;
  var confirmpass = document.getElementById('conpass').value;
  var mobileNumber = document.getElementById('mobileNumber').value;
  var emails = document.getElementById('emails').value;
  var place = document.getElementById('place').value;
  var addr = document.getElementById('addr').value;
  var dist = document.getElementById('dist').value;
  var state = document.getElementById('state').value;


  var flag = true;

  if (user == "") {
    document.getElementById('username').innerHTML = "Username can't be empty";
    flag = false;
  }
  if ((user.length <= 3) || (user.length > 15)) {
    document.getElementById('username').innerHTML = "Username must be between 3 and 15";
    flag = false;
  }
  if (!isNaN(user)) {
    document.getElementById('username').innerHTML = "only characters are allowed";
    flag = false;
  }



  if (empid == "") {
    document.getElementById('empids').innerHTML = "ID can't be empty";
    flag = false;
  }



  if (pass == "") {
    document.getElementById('passwords').innerHTML = "Please fill the password field";
    flag = false;
  }
  if ((pass.length <= 4) || (pass.length > 10)) {
    document.getElementById('passwords').innerHTML = "Passwords lenght must be between  4 and 10";
    flag = false;
  }


  if (pass != confirmpass) {
    document.getElementById('confrmpass').innerHTML = "Password does not match";
    flag = false;
  }



  if (confirmpass == "") {
    document.getElementById('confrmpass').innerHTML = "Please fill the confirmpassword field";
    flag = false;
  }




  if (mobileNumber == "") {
    document.getElementById('mobileno').innerHTML = "Please fill the mobile number field";
    flag = false;
  }

  if (isNaN(mobileNumber)) {
    document.getElementById('mobileno').innerHTML = "only digits";
    flag = false;
  }
  
  if (mobileNumber.length != 10) {
    document.getElementById('mobileno').innerHTML = "Mobile Number must be 10 digits only";
    flag = false;
  }



  if (emails == "") {
    document.getElementById('emailids').innerHTML = "Please fill the email id field";
    flag = false;
  }
  if (emails.indexOf('@') <= 0) {
    document.getElementById('emailids').innerHTML = " @ Missing";
    flag = false;
  }

  if ((emails.charAt(emails.length - 4) != '.') && (emails.charAt(emails.length - 3) != '.')) {
    document.getElementById('emailids').innerHTML = ". Missing";
    flag = false;
  }

  if (addr == "") {
    document.getElementById('address').innerHTML = "Address can't be empty";
    flag = false;
  }

  if (place == "") {
    document.getElementById('placedetails').innerHTML = "Place can't be empty";
    flag = false;
  }


  if (dist == "") {
    document.getElementById('district').innerHTML = "District can't be empty";
    flag = false;
  }

  if (state == "") {
    document.getElementById('states').innerHTML = "State can't be empty";
    flag = false;
  }

  return flag
}