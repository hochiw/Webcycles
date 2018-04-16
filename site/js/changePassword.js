function changePassword() {
    if(document.getElementById("password").value == document.getElementById("newPassword")) {
        alert("New Password and Old Password Cannot Be The Same");
        document.getElementById("password").value = "";
        document.getElementById("newPassword").value="";
        document.getElementById("confirmPassword").value=""
        return false;
    }

    if(document.getElementById("newPassword").value != document.getElementById("confirmPassword").value) {
        alert("Passwords do not match, please try again");
        document.getElementById("password").value = "";
        document.getElementById("newPassword").value="";
        document.getElementById("confirmPassword").value=""
        return false;
    }

    window.location.href='../settings';
    return false;
}