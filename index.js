const alunosDaturmaA = [
  {
    nome: "Emily",
    nota: 7
  },
  {
   nome: "John",
   nota: 6
 },
 {
   nome: "Johna",
   nota: 2
 },
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
]

function calculaMedia(alunos) {
  return (alunos[0].nota + alunos[1].nota + alunos[2].nota) / 3
}

const media1 = calculaMedia(alunosDaturmaA)
const media2 = calculaMedia(alunosDaturmaB)


function enviaMensagem(media, turma){
  if (media > 5) {
    console.log(`A media da ${turma} foi de ${media}. Parabéns`)
  } else {
    console.log(`A media da ${turma} foi de ${media}. Melhorar`)
  }
}

enviaMensagem(media1, 'turmaA')
enviaMensagem(media2, 'turmaB')

