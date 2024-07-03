//Desafios finais
//1. Crie um programa que utilize o console.log para exibir uma mensagem de boas-vindas.
console.log('Boas vindas');

//2.Crie uma variável chamada "nome" e atribua a ela o seu nome. Em seguida, utilize o console.log para exibir a mensagem "Olá, [seu nome]!" 
//no console do navegador.
let nome = 'Alecsander';
console.log(`Olá, ${nome}!`);

//3.Crie uma variável chamada "nome" e atribua a ela o seu nome. Em seguida, utilize o alert para exibir a mensagem "Olá, [seu nome]!" .
let nome_aluno = 'Alecsander';
alert(`Olá, ${nome_aluno}!`);

//4.Utilize o prompt e faça a seguinte pergunta: Qual a linguagem de programação que você mais gosta?. 
//Em seguida, armazene a resposta em uma variável e mostre no console do navegador.
let linguagem_de_Programação = prompt('Qual  a linguagem de programação preferida?');
console.log(linguagem_de_Programação);

//5.Crie uma variável chamada "valor1" e outra chamada "valor2", atribuindo a elas valores numéricos de sua escolha.
// Em seguida, realize a soma desses dois valores e armazene o resultado em uma terceira variável chamada "resultado". 
//Utilize o console.log para mostrar a mensagem "A soma de [valor1] e [valor2] é igual a [resultado]." no console.
let valor1 = 1;
let valor2 = 3;
let resultado_soma = valor1 + valor2;
console.log(`A soma de ${valor1} e ${valor2} é igual a ${resultado_soma}.`);

//6.Crie uma variável chamada "valor1" e outra chamada "valor2", atribuindo a elas valores numéricos de sua escolha. Em seguida,
// realize a subtração desses dois valores e armazene o resultado em uma terceira variável chamada "resultado". 
//Utilize o console.log para mostrar a mensagem "A diferença entre [valor1] e [valor2] é igual a [resultado]." no console.
let valor3 = 5;
let valor4 = 5;
let resultado_subt = valor3 - valor4;

console.log(`A diferença entre ${valor3} e ${valor4} é igual a ${resultado_subt}.`);

//7.Peça ao usuário para inserir sua idade com prompt. Com base na idade inserida, utilize um if para verificar se a pessoa é maior ou menor de idade,
// exibindo uma mensagem apropriada no console.

let idade = prompt('Digite a sua idade:');
if (idade > 18) {
    console.log('Você é maior de idade.');
} else {
    console.log('Você é menor de idade.');
}

//8.Crie uma variável "numero" e peça um valor com prompt verifique se é positivo, negativo ou zero. Use if-else para imprimir a respectiva mensagem.

let numero_inteiro = parseInt(prompt("Digite um número:"));


if (numero_inteiro > 0) {
    console.log("O número é positivo.");
} else if (numero_inteiro < 0) {
    console.log("O número é negativo.");
} else {
    console.log("O número é zero.");
}

//9.Use um loop while para imprimir os números de 1 a 10 no console.
let valor = 1;
while (valor <= 10) {
    console.log(valor);
    valor++;
}

//10.Crie uma variável "nota" e atribua um valor numérico a ela. Use if-else para determinar se a nota é maior ou igual a 7 e exiba "Aprovado" ou "Reprovado" 
//no console.
let nota = prompt("Digite nota: "); 

if (nota >= 7) {
    console.log("Aprovado");
} else {
    console.log("Reprovado");
}

//11.Use o Math.random para gerar qualquer número aleatório e exiba esse número no console.
let numeroAleatorio = Math.random();
console.log(numeroAleatorio);

//12.Use o Math.random para gerar um número inteiro entre 1 e 10 e exiba esse número no console.
let N_inteiro = parseInt(Math.random() * 10) + 1;
console.log(N_inteiro);

//13.Use o Math.random para gerar um número inteiro entre 1 e 1000 e exiba esse número no console.
let N_aleatorio = parseInt(Math.random() * 1000) + 1;
console.log(N_aleatorio);