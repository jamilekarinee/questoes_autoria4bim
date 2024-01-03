function retornarNovoSaldo(contaBancaria) {
  return contaBancaria.saldo * (1 + contaBancaria.taxaJuros/100.0);
}

console.log(retornarNovoSaldo({saldo: 1000, taxaJuros: 1.0}));