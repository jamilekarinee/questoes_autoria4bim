// Escreva uma função que aceite vários argumentos e retorne um array contendo esses argumentos. 

const funcao = (...argumentos) => { // ou só: => argumentos 
    return argumentos;
}

function funcao2(...argumentos){
    let vetor = []; 
    argumentos.forEach(elemento => vetor.push(elemento)); 
    return vetor; 
}
console.log(funcao(1, 'eita', true, 3)); 
console.log(funcao2(1, 'eita', true, 4)); 

