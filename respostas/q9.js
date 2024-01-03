const calcularArea = (config) => {
  const {largura, altura} = config;
  return largura * altura;
};

console.log(calcularArea({largura : 23, altura: 34}));