const calcularMedia = (...valores) => {
  let soma = 0
  for (let elemento of valores){
    soma += elemento;
  }
  return soma/valores.length;
};

console.log(calcularMedia(1,2,3,5));