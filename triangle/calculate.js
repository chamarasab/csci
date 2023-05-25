function calculate() {
    let base = parseFloat(document.getElementById("txtBase").value);
    let height = parseFloat(document.getElementById("txtHeight").value);


    let result = (base * height) / 2;

    document.getElementById("txtResult").value = result;
}