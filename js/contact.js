let user = document.querySelector("#user");
let phone = document.querySelector("#phone");
let textArea = document.querySelector("#textArea");
let bolks = document.querySelector("#bolks");

let userPara = document.querySelector("#userPara")
let phonePara = document.querySelector("#phonePara")
let textAreaPara = document.querySelector("#textAreaPara")

let charTextArea = document.querySelector("#charTextArea");
let attr = document.createAttribute("maxlength");

// [1] - User Validation 
user.oninput = function () {
    checkUsername();
}

// [2] - Phone Validation 
phone.oninput = function () {
    checkPhone();
}

// Check Text Area Validation ==> You Must Say Anything
textArea.oninput = function () {
    checkTextarea();
}

/*
    -- Run The Function For Validation Username Field
    -- Run The Function For Validation Phone Field
    -- Run The Function For Validation Taxtarea Field
    -- Check The Pattern IF Is False Return False To Do Not Send The Data
*/
document.forms[0].onsubmit = function () {
    checkUsername();
    checkPhone();
    checkTextarea();
    if (ValidationUser === false || ValidationPhone === false || textArea.value === "") {
        return false
    }
}

/*
    -- Check The Value Must Be More Than and Equal Four Character
    -- Validation Input Field
*/
let ValidationUser;
function checkUsername(){
    let valueUser = user.value;
    let patternUser = /\w{4}/ig;
    ValidationUser = patternUser.test(valueUser);

    if (ValidationUser === false) {
        user.style.cssText = "border: 2px solid red";
        userPara.style.cssText = "color: red";
        userPara.innerHTML = `Enter A Valid Username`
    } else {
        user.style.cssText = "border: 2px solid green";
        userPara.style.cssText = "color: green";
        userPara.innerHTML = `This is A Valid Username`
    }
}

let ValidationPhone;
function checkPhone(){
    let valuePhone = phone.value;
    let patternPhone = /^\+\d{2}\s\d{10}$/ig; // +20 1032910697
    ValidationPhone = patternPhone.test(valuePhone);

    if (ValidationPhone === false) {
        phone.style.cssText = "border: 2px solid red";
        phonePara.style.cssText = "color: red";
        phonePara.innerHTML = `Enter A Valid phone`
    } else {
        phone.style.cssText = "border: 2px solid green";
        phonePara.style.cssText = "color: green";
        phonePara.innerHTML = `This is A Valid Phone`
    }
}
/*
    -- Check The Number Of Words Must Less Than 1000 Character
    -- Validation Input
*/
function checkTextarea() {
    // For Counter OF Char
    let numChar = textArea.value.length;
    charTextArea.innerHTML = numChar;
    attr.value = 1000;
    textArea.setAttributeNode(attr);
    // For Validation
    if (textArea.value === "") {
        textArea.style.cssText = "border: 2px solid red";
        textAreaPara.style.color = "red";
        textAreaPara.innerHTML = `You Must Say Anything`;
        bolks.style.backgroundColor = "red";
    } else {
        textArea.style.cssText = "border: 2px solid green";
        textAreaPara.style.color = "green";
        textAreaPara.innerHTML = `Thanks For Your Comment`
        bolks.style.backgroundColor = "green";
    }
}
