

function displayLoginform() {
    document.getElementById("btnContainer").className = "hidden";
    document.getElementById("slogan").className = "hidden";
    document.getElementById("loginForm").className = "show";

}

function displayRegistrationform() {
    document.getElementById("btnContainer").className = "hidden";
    document.getElementById("slogan").className = "hidden";
    document.getElementById("registrationForm").className = "show";
}

function displayChoicebtn() {
    document.getElementById("btnContainer").className = "show";
    document.getElementById("slogan").className = "show";
    document.getElementById("registrationForm").className = "hidden";
    document.getElementById("loginForm").className = "hidden";
}