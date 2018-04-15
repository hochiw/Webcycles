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
    document.getE
    var child;

    if (type == "username") {
        child = document.getElementById("password");
    }
    else if (type == "password") {
        child = document.getElementById("submit");
    }
    else {
        return false;
    }
    console.log(child);
    appendElement.insertBefore(error,child);
}