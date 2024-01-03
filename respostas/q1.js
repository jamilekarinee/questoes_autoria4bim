const calcularValorTotal = (produto) => {
  return produto.preco * produto.quantidade;
};

console.log(calcularValorTotal({nome : "", preco : 234.67, quantidade : 34}));