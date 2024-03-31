var loginPage = document.getElementById("loginPage");
var registrationPage = document.getElementById("registrationPage");
var userLandingPage = document.getElementById("userLandingPage");
var logoutPage = document.getElementById("logoutPage");
var registrationSuccessfulPage = document.getElementById("registrationSuccessfulPage");
var loginPageUsername = document.getElementById("login-username");
var loginPagePassword = document.getElementById("login-password");
var loginPageErrorMessage = document.getElementById("loginErrorMessage");
var registrationPageUsername = document.getElementById("registration-username");
var registrationPagePassword = document.getElementById("registration-password");
var registrationPageEmail = document.getElementById("registration-email");
var registrationPageUsernameErrorAlert = document.getElementById("registration-username-alert");
var registrationPagePasswordErrorAlert = document.getElementById("registration-password-alert");
var registrationPageEmailErrorAlert = document.getElementById("registration-email-alert");
var user = "vignesh";
var goToRegistration = function () {
    loginPage === null || loginPage === void 0 ? void 0 : loginPage.classList.add("displayNone");
    registrationPage === null || registrationPage === void 0 ? void 0 : registrationPage.classList.remove("displayNone");
};
var goToLogin = function () {
    registrationPage === null || registrationPage === void 0 ? void 0 : registrationPage.classList.add("displayNone");
    logoutPage === null || logoutPage === void 0 ? void 0 : logoutPage.classList.add("displayNone");
    loginPage === null || loginPage === void 0 ? void 0 : loginPage.classList.remove("displayNone");
};
var login = function () {
    loginPage === null || loginPage === void 0 ? void 0 : loginPage.classList.add("displayNone");
    registrationPage === null || registrationPage === void 0 ? void 0 : registrationPage.classList.add("displayNone");
    userLandingPage === null || userLandingPage === void 0 ? void 0 : userLandingPage.classList.remove("displayNone");
};
var logout = function () {
    userLandingPage === null || userLandingPage === void 0 ? void 0 : userLandingPage.classList.add("displayNone");
    logoutPage === null || logoutPage === void 0 ? void 0 : logoutPage.classList.remove("displayNone");
};
var person = { username: "vignesh", password: "123456", email: "vignesh@gmail.com" };
var storage = [];
storage.push(person);
var isUserNameAvailable = function (username) {
    return storage.every(function (person) { return person.username != username; });
};
var isPasswordValid = function (password) {
    return password.length >= 6;
};
var isValidEmail = function (email) {
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
};
var checkExistingStorageForValidation = function (username, password, email) {
    if (!isUserNameAvailable(username) && registrationPageUsernameErrorAlert) {
        registrationPageUsernameErrorAlert.textContent = "User Name Already Exist";
    }
    if (!isPasswordValid(password) && registrationPagePasswordErrorAlert) {
        registrationPagePasswordErrorAlert.textContent = "Password length must be greater than 6";
    }
    if (!isValidEmail(email) && registrationPageEmailErrorAlert) {
        registrationPageEmailErrorAlert.textContent = "Type Valid Email Format";
    }
    if (!isUserNameAvailable(username) || !isPasswordValid(password) || !isValidEmail(email)) {
        return false;
    }
    else {
        return true;
    }
};
var registerUser = function () {
    var username = registrationPageUsername.value;
    var password = registrationPagePassword.value;
    var email = registrationPageEmail.value;
    var isUserNotExist = checkExistingStorageForValidation(username, password, email);
    if (isUserNotExist) {
        if (registrationPageUsernameErrorAlert) {
            registrationPageUsernameErrorAlert.textContent = "";
        }
        if (registrationPagePasswordErrorAlert) {
            registrationPagePasswordErrorAlert.textContent = "";
        }
        if (registrationPageEmailErrorAlert) {
            registrationPageEmailErrorAlert.textContent = "";
        }
        var newPerson = {
            username: username,
            password: password,
            email: email
        };
        storage.push(newPerson);
        localStorage.setItem("persons", JSON.stringify(storage));
        login();
    }
};
