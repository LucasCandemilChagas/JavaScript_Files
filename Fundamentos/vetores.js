//Declaracao de um vetor vazio
var vetor = []; //Unidimensional

//Adiciona elementos ao final do vetor
vetor.push("Maca");
vetor.push("Banana");

console.log(vetor);

//Adiciona elementos no inicio do vetor
vetor.unshift("Morango");

console.log(vetor);

//Remove o ultimo elemento do vetor
var ultElem = vetor.pop();
console.log(ultElem);

//Remove o primeiro elemento do vetor
var primElem = vetor.shift();
console.log(primElem);

console.log(vetor);