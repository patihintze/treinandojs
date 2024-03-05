// var idade = 13;

// console.log(`Você tem ${idade} anos.`)

// if (idade < 16) {
//     console.log("Não vota");
// } else if (idade < 18 || idade >= 67) {
//     console.log("Voto opcional");
// } else {
//     console.log("Voto obrigatório");
// }
var realtime = new Date();
var hora = realtime.getHours();
console.log(`Agora são ${hora} horas.`)

if (hora <= 12 && hora >= 5){
    console.log("Bom dia!")
} else if (hora <= 0 || hora <= 5){
    console.log("Boa madrugada!")
} else if (hora >= 13 && hora <= 18) {
    console.log("Boa tarde!")
} else {
    console.log("Boa noite!")
}