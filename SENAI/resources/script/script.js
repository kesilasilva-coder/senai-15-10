// arquivo != pasta

// //Arrays === lista

// let compras = ["ovo","arroz","feijão branco", "sabao em po", "sabao em barra"];
// //
// let busca = prompt("Digite o item a buscar");

// let listaFiltrada = compras.find(compra =>
// compra.toLowerCase().includes|(busca.
// toLowerCase().trim())
// )
// let encontar = compras.indexOf|(listaFiltrada)



// let users = ["pedro","ana","joana","Diego","davi messias","cristiano"];

// let searchUser = prompt("Digite o nome do usuário que deseja buscar:")

// // lembrando que, meu usuário adm ão pode mandar em branco a busca. chamamos isso de tratativa de erros.

// if(searchUser ===""){

// }
// else{
// //retorna o usuário que for encontrado
// let user = users.find(user =>
// user.toLowerCase().includes(searchUser.toLowerCase().trim())
// );
// // devemos tratar também caso a busca não retorne nenhum resultado
// if(user.length() === 0){
// // Usuário não encontrado
// console.log("user not found");
// }
// else{
// console.log("usuário encontrado:".concat(user));
// // buscar indice do usuário
// let index = users.indexOf|(user);
// // alterar o elemento
// users[index] = "novo valor";
// console.log(users)
// }
// }

// let users = ["Pedro", "Ana", "Joana", "Diego", "Davi Messias", "Cristiano"];

// let searchUser = prompt("Digite o nome do usuário que deseja buscar:");

// if (searchUser === "") {
//     console.log("Não pode enviar em branco");
// } else {
// let user = users.find(user =>
//         user.toLowerCase().includes(searchUser.toLowerCase().trim())
// );

// if (user === undefined) {
// console.log("User not found");
// } else {
// console.log("Usuário encontrado: " + user);

// let index = users.indexOf(user);

// users[index] = "novo valor";

// console.log(users);
//     }
// }

let fila = ["Ana", "Pedro", "Maria", "João", "Lucas", "Julia", "Carlos"];
console.log("Fila inicial:", fila);

fila.push("Gabriel");
console.log("Após adicionar cliente comum:", fila);

fila.unshift("Roberto (Prioritário)");
console.log("Após adicionar cliente prioritário:", fila);

let atendido = fila.shift();
console.log("Cliente atendido:", atendido);
console.log("Fila após o atendimento:", fila);

let desistente = fila.pop();
console.log("Cliente que desistiu:", desistente);
console.log("Fila após a desistência:", fila);