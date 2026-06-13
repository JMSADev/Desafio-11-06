function mostrarResposta(){

<<<<<<< HEAD
    let lado1 = Number(document.getElementById("lado1").value);
    let lado2 = Number(document.getElementById("lado2").value);
    let lado3 = Number(document.getElementById("lado3").value);
=======
    let lado1 = 5;
    let lado2 = 5;
    let lado3 = 8;
>>>>>>> 8e214e9c6ea527eb2a71fce098c07ab4856e1a9c

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

<<<<<<< HEAD
    document.getElementById("resultado").innerHTML =
    `Tipo do triângulo: ${tipo}`;
=======
    document.getElementById("resultado").innerHTML = `
        <p>Lado 1: ${lado1}</p>
        <p>Lado 2: ${lado2}</p>
        <p>Lado 3: ${lado3}</p>
        <br>
        <strong>Triângulo ${tipo}</strong>
    `;
>>>>>>> 8e214e9c6ea527eb2a71fce098c07ab4856e1a9c
}