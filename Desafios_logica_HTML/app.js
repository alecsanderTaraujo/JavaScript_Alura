//1.Altere o conteúdo da tag h1 com document.querySelector 
//e atribua o seguinte texto: Hora do Desafio.
let titulo = document.querySelector ('h1');
titulo.innerHTML = 'Hora do Desafio';

//2.Crie uma função que exiba no console a mensagem O botão foi clicado sempre que o botão Console for pressionado.
function exibirMensagemNoConsole() {
    console.log('O botão foi clicado!');
}

//3.Crie uma função que exiba um alerta com a mensagem: Eu amo JS, sempre que o botão Alerta for pressionado.
function exibirAlerta() {
    alert('Eu amo Js');
}

//4.Crie uma função que é executada quando o botão prompt é clicado, perguntando o nome de uma cidade do Brasil. 
//Em seguida, exiba um alerta com a mensagem concatenando a resposta com o texto: Estive em {cidade} e lembrei de você.

function exibirCidade(){

    let cidade = prompt('Informe o nome de uma cidade do Brasil: ');
    alert (`Cidade informada foi ${cidade}`);
}

//5.Ao clicar no botão soma, peça 2 números inteiros e exiba o resultado da soma em um alerta.
function somarValores(){
    let valor1 = parseInt (prompt('informe o primeiro valor: '));
    let valor2 = parseInt (prompt('informe o segundo valor: '));

    let resultado = valor1 + valor2;
    alert(`Resultado dos valores ${resultado}`);

}