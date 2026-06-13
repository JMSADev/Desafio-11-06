function mostrarResposta(){

<<<<<<< HEAD
    let distancia = Number(document.getElementById("distancia").value);
    let consumo = Number(document.getElementById("consumo").value);
    let preco = Number(document.getElementById("preco").value);
=======
    let distancia = 500;
    let consumo = 10;
    let preco = 6.50;
>>>>>>> 8e214e9c6ea527eb2a71fce098c07ab4856e1a9c

    let litros = distancia / consumo;
    let valor = litros * preco;

    document.getElementById("resultado").innerHTML = `
<<<<<<< HEAD
        Combustível necessário: ${litros.toFixed(2)} litros <br>
        Valor total: R$ ${valor.toFixed(2)}
=======
        <p>Distância: ${distancia} km</p>
        <p>Consumo: ${consumo} km/l</p>
        <p>Preço do combustível: R$ ${preco}</p>
        <br>
        <p>Combustível necessário: ${litros} litros</p>
        <strong>Valor total: R$ ${valor.toFixed(2)}</strong>
>>>>>>> 8e214e9c6ea527eb2a71fce098c07ab4856e1a9c
    `;
}