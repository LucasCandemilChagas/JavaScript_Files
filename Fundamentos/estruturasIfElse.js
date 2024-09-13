let idade = 18;
let possuiCarteira = true;

if (idade >= 18) {
    console.log("Voce eh maior de idade");

    if(possuiCarteira){
        console.log("Pode dirigir");
    } else {
        console.log("Nao pode dirigir");
    }
} else {
    console.log("Voce eh menor de idade");
}  

//Outra forma de representar um if/else
let mensagem = idade>=18 ? "Voce eh maior de idade" : "Voce eh menor de idade";

/**Estruturas de controles
 *  WHILE
 *  DO WHILE
 *  FOR
 */
for (let i = 0; i < 5; i++) {
    console.log(i);
}

let j = 0;
while (j < 5){
    console.log(j);
    j++;
}

do {
    console.log(j);
    j++;
} while (j < 5);
