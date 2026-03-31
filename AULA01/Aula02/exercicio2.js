function celsius(){
    let fah = Number(document.getElementById("fah").value);
let cel
cel = ((Number(fah - 32)* 5)/ 9)
document.getElementById("resultado").innerHTML ="<p>a temperatura "+ fah +" em celsius é" + cel +"</p>";


}