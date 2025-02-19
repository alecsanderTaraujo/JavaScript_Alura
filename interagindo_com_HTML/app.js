let listaDeNumerosSorteados = [];
let numeroLimite = 1000
let numeroSecreto = gerarNumeroAleatorio();
let numeroChute
let tentativas = 1;

function exibirTextoNaTela(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2});
}

function exibirMensagemInicial() {
    exibirTextoNaTela('h1', 'Jogo do Número Secreto');
    exibirTextoNaTela('p', 'Escolha um número entre 1 a 1000');
}

exibirMensagemInicial();

function gerarNumeroAleatorio() {
    let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
    let quantidadeDeElementosNaLista = listaDeNumerosSorteados.length;
    if (quantidadeDeElementosNaLista == 100){
        listaDeNumerosSorteados = [];
    }
    if (listaDeNumerosSorteados.includes(numeroEscolhido)){
        return gerarNumeroAleatorio();
    } else {
        listaDeNumerosSorteados.push(numeroEscolhido);
        console.log(listaDeNumerosSorteados);
        return numeroEscolhido;
    }
}


function verificarChute() {
    let chute = document.querySelector ('input').value;
   
    if (chute == numeroSecreto){
         exibirTextoNaTela('h1','Acertou');
         let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
         let mensagemTentativas = `Você descobriu o número Secreto com ${tentativas} ${palavraTentativa}!`;
         exibirTextoNaTela('p', `${mensagemTentativas}`);
         document.getElementById('reiniciar').removeAttribute('disabled');
    } 
    else{
        if(chute > numeroSecreto){
            exibirTextoNaTela('p','O número secreto é menor');
        } else{
            exibirTextoNaTela('p','O número secreto é maior');
        }
        tentativas++;
        limparCampo();
    }
}

function limparCampo() {
    chute = document.querySelector('input');
    chute.value = '';
}

function reiniciarJogo(){
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled',true);
}
