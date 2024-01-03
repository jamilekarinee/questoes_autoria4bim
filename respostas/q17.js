const funcao = (numeros) => {
  let soma = 0;
  numeros.forEach(elemento => {
    soma += elemento;
  });
  return soma / numeros.lenght;
}

export default funcao;