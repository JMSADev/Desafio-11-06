function mostrarResposta(){

<<<<<<< HEAD
    let nome = document.getElementById("nome").value;

    let nota1 = Number(document.getElementById("nota1").value);
    let nota2 = Number(document.getElementById("nota2").value);
    let nota3 = Number(document.getElementById("nota3").value);
=======
    let nome = "João";
    let nota1 = 7;
    let nota2 = 8;
    let nota3 = 6;
>>>>>>> 8e214e9c6ea527eb2a71fce098c07ab4856e1a9c

    let media = (nota1 + nota2 + nota3) / 3;

    let situacao;

    if(media >= 6){
        situacao = "Aprovado";
    }else{
        situacao = "Reprovado";
    }

    document.getElementById("resultado").innerHTML = `
<<<<<<< HEAD
        Aluno: ${nome} <br>
        Média: ${media.toFixed(2)} <br>
        Situação: ${situacao}
=======
        <p>Aluno: ${nome}</p>
        <p>Nota 1: ${nota1}</p>
        <p>Nota 2: ${nota2}</p>
        <p>Nota 3: ${nota3}</p>
        <br>
        <p>Média: ${media}</p>
        <strong>${situacao}</strong>
>>>>>>> 8e214e9c6ea527eb2a71fce098c07ab4856e1a9c
    `;
}