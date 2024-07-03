//Desafios
//1.Crie um contador que comece em 1 e vá até 10 usando um loop while. Mostre cada número.
let contador =  1;

while(contador <= 10){
        alert (`Somando +1 ${contador}`);
        contador ++;
}

alert (`Contador chegou ao maximo ${contador}`);

//2.Crie um contador que começa em 10 e vá até 0 usando um loop while. Mostre cada número.
    let numero = 10;

while(numero >= 0){
    alert(`Reduzindo em -1 ${numero}`);
    numero --;
}
alert(`Contador chegou a 0 ${numeroumero}`);

//3.Crie um programa de contagem regressiva. Peça um número e conte deste número até 0, usando um loop while no console do navegador.
    let pedido = prompt("Digite o numero de pedido: ");

while(pedido >= 0){
    console.log (`pedido Entregue ${pedido}`);
    pedido --;
    }

    console.log("Todos os pedidos foram entregues");

//4.Crie um programa de contagem progressiva. Peça um número e conte de 0 até esse número, usando um loop while no console do navegador.

let coxinha = 0 
let fritar = prompt("Digite o numero de coxinhas que deseja: ");

while(coxinha <= fritar ){
    console.log (`Fritando uma coxinha ${coxinha}`);
    coxinha ++;
    }

    console.log("Todos as Coxinhas foram fritas");