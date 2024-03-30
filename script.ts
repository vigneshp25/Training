const loginPage: HTMLElement | null = document.getElementById("loginPage");
const registrationPage: HTMLElement | null = document.getElementById("registrationPage");
const userLandingPage: HTMLElement | null = document.getElementById("userLandingPage");
const logoutPage: HTMLElement | null = document.getElementById("logoutPage");

const loginPageUsername: HTMLElement | null = document.getElementById("login-username");
const loginPagePassword: HTMLElement | null = document.getElementById("login-password");
const loginPageErrorMessage: HTMLElement | null = document.getElementById("loginErrorMessage")

const registrationPageUsername: HTMLElement | null = document.getElementById("registration-username");
const registrationPagePassword: HTMLElement | null = document.getElementById("registration-password");
const registrationPageEmail: HTMLElement | null = document.getElementById("registration-email");
const registrationPageUsernameErrorAlert: HTMLElement | null = document.getElementById("registration-username-alert");
const registrationPagePasswordErrorAlert: HTMLElement | null = document.getElementById("registration-password-alert");
const registrationPageEmailErrorAlert: HTMLElement | null = document.getElementById("registration-email-alert");
const user:string = "vignesh";

let goToRegistration = ()=>{
    loginPage?.classList.add("displayNone");
    registrationPage?.classList.remove("displayNone");
}
let goToLogin = ()=>{
    registrationPage?.classList.add("displayNone");
    loginPage?.classList.remove("displayNone");
}
let storage: {username: string, password: string, email:string}[] = [
    {username:"vignesh", password:"123456",email:"vignesh@gmail.com"}
];
localStorage.setItem("persons",JSON.stringify(storage));
console.log(JSON.stringify(localStorage.getItem("persons")));