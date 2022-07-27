// PRATICA 1
// const nome = prompt("Qual é o seu nome?")
// const cor = prompt("Qual é a sua cor favorita?")
​
// concatenaçao
// let mensagem1 = "A cor favorita de " + nome + " é " + cor
// console.log(mensagem1)
​
// template string
// let mensagem2 = `A cor favorita de ${nome} é ${cor}`
// console.log(mensagem2)
​
// ` = crase
// ' = aspas simples
// " = aspas duplas
​
// PRATICA 2
// const citacao = prompt("Qual é a sua ciaçao favorita?")
​
// mensagem1 = `${mensagem1}, e a citaçao favorita é "${citacao}"`
//mensagem1  = mensagem1 + " e a sua citaçao favorita é \" " + citacao + " \" "
// console.log(mensagem1)
​
// mensagem2 = "Nome: " + nome + "\nCor favorita: " + cor
// mensagem2 = `Nome: ${nome}
// Cor favorita: ${cor}`
// console.log(mensagem2)
​
// PRATICA 3
// console.log(`O nome ${nome.toUpperCase()} possui ${nome.length} caracteres`)
​
// método => toUpperCase()
// propriedade => length
​
// console.log(`O nome possui a letra A: ${nome.includes("A")}`)
​
// EXERCICIO DE FIXAÇAO
// const nome = prompt("Qual seu nome?")
// const email = prompt("Qual seu email?")
​
// let mensagem = `O email ${email} foi cadastrado com sucesso. Boas vindas, ${nome}!`
// console.log(mensagem)
​
// console.log(`O nome ${nome} tem ${nome.length} caracteres`)
​
// console.log(mensagem.replaceAll("a", "i"))
// console.log(`O email possui @: ${nome.includes("@")}`)
​
// Sintaxe de PROPRIEDADE
// variavel.propriedade
// variavel.length

const nome = prompt("Qual é o seu nome?");

const email = prompt("Qual é o seu email");

let mensagem1 = `O email ${email} foi cadastrado com sucesso. Boas vindas ${nome}`
console.log(mensagem1);

console.log(`Seu nome possui ${nome.length} caracteres`);

let mensagem2 = mensagem1.replace("R", "L");

console.log(mensagem2);

console.log (email.includes("@"));


// const nome = prompt ("Por favor, insira seu nome:")
// const email = prompt ("Por favor, insira seu e-mail:")
// const cebolinha = nome.replaceAll ("r","l");

// console.log (`O e-mail ${email} foi cadastrado com sucesso, seja bem vindo ${nome}, o seu nome possui ${nome.length} carcteres, legal né?!`);
// console.log (`O Cebolinha falaria o seu nome assim: ${cebolinha}`);
// console.log (email.includes("@"));


