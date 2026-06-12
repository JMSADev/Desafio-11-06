function mostrarResposta(){

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
    `;
}