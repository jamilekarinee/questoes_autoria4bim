// Crie uma função que receba um objeto produto com propriedades como nome, preço e  quantidade, e retorne o valor total (preço * quantidade).
// para rodar a função no console: node q2.js 
function calcularValorTotal (produto){
    return produto.quantidade * produto.preco; 
}

let produto = {nome : "Nike", preco: 650.00, quantidade: 2}; 
console.log(calcularValorTotal(produto)); 

