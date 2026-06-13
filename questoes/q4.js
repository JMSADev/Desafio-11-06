function mostrarResposta(){

    let nome = document.getElementById("nome").value;

    let nota1 = Number(document.getElementById("nota1").value);
    let nota2 = Number(document.getElementById("nota2").value);
    let nota3 = Number(document.getElementById("nota3").value);

    let media = (nota1 + nota2 + nota3) / 3;

    let situacao;

    if(media >= 6){
        situacao = "Aprovado";
    }else{
        situacao = "Reprovado";
    }

    document.getElementById("resultado").innerHTML = `
        Aluno: ${nome} <br>
        Média: ${media.toFixed(2)} <br>
        Situação: ${situacao}
    `;
}