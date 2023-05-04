/*1 - Elabore alguns códigos e imprima o resultado no console usando o console.log, um para cada operação aritmética básica. 
Seu código deve ter duas variáveis, a e b, definidas no começo com os valores que serão operados. Escreva códigos para:
let a = 5;
let b = 8;

console.log("Adição :", a + b);
console.log("Subtração :", a - b);
console.log("Multiplicação :", a * b);
console.log("Divisão :", a / b);
console.log("Módulo :", b % a);

-------------------------------------------------------------*/
/*2 - Utilize if/else para escrever um código que retorne o maior de dois números. 
Defina, no começo do seu código, duas variáveis com os valores que serão comparados.

/*let c = 25;
let d = 34;

if (c > d) {
    console.log("O número :", c ,"é maior");
} else 
    console.log("o numero :", d ,"é maior");
--------------------------------------------------------------------------*/
/*3 - Utilize if/else para escrever um código que retorne o maior de três números. 
Defina, no começo do seu código, três variáveis com os valores que serão comparados.

/*let number1 = 35;
let number2 = 45;
let number4 = 65;

if (number1 > number2 && number1 > number4) {
    console.log(number1 , "é maio");
} else if (number2 > number1 && number2 > number4) {
    console.log(number2 , "é maior");
} else {
    console.log (number4, "é maior");
}
-------------------------------------------------------------*/
/*4 - Utilize if/else para escrever um código que, dado um valor recebido como parâmetro, retorne: 
“positive”, se esse valor for positivo; “negative”, se esse valor for negativo, e “zero”, caso esse valor não seja nem positivo nem negativo.

let number = 0;

if (number > 0) {
    console.log("número positivo");
} else if (number < 0) {
    console.log("número negativo");
} else {
    console.log("zero");
}
--------------------------------------------------------------------------*/
/*5 - 🚀 Utilize if/else para escrever um código que defina três variáveis com os valores dos três ângulos internos de um triângulo. 
Retorne true se os ângulos representarem os ângulos de um triângulo e false, caso contrário. Se algum ângulo for inválido, 
você deve retornar uma mensagem de erro.

let a = 45;
let b = 45;
let c = 90;


if (a + b + c === 180) {
    console.log("true");    
} else if (a + b + c > 180 || a + b + c > 0) {
    console.log("false");
} else {
    console.log("erro");
}
---------------------------------------------------------------------------*/
/*6 - Utilize switch/case para escrever um código que receba o nome de uma peça de xadrez e retorne os movimentos que ela pode fazer.

Como desafio, escreva um código para funcionar tanto se receber o nome de uma peça com letras maiúsculas quanto com letras minúsculas, sem aumentar a quantidade de condicionais.

Como dica, você pode pesquisar uma função que faça uma string ficar com todas as letras minúsculas (lower case).

Se a peça passada for inválida, o código deve retornar uma mensagem de erro.

Exemplo: bishop (bispo) -> diagonals (diagonais)

let peca1 = 'Bishop';

switch (peca1.toLowerCase()) {
    case 'bishop':
        console.log("diagonais");
        break;
    default:
        console.log("erro");    
}
-------------------------------------------------------------------------*/
/*7 - Utilize if/else para escrever um código que converta uma nota dada em porcentagem (de 0 a 100) em conceitos de A a F. Siga as seguintes regras:

Porcentagem >= 90 -> A
Porcentagem >= 80 -> B
Porcentagem >= 70 -> C
Porcentagem >= 60 -> D
Porcentagem >= 50 -> E
Porcentagem < 50 -> F

O código deve retornar uma mensagem de erro e encerrar se a nota passada for menor que 0 ou maior que 100.*/
let nota = 50;

if (nota >= 90 && nota < 100) {
    console.log("A");
} else if(nota >= 80 && nota < 90) {
    console.log("B");
}else if(nota >= 70 && nota < 80) {
    console.log("C");
}else if(nota >= 60 && nota < 70) {
    console.log("D");
}else if(nota >= 50 && nota < 60) {
    console.log("E");
}else if(nota < 50 && nota > 0)   {
    console.log("F");
}else if(nota <=0 || nota > 100) {
    console.log("ERRO");
}






