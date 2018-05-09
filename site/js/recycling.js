function input(input,slider,total,formName) {

    var slider = document.getElementById(slider);
    var total = document.getElementById(total);
    var material = document.getElementById(formName);
    total.innerHTML = input.value;
    material.value = input.value;

    // Detection for invalid input
    //When input is over the maximum
    if (total.innerHTML > slider.max) {
        total.innerHTML = slider.max;
        input.value = slider.max;
    }
    //When input is below the minimum
    if (total.innerHTML < slider.min){
        total.innerHTML = slider.min;
        input.value = slider.min;
    }
    slider.value = input.value;
    totalCalculator();
}

function slider(slider,input,total,formName) {
    var input = document.getElementById(input);
    var total = document.getElementById(total);
    var material = document.getElementById(formName);
    total.innerHTML = slider.value;
    total.innerHTML = parseInt(total.innerHTML) + parseInt(slider.value) - parseInt(input.value);
    input.value = slider.value;
    material.value = slider.value;
    totalCalculator();
}

function totalCalculator(){
    var total = document.getElementById('totalForm');
    var paper = document.getElementById('paperForm');
    var plastic = document.getElementById('plastic');
    var metal = document.getElementById('metalForm');
    var glass = document.getElementById('glassForm');

    total.value = paper.value + plastic.value + metal.value + glass.value;
}


