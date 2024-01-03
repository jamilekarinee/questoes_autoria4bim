const compararIdadePessoas = (pessoa1, pessoa2) => {
  if (pessoa1.idade === pessoa2.idade)
    return true;
  else
    return false;
};

console.log(compararIdadePessoas({idade: 12},{idade : 11}))