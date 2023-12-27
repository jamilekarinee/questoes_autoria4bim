// Questão 2 do Arrow Functions
const funcao = (numero) => {
    let vetor = []; 
    for (let i=0; i<numero.length; i++){
        vetor.push(numero[i]*numero[i])
    }
    return vetor; 
}

// ou dessa forma: 
const funcao2 = (numero) => numero.map(elemento => elemento*elemento); 

console.log(funcao([1,2,3])); 
console.log(funcao2([1,2,3])); 
