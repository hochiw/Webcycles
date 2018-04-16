var postalCode = "3123"
function changePostal() {
    if(postalCode = document.getElementById("newPostal").value == "") {
        alert("Please add new Postal Code");
        return false;
    }
    postalCode = document.getElementById("newPostal").value;
    document.getElementById("newPostal").value = "";
    document.getElementById("postal").textContent = postalCode;
    return false;
}
function dispPostal() {
    document.getElementById('postal').textContent = postalCode;
}