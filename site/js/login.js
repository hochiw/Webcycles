function checkInfo() {
    document.querySelectorAll('.errorMsg').forEach(function(err){err.remove()})
    if (!document.getElementById("username").value) {
        errorGen("username");
        return false;
    }
    else if (!document.getElementById("password").value) {
        errorGen("password");
        return false;
    }
    else {
        return true;
    }
}

function errorGen(type) {
    var error = document.createElement("div");
    error.className = "errorMsg";
    var errorText = document.createTextNode("Please type in your " + type) ;
    error.appendChild(errorText);

    var appendElement = document.getElementById("loginForm");
    var child;

    if (type == "LUser") {
        child = document.getElementById("LPass");
    }
    else if (type == "LPass") {
        child = document.getElementById("Lsubmit");
    }
    else {
        return false;
    }
    console.log(child);
    appendElement.insertBefore(error,child);
}

function displayLoginform() {
    document.getElementById("btnContainer").className = "hidden";
    document.getElementById("loginForm").className = "show";

}

function displayRegistrationform() {
    document.getElementById("btnContainer").className = "hidden";
    document.getElementById("registrationForm").className = "show";
}

function displayChoicebtn() {
    document.getElementById("btnContainer").className = "show";
    document.getElementById("registrationForm").className = "hidden";
    document.getElementById("loginForm").className = "hidden";
}