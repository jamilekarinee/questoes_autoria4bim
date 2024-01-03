const calcularMediaAlunos = (alunos) => {
  return alunos.map(aluno => ({nome : aluno.nome, media : (aluno.nota1 + aluno.nota2)/2}));
};

console.log(calcularMediaAlunos([{nome: "J", nota1: 23, nota2: 34}]));


