var name = "swaseem";
function changeUsername() {
    if( name = document.getElementById("newUsername").value == "") {
        alert("Please add new username");
        return false;
    }
    name = document.getElementById("newUsername").value;
    document.getElementById("newUsername").value = "";
    document.getElementById("username").textContent = name;
    return false;
}
function dispUsername() {
    document.getElementById('username').textContent = name;
}