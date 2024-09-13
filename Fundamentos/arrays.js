let numeros = [1,2,3,4,5];
let cores = ["azul", "preto", "branco"];
let notas = [8, 8.5, 10, 5, 10];

function media(){
    var soma = 0;
    for (let i = 0; i < notas.length; i++) {
        soma += notas[i];
    }
    var m = soma/notas.length;
    console.log(m);
}