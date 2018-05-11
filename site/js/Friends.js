function createProfilePic(source){
    //var img = document.createElement("img")
    //img.src = source;
    //img.align="center"
    //img.width="100%
    var para = document.createElement("P");
    var t = document.createTextNode("FRIEND");
    para.appendChild(t);
    var element = document.getElementById('row');
    element.appendChild(para);
}