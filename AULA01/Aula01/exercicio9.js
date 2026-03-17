document.write("<h1>Aula 1 - Exercicio 9 </h1>");
var principal = parseFloat(prompt("digite o valor principal"));
var taxa = parseFloat(prompt("digite a taxa de juros"));
var tempo = parseFloat(prompt("digite o tempo"));
var montante = (principal *(1+(taxa * tempo)));
document.write ("o valor do montante é" +montante);