function mostrarResposta(){

    let largura = Number(document.getElementById("largura").value);
    let altura = Number(document.getElementById("altura").value);

    let area = largura * altura;
    let tinta = area / 2;

    document.getElementById("resultado").innerHTML = `
        Área: ${area} m² <br>
        Tinta necessária: ${tinta} litros
    `;
}