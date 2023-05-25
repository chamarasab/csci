function sum() {
    let fn = parseInt(document.getElementById("first-number").value);
    let sn = parseInt(document.getElementById("second-number").value);
    let sum = fn + sn;
    //alert(sum);
    document.getElementById("answer").value = sum;
}