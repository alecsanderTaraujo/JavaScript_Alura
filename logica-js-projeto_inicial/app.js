alert("Boas Vindas ao jogo do número secreto"); alert("Olá Vamos começar");
let numeroSecreto = 9;
console.log(numeroSecreto)
let numeroChute = prompt("Qual valor do numero secreto de 0 a 100");


if (numeroSecreto == numeroChute){
    alert(`Você Acertou o número secreto ${numeroSecreto}`);
}
else{
    alert(`Você Errou, Seu chute foi" ${numeroChute} e o Número Secreto era ${numeroSecreto}`);
}
