const user = {
  name: "Mariana",
  transactions: [],
  balance: 0
};

function createTransaction() {
  user.transactions.push(transaction)
  if(user.transactions == 'credit'){
    user.balance = user.balance + transaction
  }else {
    user.balance = user.balance - transaction
  }
}

getHigherTransactionByType("credit"); 
 


// for (let i = 0; i < usuarios.length; i++) {
// 	console.log(usuarios[i].nome, usuarios[i].idade);
// }

// for (let item of usuarios) {
// 	console.log(item.nome, item.idade);
// }

// for (let item in usuarios) {
// 	console.log(usuarios[item].nome, usuarios[item].idade);
// }