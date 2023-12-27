// Crie uma função assíncrona que simule a obtenção de dados de um servidor, utilizando
// await para simular a espera pela resposta. 

async function funcao(){
    console.log("Solicitando dados do servidor..."); 
    const simularAtraso = () => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                let dados = {nome: "jjj", idade: 14}; 
                resolve(dados); 
            }, 2000); 
            reject(null); 
        });
    }
    await simularAtraso().then((dados) => {
        console.log("Chegou o dado.", dados); 
    }); 
} 



