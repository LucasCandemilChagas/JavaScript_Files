function nomeDaFuncao(parametro1, parametro2, parametroN){
    //Corpo da Funcao (bloco de cod)
    //Instrucoes a serem executadas
    //Pode incluir declaracao de variaveis, loops, condicionais e etc
    return resultado
}

//Exp
function velocidadeMedia(distancia, tempo){
    let velocidadeMedia = distancia/tempo;
    console.log("A Velocidade Media foi de ",velocidadeMedia, " metros por minuto");
}

//Funcao Flecha
const _velocidadeMedia = (distancia, tempo) => {
    let velocidadeMedia = distancia/tempo;
    console.log("Funcao Flecha --->");
    console.log("A Velocidade Media foi de ",velocidadeMedia, " metros por minuto");
}

let numero1 = parseFloat(prompt("Digite a distancia (metros)"));
let numero2 = parseFloat(prompt("Digite o tempo (minuto)"));