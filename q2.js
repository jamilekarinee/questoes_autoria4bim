// Crie uma função que receba dois objetos pessoa1 e pessoa2 e retorne verdadeiro se elas tiverem a mesma idade e falso caso contrário. 
/*function MesmaIdade(pessoa1, pessoa2){
    if(pessoa1.idade == pessoa2.idade){
        return true;
    }
    else{
        return false; 
    }
}

let pessoa1 = {idade: 4};
let pessoa2 = {idade: 44};
console.log(MesmaIdade(pessoa1, pessoa2)); 
*/
// ou dessa forma: 
const compararPessoas = (pessoa1, pessoa2) => { // => : forma de declarar função 
    return pessoa1.idade === pessoa2.idade; 
}

let pessoa1 = {idade: 4};
let pessoa2 = {idade: 13};
console.log(compararPessoas({idade: 15}, {idade: 15})); // ou: let pessoa1 = {idade: 4}; let pessoa2 = {idade: 13};           pessoa1,pessoa2

// Retorne o compriomento de uma string 
const funcao = texto => texto.length; 
console.log(funcao("texto u")); 
