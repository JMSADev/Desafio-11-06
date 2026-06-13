function mostrarResposta(){

    let distancia = Number(document.getElementById("distancia").value);
    let consumo = Number(document.getElementById("consumo").value);
    let preco = Number(document.getElementById("preco").value);

    let litros = distancia / consumo;
    let valor = litros * preco;

    document.getElementById("resultado").innerHTML = `
        Combustível necessário: ${litros.toFixed(2)} litros <br>
        Valor total: R$ ${valor.toFixed(2)}
    `;
}