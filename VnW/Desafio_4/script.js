let idadeUser = 16;
let idadeMari = 54;
let ano = 2023;
let nome = "Mariah Carey";
let mes = "Dezembro";
let quartaFeira = true;
const nasc = ano - idadeMari;

console.log("O Ano Novo está chegando!!!!");
//console.log(nasc); tomei um pouco de liberdade no console abaixo... por segurança deixei aqui comentado o console só com a data de nascimento.
console.log(`A cantora ${nome} está sendo descongelada, como ela nasceu em ${nasc}, ela possui em ${ano} incríveis ${idadeMari} anos`)
console.log(quartaFeira);
console.log(typeof quartaFeira);

if (idadeUser>=18) {
    console.log("Você é maior de idade, poderá curtir o show do Roberto Carlos com participação especial de Mariah Carey")
} else {
    console.log("Sinto muito, mas assistirá da tv globo")
}

if (mes=="Agosto"||mes=="Dezembro"||mes=="Junho" ) {
    console.log(`Uma ou mais opções estão corretas. O mês escolhido foi ${mes}`)
} else {
    console.log(`Algo de errado não está certo, o mês digitado foi ${mes} `)
}