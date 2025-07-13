const tarefa_1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("Tarefa 1 concluída! ✅");
  }, 2000);
});

const tarefa_2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("Tarefa 2 concluída! ✅");
  }, 4000);
});

const tarefa_3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("Tarefa 3 concluída! ✅");
  }, 3000);
});


Promise.all([tarefa_1,tarefa_2,tarefa_3])
    .then(sucesso => console.log(sucesso))
    .catch(erro => console.log(erro))
