function showLeaderboard(event, type) {
    // Declare all variables
    var i;

    var tab_ele = document.getElementsByClassName("leaderboardTab");
    for (i = 0; i < tab_ele.length; i++) {
        tab_ele[i].style.display = "none";
    }

    var tab_btn = document.getElementsByClassName("tab-btn");
    for (i = 0; i < tab_btn.length; i++) {
        tab_btn[i].className = tab_btn[i].className.replace(" active", "");
    }

    document.getElementById(type).style.display = "grid";
    event.currentTarget.className += " active";
}

document.getElementById("Default").click();
var token = new URL(document.location.href).searchParams.get("token")
if (token) {
    document.getElementById('greeting').innerHTML = "Welcome back, " + atob(token);
}