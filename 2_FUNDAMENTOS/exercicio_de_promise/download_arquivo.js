function baixarArquivo(url) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (url.startsWith('http')) {
          console.log("Download concluído!");
        } else {
          console.log("URL inválida!");
        }
      }, 3000);
    });
  }
  
  baixarArquivo("http//teste.com")
    .then((sucesso) => console.log(sucesso))
    .catch((erro) => console.log(erro));
  