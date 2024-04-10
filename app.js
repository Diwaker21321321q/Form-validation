const form = document.getElementById("registration-form");
const registration = document.querySelector(".main-container");

var a;
function pass() {
  if (a == 1) {
    document.getElementById("password").type = "password";
    document.getElementById("eyeicon").src = "./eye-close.png";
    a = 0;
  } else {
    document.getElementById("password").type = "text";
    document.getElementById("eyeicon").src = "./eye-open.png";
    a = 1;
  }
}

// regex validation for username
const usernamevalidation = /^[A-Za-z]{2,12}$/;

// regex validation for password
const passwordvalidation = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;

//regex validation for Phone number
const phoneValidation = /^\d{10}$/;

//regex validation for Email
const emailValidation = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

form.addEventListener("submit", (e) => {
  // debugger;
  e.preventDefault();
  const firstname = document.getElementById("Firstname").value;
  const email = document.getElementById("email").value;
  let password = document.getElementById("password").value;
  const phone = document.getElementById("phone").value;
  const DateofBirth = document.getElementById("dateOfBirth").value;
  const Department = document.getElementById("department").value;

  if (firstname.length < 4 || firstname == "") {
    document.querySelector("#firstnameerror").innerText = "Incorrect FirstName";
  }

  if (password.length < 4 || password == "") {
    document.querySelector("#emailerror").innerText = "Invalid Email";
  }

  if (email.length < 4 || email == "") {
    document.querySelector("#passworderror").innerText =
      "Incorrect Password Typed";
  }

  if (phone.length < 11 || phone == "") {
    document.querySelector("#phoneerror").innerText = "Incorrect Phone Number";
  }

  if (Department == "") {
    document.querySelector("#department").classList.add("failed");
  }

  // debugger;
  let l = password.length;
  let star = "*";
  password = star.padStart(l - 4, "*") + password.slice(-4);
  console.log(password);

  // custom validation for empty fields
  const emptyFields = [
    firstname,
    email,
    password,
    phone,
    DateofBirth,
    Department,
  ].some((field) => field.trim() === "");
  if (emptyFields) {
    // change border color of empty fields
    const emptyFieldsArray = Array.from(
      document.querySelectorAll("input.empty")
    );
    emptyFieldsArray.forEach((field) => {
      if (field.value.trim() === "") {
        field.classList.add("failed");
      }
    });

    return;
  }

  //object
  const formData = {
    firstname,
    email,
    password,
    phone,
    DateofBirth,
    Department,
  };

  const stringData = JSON.stringify(formData);
  localStorage.setItem("formData", stringData);
  location.href = "direct.html";
  form.reset();
});

// code for Live regex Validation

//for name regex Validation
document.querySelector("#Firstname").addEventListener("keyup", (e) => {
  if (usernamevalidation.test(e.target.value)) {
    e.target.setAttribute("class", "success");
  } else {
    e.target.setAttribute("class", "failed");
  }
});

//for password regex Validation
document.getElementById("password").addEventListener("keyup", (e) => {
  if (passwordvalidation.test(e.target.value)) {
    e.target.setAttribute("class", "success");
  } else {
    e.target.setAttribute("class", "failed");
  }
});

//for PhoneNumber regex Validation
phone.addEventListener("keyup", (e) => {
  if (phoneValidation.test(e.target.value)) {
    phone.setAttribute("class", "success");
  } else {
    phone.setAttribute("class", "failed");
  }
});

//email regex validation
email.addEventListener("keyup", (e) => {
  if (emailValidation.test(e.target.value)) {
    email.setAttribute("class", "success");
  } else {
    email.setAttribute("class", "failed");
  }
});

// custom validations for all feilds

//for username
// document.getElementById("Firstname").addEventListener("keyup", (e) => {
//   function validateName(input) {
//     for (var i = 0; i < input.length; i++) {
//       if (!isNaN(parseInt(input[i]))) {
//         return false;
//       }
//     }
//     return true;
//   }
//   if (validateName(e.target.value)) {
//     document.querySelector("#firstnameerror").innerText = "";
//     e.target.setAttribute("class", "success");
//   } else {
//     document.querySelector("#firstnameerror").innerText =
//       "Incorrect: Name Cannot Contains Numbers or Empty";
//     e.target.setAttribute("class", "failed");
//   }
// });

// for password
// document.getElementById("password").addEventListener("keyup", (e) => {
//   function validatePassword(password) {
//     var specialChar = "!@#$&*";
//     var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
//     var numbers = "0123456789";

//     var isUppercase = false;
//     var isNumber = false;
//     var isSpecialChar = false;

//     for (var i = 0; i < password.length; i++) {
//       var char = password[i];
//       if (uppercase.includes(char)) {
//         isUppercase = true;
//       } else if (numbers.includes(char)) {
//         isNumber = true;
//       } else if (specialChar.includes(char)) {
//         isSpecialChar = true;
//       }
//     }

//     return isUppercase && isNumber && isSpecialChar;
//   }
//   if (validatePassword(e.target.value)) {
//     document.querySelector("#passworderror").innerText = "";
//     e.target.setAttribute("class", "success");
//   } else {
//     document.querySelector("#passworderror").innerText =
//       "Incorrect:Password Should be at least 8 characters";
//     e.target.setAttribute("class", "failed");
//   }
// });

// for phone number
// document.getElementById("phone").addEventListener("keyup", (e) => {
//   function validatePhoneNumber(phoneNumber) {
//     if (isNaN(Number(phoneNumber))) {
//       console.log("invalid phone number");
//       return false;
//     }

//     var numericPhoneNumber = "";
//     for (var i = 0; i < phoneNumber.length; i++) {
//       var charCode = phoneNumber.charCodeAt(i);
//       if (charCode >= 48 && charCode <= 57) {
//         numericPhoneNumber += phoneNumber[i];
//       }
//     }

//     if (numericPhoneNumber.length !== 10) {
//       return false;
//     }

//     return true;
//   }

//   if (validatePhoneNumber(e.target.value)) {
//     document.querySelector("#phoneerror").innerText = "";
//     e.target.setAttribute("class", "success");
//   } else {
//     document.querySelector("#phoneerror").innerText =
//       "Error: Please enter a valid 10-digit phone number";
//     e.target.setAttribute("class", "failed");
//   }
// });

//for email validation
// document.getElementById("email").addEventListener("keyup", (e) => {
//   function validateEmail(email) {
//     var atIndex = email.indexOf("@");
//     var dotIndex = email.lastIndexOf(".");
//     if (atIndex === -1 || dotIndex === -1) {
//       return false;
//     }

//     if (dotIndex <= atIndex) {
//       document.querySelector("#emailerror").innerText =
//         "Error: Please enter a valid email address";
//       return false;
//     }

//     return true;
//   }

//   var userEmail = "example@example.com";
//   if (validateEmail(e.target.value)) {
//     document.querySelector("#emailerror").innerText = "";
//     e.target.setAttribute("class", "success");
//   } else {
//     document.querySelector("#emailerror").innerText =
//       "Error: Please enter a valid email address";
//     e.target.setAttribute("class", "failed");
//   }
// });
