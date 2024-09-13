// Criando um array para armazenar os animais

const animais = [];

 

// Utilizando um loop for para adicionar 5 animais com nome e raça

for (let i = 0; i < 5; i++) {

    const nome = prompt("Digite o nome do animal " + (i + 1) + ":");
    animais.push({ nome });

}