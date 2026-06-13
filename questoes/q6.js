function mostrarResposta(){

    let nome = document.getElementById("nome").value;

    let peso = Number(
        document.getElementById("peso").value
    );

    let altura = Number(
        document.getElementById("altura").value
    );

    let imc = peso / (altura * altura);

    let classificacao;

    if(imc < 20){

        classificacao = "Abaixo do peso";

    }
    else if(imc <= 25){

        classificacao = "Normal";

    }
    else if(imc <= 30){

        classificacao = "Excesso de peso";

    }
    else if(imc <= 35){

        classificacao = "Obesidade";

    }
    else{

        classificacao = "Obesidade mórbida";

    }

    document.getElementById("resultado").innerHTML = `
        <h3>Resultado</h3>

        <p><strong>Paciente:</strong> ${nome}</p>

        <p><strong>IMC:</strong> ${imc.toFixed(2)}</p>

        <p><strong>Classificação:</strong> ${classificacao}</p>
    `;
}