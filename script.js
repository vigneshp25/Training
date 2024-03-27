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
    loginPage === null || loginPage === void 0 ? void 0 : loginPage.classList.add("displayNone");
    registrationPage === null || registrationPage === void 0 ? void 0 : registrationPage.classList.remove("displayNone");
};
var goToLogin = function () {
    registrationPage === null || registrationPage === void 0 ? void 0 : registrationPage.classList.add("displayNone");
    loginPage === null || loginPage === void 0 ? void 0 : loginPage.classList.remove("displayNone");
};
