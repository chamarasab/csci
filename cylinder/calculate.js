function calculate() {
    //area = ( 2 * pi * r * h ) + (2 * pi * ( r * r ));

    let r = parseFloat(document.getElementById("txtRadius").value);
    let h = parseFloat(document.getElementById("txtHeight").value);

    let result = (2 * Math.PI * r * h) + (2 * Math.PI * (r * r));

    document.getElementById("txtResult").value = result;
}