function mostrarResposta(){

    let nome = "João";
    let nota1 = 7;
    let nota2 = 8;
    let nota3 = 6;

    let media = (nota1 + nota2 + nota3) / 3;

    let situacao;

    if(media >= 6){
        situacao = "Aprovado";
    }else{
        situacao = "Reprovado";
    }

    document.getElementById("resultado").innerHTML = `
        <p>Aluno: ${nome}</p>
        <p>Nota 1: ${nota1}</p>
        <p>Nota 2: ${nota2}</p>
        <p>Nota 3: ${nota3}</p>
        <br>
        <p>Média: ${media}</p>
        <strong>${situacao}</strong>
    `;
}