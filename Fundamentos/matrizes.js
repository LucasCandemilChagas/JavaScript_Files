var matriz = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]; //polidimensional

var matriz1 = [
    [100, 200, 300],
    [400, 500, 600],
    [700, 800, 900]
];

function imprimeMatriz(matriz) {
    var header = "  ";
    var m = "";
    for (var i = 0; i < matriz.length; i++){
        header += "C" + (i+1) + " ";
    }

    console.log(header);

    for (var i = 0; i < matriz.length; i++){
        m = "L" + (i+1) + " ";
        for (var j = 0; j < matriz[i].length; j++){
            m += matriz[i][j] + " ";  
        }
        console.log(m);
        m = "";
    }

    console.log(matriz);
}

imprimeMatriz(matriz);