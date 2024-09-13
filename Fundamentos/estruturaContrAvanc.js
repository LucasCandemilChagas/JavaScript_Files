function changeColor(color) {
    let colorBox = document.getElementById('colorBox');
    let backgroundColor;

    switch (color) {
        case "red": 
            backgroundColor = "red";
            break;
        case "blue":
            backgroundColor = "blue";
            break;
        case "green":
            backgroundColor = "green";
            break;
        default:
            backgroundColor = "white";
    }

    colorBox.style.backgroundColor = backgroundColor;
}