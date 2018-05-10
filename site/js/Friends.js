function createAction(){
    var action_src = "/user/" + document.getElementById("searchBox").value;
    var your_form = document.getElementById('searchContainer');
    your_form.action = action_src;
}