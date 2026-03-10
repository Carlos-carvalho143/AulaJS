document.write("<h1>Aula 01 - exercicio 3</h1>");
var valor = parseFloat(prompt("digite o valor"));
var taxa = parseFloat(prompt(" digite a taxa"));
var tempo = parseFloat(prompt("digite o tempo"));

var valor_parcela = valor + (valor * (taxa**2/100 ) * tempo);
document.write("o valor ficara " + valor_parcela);