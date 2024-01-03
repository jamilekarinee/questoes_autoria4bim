const formatarString = (endereco) => {
  let {rua, cidade, pais} = endereco; 
  return `Rua: ${rua}, Cidade: ${cidade}, País: ${pais}`;
};


console.log(formatarString({rua : "XXXX", cidade: "Macaíba", pais: "Brasil"}));