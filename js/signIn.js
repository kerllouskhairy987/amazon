let userIn = document.querySelector("input[name='username']")
let emailIn = document.querySelector("input[name='email']")
let passIn = document.getElementById("password");

document.getElementById("passCheck").addEventListener("change", function () {
    if (this.checked) {
        passIn.type = "text";
        document.querySelector(".show-pass span i").classList.replace("fa-eye", "fa-eye-slash")
    } else {
        passIn.type = "password";
        document.querySelector(".show-pass span i").classList.replace("fa-eye-slash", "fa-eye")
    }
});

// Validation Form
let userLabel = document.getElementById("userLabel");
let userInValidationMsg = document.getElementById("notvaliduser");

// Check That Username Is Exist In Our DataBase Or Not
userIn.addEventListener("keyup", function userValidFun() {
    checkUsername();
    userLabel.appendChild(userInValidationMsg);
})

let passInValidationMsg = document.getElementById("notvalidpass");
/*
    -- [1] Check That Password Is Related To That Username
    -- [2] Check That Password Is Exist In Our DataBase
*/  
passIn.addEventListener("keyup", function emailValidFun() {
    checkPassword();
})

/*
    -- [1] stop The Default For Submit
    -- [2] Run The Function Of Username Validation
    -- [3] Run The Function Of Password Validation
    -- [4] Check If This Username && Password Are Exist In OUr DataBase
    -- [5] If The Data Are In Our DataBase Move Me To INdex Page
    -- [6] Clear The Data From Input Field After Sign
*/
document.forms[0].onsubmit = function (e) {
    e.preventDefault();
    checkUsername();
    checkPassword();

    if (localStorage.getItem(`${userIn.value}`) === userIn.value && localStorage.getItem(`${passIn.value}`) === passIn.value) {
        setTimeout(function () {
            window.location.href = "../index.html";
        }, 1500)
    }

    // Clear Data After Sign
    userIn.value = "";
    passIn.value = "";
}

// [1] This Function Check If The Username Is Exist In OUr DataBase 
function checkUsername() {
    if (localStorage.getItem(`${userIn.value}`) !== `${userIn.value}`) {
        userInValidationMsg.innerHTML = "This user is not exist";
        userIn.style.cssText = "color: red; border: 2px solid red;"
        userInValidationMsg.style.cssText = "color: red;"
    } else {
        userIn.style.cssText = "color: green; border: 2px solid green;"
        userInValidationMsg.innerHTML = "Exist user";
        userInValidationMsg.style.cssText = "color: green;"
    }
}

// [1] This Function Check If The Password Is Related To The Username && Exist In OUr DataBase 
function checkPassword() {
    if (localStorage.getItem(`${passIn.value}`) === `${passIn.value}`) {
        passIn.style.cssText = "color: green; border: 2px solid green;"
        passInValidationMsg.innerHTML = "A Valid Password";
        passInValidationMsg.style.cssText = "color: green;";
    } else {
        passIn.style.cssText = "color: red; border: 2px solid red;"
        passInValidationMsg.innerHTML = "This password is not exist";
        passInValidationMsg.style.cssText = "color: red;";
    }
}

// 3D Direction we Used It In [Icons && Login Button]
VanillaTilt.init(document.querySelectorAll(".your-element"), {
    max: 25,
    speed: 400
});