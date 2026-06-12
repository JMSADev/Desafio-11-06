function mostrarResposta(){

    let num1 = 10;
    let num2 = 20;
    let num3 = 30;

    let media = (num1 + num2 + num3) / 3;

    document.getElementById("resultado").innerHTML = `
        <p>Número 1: ${num1}</p>
        <p>Número 2: ${num2}</p>
        <p>Número 3: ${num3}</p>
        <br>
        <strong>Média: ${media}</strong>
    `;
}