const funcao = (...argumentos) => {
  let vetor = []
  argumentos.forEach(argumento => vetor.push(argumento));
  return vetor;
};

console.log(funcao(34,"knk","22",false));