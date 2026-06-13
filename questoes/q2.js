function mostrarResposta(){

<<<<<<< HEAD
    let largura = Number(document.getElementById("largura").value);
    let altura = Number(document.getElementById("altura").value);
=======
    let largura = 5;
    let altura = 3;
>>>>>>> 8e214e9c6ea527eb2a71fce098c07ab4856e1a9c

    let area = largura * altura;
    let tinta = area / 2;

    document.getElementById("resultado").innerHTML = `
<<<<<<< HEAD
        Área: ${area} m² <br>
        Tinta necessária: ${tinta} litros
=======
        <p>Largura: ${largura}m</p>
        <p>Altura: ${altura}m</p>
        <br>
        <p>Área: ${area}m²</p>
        <strong>Tinta necessária: ${tinta} litros</strong>
>>>>>>> 8e214e9c6ea527eb2a71fce098c07ab4856e1a9c
    `;
}