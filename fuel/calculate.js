function calculate() {
    let distance = parseInt(document.getElementById("txtDistance").value);
    let efficiency = parseFloat(document.getElementById("txtEfficiency").value);
    let price = parseFloat(document.getElementById("txtPrice").value);

    let cost = (distance/efficiency) * price;

    document.getElementById("txtResult").value = cost;

}