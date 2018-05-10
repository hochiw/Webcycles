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

function readCookie(name) {
    var delim = document.cookie.split(';');
    for(var i=0;i < delim.length;i++) {
        var char = delim[i];
        while (char.charAt(0)==' ') {
            char = char.substring(1,char.length);
        }
        if (char.indexOf(name+"=") == 0)
        {
            return char.substring(name.length+1,char.length);
        }
    }
    return null;
}

document.getElementById("Default").click();
document.getElementById('greeting-name').innerHTML = readCookie('username');
