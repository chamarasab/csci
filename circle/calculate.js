function calculate() {
    let radius = parseFloat(document.getElementById("radius").value);
    
    document.getElementById("resultPerimeter").value = findPerimeter(radius);

    document.getElementById("resultArea").value = findArea(radius);
}

function findPerimeter(radius) {
    let perimeter = 2 * (22/7.0) * radius;
    return perimeter;
}

function findArea(radius) {
    let area = (22/7.0) * (radius * radius);
    return area;
}