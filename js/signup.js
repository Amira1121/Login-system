var username = document.getElementById("name");
var email = document.getElementById("email");
var pass = document.getElementById("pass");
var signupBtn = document.getElementById("signupBtn");
var allUsersData = getUserData(); 

signupBtn.addEventListener("click", function () {
  var userData = {
    name: username.value,
    email: email.value,
    pass: pass.value,
  };
  var warningDiv = document.getElementById("warningDiv");
  var successfulDiv = document.getElementById("successfulDiv");
  if (validateInput()) {
    saveUserData(userData); // Also defined in storage.js
    warningDiv.classList.add("d-none");
    successfulDiv.classList.remove("d-none");
    window.location.href = "index.html";
      return; 
  } else {
    successfulDiv.classList.add("d-none");
    warningDiv.classList.remove("d-none");
  }
});

function validateUsername() {
  var reg = /^[A-Z][a-z]+\s[A-Z][a-z]+$/;
  return reg.test(username.value);
}

function validateEmail() {
  var reg = /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/;
  return reg.test(email.value);
}

function validatePass() {
  var reg = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/;
  return reg.test(pass.value);
}

function validateInput() {
  var validinput = validateEmail() && validateUsername() && validatePass();
  return validinput;
}


// signupBtn.addEventListener('submit', function(event) {
//   event.preventDefault(); // منع إعادة تحميل الصفحة

//   // هنا يمكنك إضافة الكود لإرسال بيانات النموذج إلى الخادم ومعالجة الاستجابة

//   // بعد إتمام عملية التسجيل بنجاح، قم بإعادة توجيه المستخدم إلى صفحة تسجيل الدخول
//   window.location.href = '../index.html';
// });



// signupBtn.addEventListener("click", function () {
//   for (var i = 0; i < allUsersData.length; i++) {
//     if (
//       allUsersData[i].username == username.value &&
//       allUsersData[i].email == email.value &&
//       allUsersData[i].pass == pass.value
//     ) {
      
//       window.location.href = "index.html";
//       return; 
//     } else {
//       document.getElementById("successfulDiv").classList.remove("d-none");
//     }
//   }
  
// });