//Criando uma sintaxe literal
let pessoa = {
    nome: "Lucas",
    idade: 25,
    profissao: "Engenheiro"
};

console.log(pessoa);

//Criando um construtor
let carro = new Object();
carro.marca = "Toyota";
carro.modelo = "Corolla" 

console.log(carro);

let humano = {
    nome: "Lucas",
    idade: 25,
    profissao: "Engenheiro",
    andar: function() { //Comportamento do objeto
        console.log(`${this.nome} está andando`);
    }
};