var email = "user@example.com";
function changeEmail() {
    if(email = document.getElementById("newEmail").value == "") {
        alert("Please add new Email");
        return false;
    }
    email = document.getElementById("newEmail").value;
    document.getElementById("newEmail").value = "";
    document.getElementById("email").textContent = email;
    return false;
}
function dispEmail() {
    document.getElementById('email').textContent = email;
}