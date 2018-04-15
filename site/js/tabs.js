function showLeaderboard(event, type) {
    // Declare all variables
    var i, tab_ele, tab_btn;

    // Get all elements with class="tabcontent" and hide them
    tab_ele = document.getElementsByClassName("leaderboardTab");
    for (i = 0; i < tab_ele.length; i++) {
        tab_ele[i].style.display = "none";
    }

    // Get all elements with class="tablinks" and remove the class "active"
    tab_btn = document.getElementsByClassName("tab-btn");
    for (i = 0; i < tab_btn.length; i++) {
        tab_btn[i].className = tab_btn[i].className.replace(" active", "");
    }

    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(type).style.display = "grid";
    event.currentTarget.className += " active";
}