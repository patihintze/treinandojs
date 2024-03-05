/* Exercício 1: Escreva um programa que declare duas variáveis, “nome” e “idade”, e as imprima em um console em uma frase que diga “Olá, meu nome é [nome] e eu tenho [idade] anos”.

const nome = "Patricia";
const idade = "29";

window.alert (`Olá, meu nome é ${nome} e eu tenho ${idade} anos.`); */

/* Exercício 2: Crie um programa que solicite ao usuário dois números e exiba o resultado da soma, subtração, multiplicação e divisão desses números.

let n1 = Number.parseInt(window.prompt("Informe um número: "));
let n2 = Number.parseInt(window.prompt("Informe outro número: "));

window.alert(`A soma dos dois números é ${n1 + n2}`); */


/* Exercício 3: Escreva um programa que pergunte ao usuário sua idade e imprima se ele é maior ou menor de idade.
let idade = Number.parseInt(window.prompt("Informe a sua idade: "));

if (idade >= 18) {
    window.alert("Você é maior de idade");
} else {
    window.alert("Você é menor de idade.");
} */

/* let c = 1;
while (c <= 100 ) {
    console.log(c);
    c++;
} */

/* let media = window.prompt ("Digite a média do aluno: ");
var mostra = media >= 7?"Aprovado":"Reprovado"
window.alert(mostra); */

var age = prompt("What's your age?");
if (age > 18) {
    window.alert(`Você tem ${age} anos e é maior de idade.`);
}else {
    window.alert(`Você tem ${age} anos e é menor de idade!`);
}

