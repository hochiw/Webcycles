function input(input,slider,ava) {

    var pSlider = document.getElementById(slider)
    var pAva = document.getElementById(ava);
    pAva.innerHTML -= input.value - pSlider.value;
    if (pAva.innerHTML < pSlider.min) {
        pAva.innerHTML = pSlider.min;
        input.value = pSlider.max;
    }

    pSlider.value = input.value;
}

function slider(slider,input,ava) {
    var total = document.getElementById("total");
    var pInput = document.getElementById(input);
    var pAva = document.getElementById(ava);
    pAva.innerHTML -= slider.value - pInput.value;
    total.innerHTML = parseInt(total.innerHTML) + parseInt(slider.value) - parseInt(pInput.value);
    pInput.value = slider.value;
}
