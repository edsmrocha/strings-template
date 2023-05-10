//let pessoa = prompt("Qual o seu nome?").toUpperCase()
//let cor = prompt("Sua cor favorita?").toLocaleUpperCase()
//let citacao = prompt("Qual sua citação favorita?")

//let fraseConcatenacao = "A cor favorida de " + pessoa + " é " + cor + ". '" + citacao + "'"
//let frasetempletString = `A cor favorida de ${pessoa} é ${cor}. "${citacao}"`

//console.log("Concatenação:", fraseConcatenacao.length)
//console.log("Templete String:",frasetempletString)
//console.log(pessoa.includes("A"))

//let fraseQuebraLinha = "nome: " + pessoa + "\nCor favorita: " + cor
//let frase = `Nome: ${pessoa} 
//cor favorita: ${cor}` 
//console.log(frase);

let seunome = prompt("Qual o seu nome?")
let email = prompt("Qual o seu e-amil?")
let bemvindo = `O e-mail ${email} foi cadastrado com sucesso. Boas Vindas! ${seunome}`
const novaBemVindo = bemvindo.replaceAll("r","x")

console.log(bemvindo)
console.log(seunome.length);
console.log(email.includes("@"));
console.log((novaBemVindo));