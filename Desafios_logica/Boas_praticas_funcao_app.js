//1.Criar uma função que exibe "Olá, mundo!" no console.
function exibirTexto() {
    console.log('Olá Mundo');    
}

exibirTexto();
//2.Criar uma função que recebe um nome como parâmetro e exibe "Olá, [nome]!" no console.
function apresentar(nome){
    console.log(`Olá ${nome}!`);
}

apresentar('João');
//3.Criar uma função que recebe um número como parâmetro e retorna o dobro desse número.
function multiplicar(a){
    let resultado = a * 2; 
}

let a = prompt("informe um valor para ser dobrado: ");
multiplicar(a);
console.log(`Resultado é ${resultado}`);

//4.Criar uma função que recebe três números como parâmetros e retorna a média deles.
function media(nota1, nota2, nota3){
    let resultado_media = (nota1 + nota2 + nota3) / 3
}

let nota1 = prompt("informe nota 1: ");
let nota2 = prompt("informe nota 2: ");
let nota3 = prompt("infome nota 3");
console.log(`Resultado é ${resultado_media}`);

media(nota1,nota2,nota3);
//5.Criar uma função que recebe dois números como parâmetros e retorna o maior deles.
function encontrarMaior(a, b) {
    return a > b ? a : b;
  }
  
  let maiorNumero = encontrarMaior(7, 9);
  console.log(maiorNumero);

//6.Criar uma função que recebe um número como parâmetro e retorna o resultado da multiplicação desse número por ele mesmo

function quadrado(numero) {
    return numero * numero;
  }
  
  let resultado = quadrado(2);
  console.log(resultado); 