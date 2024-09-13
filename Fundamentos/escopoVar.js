//Exemplo usando const
const PI = 3.14;
PI = 90;
console.log(PI); //saida 3.14
//Erro tentando atribuir um novo valor a uma constante

function exemplo(){
    var x = 10; // Altera
    let y = 20; // Altera no Bloco
    const z = 30; // Nao altera

    console.log(x,y,z); //Saida 10 20 30

    if(true){
        //Mesma variavel x do escopo externo
        var x = 50;
        //Nova variavel y dentro do escopo interno
        let y = 60;

        console.log(x, y, z); //Saida: 50 60 30
    }
    console.log(x,y,z); //Saida: 50 20 30
}