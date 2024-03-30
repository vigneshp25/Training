const loginPage = document.getElementById("loginPage");
const registrationPage = document.getElementById("registrationPage");
const userLandingPage = document.getElementById("userLandingPage");
const logoutPage = document.getElementById("logoutPage");

const loginPageUsername = document.getElementById("login-username") as HTMLInputElement;
const loginPagePassword = document.getElementById("login-password") as HTMLInputElement;
const loginPageErrorMessage = document.getElementById("loginErrorMessage");

const registrationPageUsername = document.getElementById("registration-username") as HTMLInputElement;
const registrationPagePassword = document.getElementById("registration-password") as HTMLInputElement;
const registrationPageEmail = document.getElementById("registration-email") as HTMLInputElement;
const registrationPageUsernameErrorAlert = document.getElementById("registration-username-alert");
const registrationPagePasswordErrorAlert = document.getElementById("registration-password-alert");
const registrationPageEmailErrorAlert = document.getElementById("registration-email-alert");
const user:string = "vignesh";

let goToRegistration = ()=>{
    loginPage?.classList.add("displayNone");
    registrationPage?.classList.remove("displayNone");
}
let goToLogin = ()=>{
    registrationPage?.classList.add("displayNone");
    loginPage?.classList.remove("displayNone");
}
let person:{username: string, password: string, email:string} = {username:"vignesh", password:"123456",email:"vignesh@gmail.com"}
let storage: {username: string, password: string, email:string}[] = [];
storage.push(person);


let isUserNameAvailable = (username:string):boolean => {
    return storage.every(person => person.username != username);
}
let isPasswordValid = (password:string):boolean => {
    return password.length>=6;
}
let isValidEmail = (email:string):boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}
let checkExistingStorageForValidation = (username:string,password:string,email:string):boolean =>{
    if(!isUserNameAvailable(username) && registrationPageUsernameErrorAlert){
        registrationPageUsernameErrorAlert.textContent = "User Name Already Exist"; 
    }
    if(!isPasswordValid(password) && registrationPagePasswordErrorAlert){
        registrationPagePasswordErrorAlert.textContent = "Password length must be greater than 6"; 
    }
    if(!isValidEmail(email) && registrationPageEmailErrorAlert){
        registrationPageEmailErrorAlert.textContent = "Type Valid Email Format"; 
    }
    if(!isUserNameAvailable(username) || !isPasswordValid(password) || !isValidEmail(email) ){
        return false;
    } else{
        return true;
    }
}

let registerUser = ()=>{
    let username:string = registrationPageUsername.value;
    let password:string = registrationPagePassword.value;
    let email:string = registrationPageEmail.value;

    let isUserNotExist:boolean = checkExistingStorageForValidation(username,password,email);

    if(isUserNotExist){
        if( registrationPageUsernameErrorAlert){
            registrationPageUsernameErrorAlert.textContent="";
        }
        if( registrationPagePasswordErrorAlert){
            registrationPagePasswordErrorAlert.textContent="";
        }
        if( registrationPageEmailErrorAlert){
            registrationPageEmailErrorAlert.textContent="";
        }
        let newPerson:{username: string, password: string, email:string} = {
            username: username,
            password: password,
            email: email
        }
        storage.push(newPerson);
        localStorage.setItem("persons",JSON.stringify(storage));
        console.log(localStorage.getItem("persons"));
    }
}