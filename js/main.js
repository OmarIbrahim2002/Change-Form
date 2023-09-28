let inputs = document.querySelectorAll("input");
inputs.forEach((input) => {
    input.addEventListener("focus", () => {
        input.classList.add("insetShadow");
    });
    input.addEventListener("blur", () => {
        input.classList.remove("insetShadow");
    });
});

// -----------------------------------
document.getElementById("checkLog").onsubmit = function () {
    let inputP = document.querySelector(".login p.unValidPass");
    let passLogValue = document.getElementById("passwordLog").value;
    let passRe =
        /(?=(.*[0-9]))(?=.*[\!@#$%^&*()\\[\]{}\-_+=~`|:;"'<>,.?])(?=.*[a-z])(?=(.*[A-Z]))(?=(.*)).{8,}/ig;
    // Om!45678

    let validPassLog = passRe.test(passLogValue);

    if (validPassLog == false) {
        inputP.style.opacity = "1";
        return false;
    }
};
document.getElementById("checkSign").onsubmit = function () {
    let inputP = document.querySelector(".signup p.unValidPass");
    let passSignValue = document.getElementById("passwordSign").value;
    let passRe =
        /(?=(.*[0-9]))(?=.*[\!@#$%^&*()\\[\]{}\-_+=~`|:;"'<>,.?])(?=.*[a-z])(?=(.*[A-Z]))(?=(.*)).{8,}/ig;
    // Om!45678

    let validPassSign = passRe.test(passSignValue);

    if (validPassSign == false) {
        inputP.style.opacity = "1";
        return false;
    }
};
// ----------------------------------

let button = document.querySelector("#change");
let buttonIcon = document.querySelector("#change i");

let formInput = document.querySelectorAll("form input");
let formBtn = document.querySelectorAll("form button");
let formP = document.querySelectorAll("form p:first-child");
let forms = document.querySelectorAll("form");
button.addEventListener("click", () => {
    buttonIcon.classList.toggle("move");

    formInput.forEach((input) => {
        input.classList.toggle("shadowNone");
    });
    formBtn.forEach((btn) => {
        btn.classList.toggle("shadowNone");
    });

    setTimeout(() => {
        formInput.forEach((input) => {
            input.classList.toggle("none");
        });
        formP.forEach((p) => {
            p.classList.toggle("none");
        });
        forms.forEach((form) => {
            form.classList.toggle("none");
        });
    }, 350);
});