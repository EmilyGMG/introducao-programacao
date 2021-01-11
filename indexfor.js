const alunosDaturmaA = [
  {
    nome: "Emily",
    nota: 7
  },
  {
    nome: "John",
    nota: 8
  },
  {
    nome: "Johna",
    nota: 2
  },
  {
    nome: "Novo Aluno2",
    nota: 6
  }
]

const alunosDaturmaB = [
  {
    nome: "Emily2",
    nota: 10
  },
  {
    nome: "John2",
    nota: 8
  },
  {
    nome: "Johna2",
    nota: 7
  },
  {
    nome: "Novo Aluno",
    nota: 6
  }
]


function calculaMedia(alunos) {
  let soma = 0
  for (let i = 0; i < alunos.length; i++) {
    soma = soma + alunos[i].nota
  }
  const media = soma / alunos.length
  return media
}

const media1 = calculaMedia(alunosDaturmaA)
const media2 = calculaMedia(alunosDaturmaB)


function enviaMensagem(media, turma) {
  if (media > 5) {
    console.log(`A media da ${turma} foi de ${media}. Parabéns`)
  } else {
    console.log(`A media da ${turma} foi de ${media}. Melhorar`)
  }
}

enviaMensagem(media1, 'turmaA')
enviaMensagem(media2, 'turmaB')


function marcarComoReprovado(aluno) {
  aluno.reprovado = false;
  if (aluno.nota < 5) {
    aluno.reprovado = true;
  }
}

function enviaMensagemReprovado(aluno) {
  if (aluno.reprovado) {
    console.log(`O aluno ${aluno.nome} esta reprovado`)
  }
}

function alunoReprovado(alunos) {
  for (let aluno of alunos) {
    marcarComoReprovado(aluno);
    enviaMensagemReprovado(aluno)
  }
}

alunoReprovado(alunosDaturmaA)
alunoReprovado(alunosDaturmaB)