function mostrarResposta(){

<<<<<<< HEAD
    let num1 = Number(document.getElementById("num1").value);
    let num2 = Number(document.getElementById("num2").value);
    let num3 = Number(document.getElementById("num3").value);

    let media = (num1 + num2 + num3) / 3;

    document.getElementById("resultado").innerHTML =
    `A média é ${media.toFixed(2)}`;
=======
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
>>>>>>> 8e214e9c6ea527eb2a71fce098c07ab4856e1a9c
}