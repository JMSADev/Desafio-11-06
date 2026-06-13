function mostrarResposta(){

    let lado1 = Number(document.getElementById("lado1").value);
    let lado2 = Number(document.getElementById("lado2").value);
    let lado3 = Number(document.getElementById("lado3").value);

    let tipo;

    if(lado1 === lado2 && lado2 === lado3){
        tipo = "Equilátero";
    }
    else if(
        lado1 === lado2 ||
        lado1 === lado3 ||
        lado2 === lado3
    ){
        tipo = "Isósceles";
    }
    else{
        tipo = "Escaleno";
    }

    document.getElementById("resultado").innerHTML =
    `Tipo do triângulo: ${tipo}`;
}