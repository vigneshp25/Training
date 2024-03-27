var loginPage = document.getElementById("loginPage");
var registrationPage = document.getElementById("registrationPage");
var userLandingPage = document.getElementById("userLandingPage");
var logoutPage = document.getElementById("logoutPage");
var loginPageUsername = document.getElementById("login-username");
var loginPagePassword = document.getElementById("login-password");
var loginPageErrorMessage = document.getElementById("loginErrorMessage");
var registrationPageUsername = document.getElementById("registration-username");
var registrationPagePassword = document.getElementById("registration-password");
var registrationPageEmail = document.getElementById("registration-email");
var registrationPageUsernameErrorAlert = document.getElementById("registration-username-alert");
var registrationPagePasswordErrorAlert = document.getElementById("registration-password-alert");
var registrationPageEmailErrorAlert = document.getElementById("registration-email-alert");
var goToRegistration = function () {
    if (loginPage != null && registrationPage != null) {
        loginPage.classList.add("displayNone");
        registrationPage.classList.remove("displayNone");
    }
};
var goToLogin = function () {
    if (loginPage != null && registrationPage != null) {
        registrationPage.classList.add("displayNone");
        loginPage.classList.remove("displayNone");
    }
};
