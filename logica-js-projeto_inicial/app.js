alert("Boas Vindas ao jogo do número secreto");
let numeroMaximo = 1000;
let numeroSecreto = parseInt(Math.random () * numeroMaximo + 1);
console.log(numeroSecreto);
let numeroChute;
let tentativas = 1;


while(numeroChute != numeroSecreto){
    numeroChute = prompt(`Qual valor do numero secreto de 0 a ${numeroMaximo}`);
    if (numeroSecreto == numeroChute){
        break;
    }
    
    else{
        if(numeroSecreto > numeroChute){
        alert(`Numero Secreto é maior do que o chute ${numeroChute}`);
        } 
        else{
        alert(`Numero Secreto é menor do que o chute ${numeroChute}`);
        }
        tentativas++;
    }
}

let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
alert(`Você Acertou o número secreto ${numeroSecreto} com ${tentativas} ${palavraTentativa}!`);


