function createProfilePic(source){
    var img = document.createElement("img")
    img.src = source;
    img.align="center"
    img.width="100%"
    var element = document.getElementById('row');
    element.appendChild(img);
}