// Crie uma função que receba um objeto produto com propriedades como nome, preço e  quantidade, e retorne 
// o valor total (preço * quantidade).
// para rodar a função no console: node q2.js 

function PrecoTotal (produto){
    return produto.preco*produto.quantidade; 
}

let pao = {nome: 'Pão', preco: 10.00, quantidade: 5}; 
console.log(PrecoTotal(pao)); 