
  // Get input boxes
  let name = document.getElementById("name");
  let email = document.getElementById("email");
  let password = document.getElementById("password");
  let submit = document.getElementById("submit");

  // Get error message areas
  let name_error = document.getElementById("name_error");
  let email_error = document.getElementById("email_error");
  let password_error = document.getElementById("password_error");

  // When user clicks submit button
  submit.addEventListener("click", function () {
    // Assume form is valid first
    let isValid = true;

    // Check Name
    if (name.value === "") {
      name_error.textContent = "Please enter your name";
      name_error.style.color = "red";
      isValid = false;
    } else {
      name_error.textContent = "";
    }

    // Check Email
    if (email.value === "") {
      email_error.textContent = "Please enter your email";
      email_error.style.color = "red";
      isValid = false;
    } else {
      email_error.textContent = "";
    }

    // Check Password
    if (password.value === "") {
      password_error.textContent = "Please enter your password";
      password_error.style.color = "red";
      isValid = false;
    } else {
      password_error.textContent = "";
    }

    // If all inputs are valid
    if (isValid) {
      alert("Form submitted successfully!");
    }
  });

