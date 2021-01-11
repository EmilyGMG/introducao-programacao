const nome = "Silvana";
const sexo = "F";
const idade = 48;
const contribuicao = 37;

const calculoHomem = idade + contribuicao >= 95 && contribuicao >= 35
const calculoMmulher = idade + contribuicao >= 85 && contribuicao >= 30

const soma = idade + contribuicao

if ((sexo == 'F' && calculoMmulher) || (sexo == 'M' && calculoHomem)) {
    console.log(`Pode se aposentar ${nome}, ${soma} `)
  } else {
    console.log(`Não pode se aposentar ${nome}, ${soma}`)
} 
