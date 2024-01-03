// Crie uma função que receba um array de objetos representando alunos, cada um com
// propriedades como nome, nota1 e nota2. A função deve calcular a média de cada aluno
// e retornar um novo array de objetos com os nomes e médias. 

function Media(aluno){
    return 'Aluno: ' + aluno.nome_aluno + ' | Nota: ' + (aluno.nota1+aluno.nota2)/2; 
}

let aluno = {nome_aluno: 'João' , nota1: 100, nota2: 80};
console.log(Media(aluno)); 