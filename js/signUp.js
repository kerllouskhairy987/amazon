let userReg = document.querySelector("input[name='username']")
let emailReg = document.querySelector("input[name='email']")
let passReg = document.getElementById("password");
let passConReg = document.getElementById("passwordCon");

// Show Password
document.getElementById("passCheck").addEventListener("change", function () {
    showPassword(this, passReg, "show-pass");
});

// Show Confirm Password
document.getElementById("passCheckCon").addEventListener("change", function () {
    showPassword(this, passConReg, "show-pass-con");
});

// This Function Convert The Type Of Input Password From Password To Text When Choose Converting
function showPassword(checkBox, arg1, arg2){
    if (checkBox.checked) {
        arg1.type = "text";
        document.querySelector(`.${arg2} span i`).classList.replace("fa-eye", "fa-eye-slash");
    } else {
        arg1.type = "password";
        document.querySelector(`.${arg2} span i`).classList.replace("fa-eye-slash", "fa-eye");
    }
}

// Username Validation Form On Keyup For [input ==> username]
let userLabel = document.querySelector("label[for='username']")
let notvalidUser = document.getElementById("notvalidUser");
userReg.addEventListener("keyup", function () {
    ckeckUsername();
    userLabel.appendChild(notvalidUser);
})

// Email Validation Form On Keyup For [input ==> email]
let emailRegValidationMsg = document.getElementById("notvalidEmail");
emailReg.addEventListener("keyup", function () {
    checkEmail();
})

// Password Validation Form On Keyup For [input ==> password]
let passRegValidationMsg = document.getElementById("notvalidPass");
passReg.addEventListener("keyup", function () {
    checkPassword();
});

// Confirm Password Validation Form On Keyup For [input ==> password confirm]
let passConRegValidationMsg = document.getElementById("notvalidPassCon");
passConReg.addEventListener("keyup", function () {
    checkRepeatPass();
});

/*
    -- [1] Stop The Default For Submit
    -- [2] Run THe Function For Check The Username
    -- [3] Run The Function For Check The Email
    -- [4] Run The Function For Check The Password
    -- [5] Check For The Confirm Password
    -- [6] Save The Sign In LocalStorage
    -- [7] Clear Data From Input Field After Sign
    -- [8] Move Me To Signin Page
*/
document.forms[0].onsubmit = function (e) {
    e.preventDefault();
    ckeckUsername();
    checkEmail();
    checkPassword();
    checkPassword();
    checkRepeatPass();

    if (userRegValidation === true && !userReg.value.includes(" ") && emailRegValidation === true && passRegValidation === true && passRegValidation !== " " && passReg.value === passConReg.value && passConReg.value !== "") {
        window.localStorage.setItem(`${userReg.value}`, `${userReg.value}`);
        window.localStorage.setItem(`${emailReg.value}`, `${emailReg.value}`);
        window.localStorage.setItem(`${passReg.value}`, `${passReg.value}`);
        // Clear Data After SignUp
        userReg.value = "";
        emailReg.value = "";
        passReg.value = "";
        passConReg.value = "";
        // Move To Signin Page After 1500 ms
        window.setTimeout(function () {
            window.location.href = "../signin.html";
        }, 1500);
    }
}

/*
    -- Function For Username Validation Form 
    -- [1] Must More Than 8 char 
    -- [2] Do Not Includes Space
*/
let userRegValidation ;
function ckeckUsername() {
    let userRegValue = userReg.value;
    let userRegPattern = /\w{8}/ig;
    userRegValidation = userRegPattern.test(userRegValue);

    if (userRegValidation === false || userReg.value === " ") {
        notvalidUser.innerHTML = "More Than 8 Char and Do not include space";
        userReg.style.cssText = "color: red; border: 2px solid red;"
        notvalidUser.style.cssText = "color: red;"
    } else {
        userReg.style.cssText = "color: green; border: 2px solid green;"
        notvalidUser.innerHTML = "A Valid Username";
        notvalidUser.style.cssText = "color: green;"
    }
}

/*
    -- Function For Email Validation Form 
    -- Regular Expersion (example80@gmail.com) 
    -- Not Must Be (.com) It May Be (.org || .com || .info ...)
*/
let emailRegValidation;
function checkEmail() {
    let emailRegValue = emailReg.value;
    let emailRegPattern = /\w+\@\w+\.\w+/ig;
    emailRegValidation = emailRegPattern.test(emailRegValue);

    if (emailRegValidation === true && !emailRegValue.includes(" ")) {
        emailReg.style.cssText = "color: green; border: 2px solid green;"
        emailRegValidationMsg.innerHTML = "A Valid Email";
        emailRegValidationMsg.style.cssText = "color: green;";
    } else {
        emailReg.style.cssText = "color: red; border: 2px solid red;"
        emailRegValidationMsg.innerHTML = "Must include @ and Do not include space";
        emailRegValidationMsg.style.cssText = "color: red;";
    }
}

/*
    -- Function For Password Validation Form 
    -- Regular Expersion (Example!123) 
    -- Must Includes Capital Letter && Small Letter && Specail Character && Numbers && Between 8 TO 16 character
*/
let passRegValidation;
function checkPassword() {
    let passRegValue = passReg.value;
    let passRegPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,16}$/ig;
    passRegValidation = passRegPattern.test(passRegValue);

    if (passRegValidation === true && passRegValidation !== " ") {
        passReg.style.cssText = "color: green; border: 2px solid green;";
        passRegValidationMsg.style.cssText = "color: green;";
        passRegValidationMsg.innerHTML = "A Valid Password";
    } else {
        passReg.style.cssText = "color: red; border: 2px solid red;";
        passRegValidationMsg.style.cssText = "color: red;";
        passRegValidationMsg.innerHTML = "Capital&Small&Spetail Char&Number";
    }
}

/*
    -- Function For Confirm Password Validation Form 
    -- Regular Expersion (Example!123) 
    -- Must Includes Capital Letter && Small Letter && Specail Character && Numbers && Between 8 TO 16 character
*/
function checkRepeatPass() {
    if (passReg.value === passConReg.value && passConReg.value !== "") {
        passConReg.style.cssText = "color: green; border: 2px solid green;";
        notvalidPassCon.style.cssText = "color: green;";
        passConRegValidationMsg.innerHTML = `Password Reapeated Coractly`
    } else {
        passConReg.style.cssText = "color: red; border: 2px solid red;";
        notvalidPassCon.style.cssText = "color: red;";
        passConRegValidationMsg.innerHTML = `Must Reapeat Your Password`
    }
}

// 3D Direction we Used It In [Icons && Login Button]
VanillaTilt.init(document.querySelectorAll(".your-element"), {
    max: 25,
    speed: 400
});