function parcela(){
    let valor = Number(document.getElementById("valor").value);
    let taxa = Number(document.getElementById("taxa").value);
    let tempo = Number(document.getElementById("tempo").value);

let vpd
vpd = valor + (valor * (taxa**2/100 ) * tempo);
document.getElementById("valpar").innerHTML ="<p>o valor da parcela é "+ vpd + "</p>"

}