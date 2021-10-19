function validateForm() {
  let email_ref = document.getElementsByName("email").value;
  //alert(email_ref);
  if (email_ref == "") {
    document.getElementById("message").innerHTML = "Please Enter Email id";
    return false;
  }

  let user_password = document.getElementById("password").value;
  if (user_password == "") {
    document.getElementById("passwordMessage").innerHTML =
      "Password is required filed";
    return false;
  }
}
