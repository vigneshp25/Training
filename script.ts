const loginPage = document.getElementById("loginPage");
const registrationPage = document.getElementById("registrationPage");
const userLandingPage = document.getElementById("userLandingPage");
const logoutPage = document.getElementById("logoutPage");

const loginPageUsername = document.getElementById("login-username");
const loginPagePassword = document.getElementById("login-password");
const loginPageErrorMessage = document.getElementById("loginErrorMessage")

const registrationPageUsername = document.getElementById("registration-username");
const registrationPagePassword = document.getElementById("registration-password");
const registrationPageEmail = document.getElementById("registration-email");
const registrationPageUsernameErrorAlert = document.getElementById("registration-username-alert");
const registrationPagePasswordErrorAlert = document.getElementById("registration-password-alert");
const registrationPageEmailErrorAlert = document.getElementById("registration-email-alert");

let goToRegistration = ()=>{
    loginPage?.classList.add("displayNone");
    registrationPage?.classList.remove("displayNone");
}
let goToLogin = ()=>{
    registrationPage?.classList.add("displayNone");
    loginPage?.classList.remove("displayNone");
}