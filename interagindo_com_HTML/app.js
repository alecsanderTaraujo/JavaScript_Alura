let numeroSecreto = gerarNumeroAleatorio();
let numeroChute

function exibirTextoNaTela(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

exibirTextoNaTela('h1', 'Jogo do Número Secreto');
exibirTextoNaTela('p', 'Escolha um número entre 1 a 1000');

function gerarNumeroAleatorio() {
    return parseInt(Math.random() * 1000 + 1);
}


function verificarChute() {
    let chute = document.querySelector ('input').value;
    if (chute == numeroSecreto){
        console.log('acertou');
    }
    else{
        console.log('errou');
    }
    console.log (numeroSecreto);
}