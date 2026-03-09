let carrinho = ["arroz ", "feijão ","carne"];

console.log(carrinho[0]);

carrinho.push("sucos", "macarrao");
console.log(carrinho);

carrinho.pop();
console.log(carrinho);  

console.log(carrinho.length);

let fila = ["joao", "maria", "ana", "pedro"];

console.log(fila[0]);

fila.push("lucas");
console.log(fila);

fila.shift();
console.log(fila);

let atendimento = ["cliente1", "cliente2", "cliente3"];

console.log(atendimento[0]);

atendimento.unshift("idoso");
console.log(atendimento);

atendimento.shift();
console.log(atendimento);

let nome = ["ana", "bruno", "carla", "daniel", "elisa"];
console.log(nome[0]);

nome.splice(0, 2);
console.log(nome);

let frutas = ["maca", "banana", "uva", "morango"];
console.log(frutas[0]);

frutas.splice(0, 2, "melancia");
console.log(frutas);

let lista = ["mause", "teclado", "monitor"];
console.log(lista[0]);

lista.includes("teclado");
console.log(lista.includes("teclado"));

lista.includes("cpu");
console.log(lista.includes("cpu"));

let cores = ["azul", "vermelho", "verde", "amarelo"];
console.log(cores[0]);

cores.indexOf("verde");
console.log(cores.indexOf("verde"));

cores.indexOf("rosa");
console.log(cores.indexOf("rosa"));
 
let alunos = ["carlos", "ana", "bruno", "daniel"];
console.log(alunos[0]);

alunos.sort();
console.log(alunos);

let tarefas = ["estudar", "treinar", "dormir"];
console.log(tarefas[0]);

tarefas.push("comer");
console.log(tarefas);

tarefas.unshift("trabalhar");
console.log(tarefas);

tarefas.pop();
console.log(tarefas);

tarefas.includes("estudar");
console.log(tarefas.includes("estudar"));

tarefas.indexOf("dormir");
console.log(tarefas.indexOf("dormir"));
 
tarefas.sort();
console.log(tarefas);