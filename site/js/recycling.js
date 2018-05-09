function input(input,slider,total,formName) {

    var slider = document.getElementById(slider);
    var total = document.getElementById(total);
    var material = document.getElementById(formName);
    total.innerHTML = input.value;
    material.value = input.value;

    // Detection for invalid input
    //When input is over the maximum
    if (input.value > parseInt(slider.max)) {
        total.innerHTML = slider.max;
        input.value = slider.max;
        material.value = slider.max;
    }
    //When input is below the minimum
    if (input.value < parseInt(slider.min)){
        total.innerHTML = slider.min;
        input.value = slider.min;
        material.value = slider.min;
    }
    slider.value = input.value;
    totalCalculator();
}

function slider(slider,input,total,formName) {
    var input = document.getElementById(input);
    var total = document.getElementById(total);
    var material = document.getElementById(formName);
    total.innerHTML = slider.value;
    input.value = slider.value;
    material.value = slider.value;
    totalCalculator();
}

function totalCalculator(){
    var totalForm = document.getElementById('totalForm');
    var total = document.getElementById('total')
    var paper = document.getElementById('paperForm');
    var plastic = document.getElementById('plasticForm');
    var metal = document.getElementById('metalForm');
    var glass = document.getElementById('glassForm');
    var sum = parseInt(paper.value) + parseInt(plastic.value) + parseInt(metal.value) + parseInt(glass.value);
    total.innerHTML = sum.toString();
    totalForm.value = sum.toString();
}


