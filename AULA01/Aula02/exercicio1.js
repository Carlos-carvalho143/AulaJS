function exemplo2(){
    let num = Number(document.getElementById("num").value);
    let quadrado, cubo;
    quadrado = num*num
    cubo = num*num*num
    document.getElementById("resultado").innerHTML = "<p> O quardrado do numero é" + quadrado + " e o cubo é "+ cubo + "</p>"
    }