function input(input,slider,ava) {
    var pSlider = document.getElementById(slider)
    var pAva = document.getElementById(ava);
    pAva.innerHTML -= input.value - pSlider.value;
    slider.value = input.value;
    return true;
}

function slider(slider,input,ava) {
    var total = document.getElementById("total");
    var pInput = document.getElementById(input);
    var pAva = document.getElementById(ava);
    pAva.innerHTML -= slider.value - pInput.value;
    total.innerHTML = parseInt(total.innerHTML) + parseInt(slider.value) - parseInt(pInput.value);
    pInput.value = slider.value;
}
