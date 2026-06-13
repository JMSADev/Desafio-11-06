function mostrarResposta(){

<<<<<<< HEAD
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
=======
    let nome = "Maria";
    let peso = 70;
    let altura = 1.70;

    let imc = peso / (altura * altura);

    let risco;

    if(imc < 20){
        risco = "Abaixo do peso";
    }
    else if(imc <= 25){
        risco = "Normal";
    }
    else if(imc <= 30){
        risco = "Excesso de peso";
    }
    else if(imc <= 35){
        risco = "Obesidade";
    }
    else{
        risco = "Obesidade mórbida";
    }

    document.getElementById("resultado").innerHTML = `
        <p>Paciente: ${nome}</p>
        <p>Peso: ${peso}kg</p>
        <p>Altura: ${altura}m</p>
        <br>
        <p>IMC: ${imc.toFixed(2)}</p>
        <strong>${risco}</strong>
>>>>>>> 8e214e9c6ea527eb2a71fce098c07ab4856e1a9c
    `;
}