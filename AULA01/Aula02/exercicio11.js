function calcula(){
    let valorkm = Number(document.getElementById("valorkm").value);
    let quantkm = Number(document.getElementById("quantkm").value);
    let quantmin = Number(document.getElementById("quantmin").value);

let valorcorrida
valorcorrida = (valorkm * quantkm) + (quantmin * 0.50)

document.getElementById("valortotal").innerHTML ="<p>o valor total da corrida é "+ valorcorrida +"</p>";




}