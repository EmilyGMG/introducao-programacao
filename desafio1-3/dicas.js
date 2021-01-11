const usuarios = [
  {nome: "Robinson", idade: 18},
  {nome: "William", idade: 28},
  {nome: "Janaina", idade: 19},
  {nome: "Carla", idade: 25},
  {nome: "aaaaaaaa", idade: 00000000},
];

for (let i = 0; i < usuarios.length; i++) {
	console.log(usuarios[i].nome, usuarios[i].idade);
}

for (let item of usuarios) {
	console.log(item.nome, item.idade);
}

for (let item in usuarios) {
	console.log(usuarios[item].nome, usuarios[item].idade);
}