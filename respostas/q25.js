const retornarPromise = () => {
  return new Promise((resolve, reject) => {
    let tempoAleatorio = Math.floor(Math.random() * 16);
    setTimeout(() => {
      resolve(1);
    }, tempoAleatorio*1000);
  });
};

retornarPromise().then(console.log);
