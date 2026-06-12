function mostrarResposta(){

    let lado1 = 5;
    let lado2 = 5;
    let lado3 = 8;

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

    document.getElementById("resultado").innerHTML = `
        <p>Lado 1: ${lado1}</p>
        <p>Lado 2: ${lado2}</p>
        <p>Lado 3: ${lado3}</p>
        <br>
        <strong>Triângulo ${tipo}</strong>
    `;
}