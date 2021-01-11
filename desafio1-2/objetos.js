const usuario = {
  
    nome: 'Joakin', 
    idade: 20,
    tecnologias: [
      {
      nome:'HTML', 
      especialidade:'CSS'
      },
      {
        nome:'JavaScript', 
        especialidade:'CSS'
        },
    ] 
  }

console.log(`O usuário ${usuario.nome} tem ${usuario.idade} e usa a tecnologia ${usuario.tecnologias[0].nome} com especialidade em ${usuario.tecnologias[0].especialidade}`)