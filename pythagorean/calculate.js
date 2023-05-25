function calculate() {
    let leg1 = parseInt(document.getElementById("txtLeg1").value);
    let leg2 = parseFloat(document.getElementById("txtLeg2").value);

    //let result = Math.sqrt((leg1 * leg1) + (leg2 * leg2));
    let result = Math.sqrt(Math.pow(leg1, 2) + Math.pow(leg2, 2));

    document.getElementById("txtResult").value = result;
}