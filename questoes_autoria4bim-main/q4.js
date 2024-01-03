// Escreva uma função que receba um objeto contaBancaria com propriedades como saldo
// e taxa de juros. A função deve simular um mês de juros e retornar o novo saldo. 

function NovoSaldo (contaBancaria){
    return 30*(contaBancaria.saldo * contaBancaria.taxa_juros); 
}

let contabanc = {saldo: 2, taxa_juros: 5};
console.log("Novo saldo: " + NovoSaldo(contabanc) + " reais.")
