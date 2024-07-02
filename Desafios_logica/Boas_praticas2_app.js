
// 1. Pergunte ao usuário qual é o dia da semana. Se a resposta for "Sábado" ou "Domingo", mostre "Bom fim de semana!". 
// Caso contrário, mostre "Boa semana!".
let dia_da_semana = prompt("Digite o dia da semana: Segunda, Terça, Quarta, Quinta, Sexta, Sábado ou Domingo: ");

if (dia_da_semana == "Sábado" || dia_da_semana == "Domingo"){
    alert("Bom fim de semana!");
} else {
    alert("Boa semana!");
}

//2. Verifique se um número digitado pelo usuário é positivo ou negativo. Mostre um alerta informando.
let numero = prompt("Digite um numero positivo ou negativo: ");

    if (numero >= 1){
        alert("Numero Positivo");
    }
    else if(numero == 0){
        alert("Você digitou 0");
    }
    else{
        alert("Numero negativo");
    }
//3. Crie um sistema de pontuação para um jogo. Se a pontuação for maior ou igual a 100, mostre "Parabéns, você venceu!". 
//Caso contrário, mostre "Tente novamente para ganhar.".
let pontuação = prompt("Digite a pontuação do jogador: ");

    if (pontuação >= 100){
        alert("Parabens Você venceu!");
    }
    else{
        alert("Tente novamente para ganhar.");
    }


//4.Crie uma mensagem que informa o usuário sobre o saldo da conta, usando uma template string para incluir o valor do saldo.
 let saldo = 1000;

 alert(`Seu Saldo Atual é de R$ ${saldo}`);

//5.Peça ao usuário para inserir seu nome usando prompt. Em seguida, mostre um alerta de boas-vindas usando esse nome.
let nome = prompt("Insira seu nome: ");

alert(`Boas-vindas ${nome}`);