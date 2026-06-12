
// QUESTÃO 1

let num1 = 10;
let num2 = 20;
let num3 = 30;

let mediaNumeros = (num1 + num2 + num3) / 3;

console.log("QUESTÃO 1");
console.log("Média =", mediaNumeros);


// QUESTÃO 2

let largura = 5;
let alturaParede = 3;

let area = largura * alturaParede;
let tinta = area / 2;

console.log("\nQUESTÃO 2");
console.log("Área =", area, "m²");
console.log("Tinta necessária =", tinta, "litros");


// QUESTÃO 3

let distancia = 500;
let consumo = 10;
let preco = 6.5;

let litros = distancia / consumo;
let valor = litros * preco;

console.log("\nQUESTÃO 3");
console.log("Combustível necessário =", litros, "litros");
console.log("Valor = R$", valor.toFixed(2));



// QUESTÃO 4


let nomeAluno = "João";

let nota1 = 7;
let nota2 = 8;
let nota3 = 6;

let mediaAluno = (nota1 + nota2 + nota3) / 3;

console.log("\nQUESTÃO 4");
console.log("Aluno:", nomeAluno);
console.log("Média:", mediaAluno);

if (mediaAluno >= 6) {
    console.log("Aprovado");
} else {
    console.log("Reprovado");
}


// QUESTÃO 5

let lado1 = 5;
let lado2 = 5;
let lado3 = 5;

console.log("\nQUESTÃO 5");

if (lado1 === lado2 && lado2 === lado3) {
    console.log("Triângulo Equilátero");
} else if (
    lado1 === lado2 ||
    lado1 === lado3 ||
    lado2 === lado3
) {
    console.log("Triângulo Isósceles");
} else {
    console.log("Triângulo Escaleno");
}



// QUESTÃO 6

let nomePaciente = "Maria";
let peso = 70;
let alturaPaciente = 1.70;

let imc = peso / (alturaPaciente * alturaPaciente);

console.log("\nQUESTÃO 6");
console.log("Paciente:", nomePaciente);
console.log("IMC:", imc.toFixed(2));

if (imc < 20) {
    console.log("Abaixo do peso");
} else if (imc <= 25) {
    console.log("Normal");
} else if (imc <= 30) {
    console.log("Excesso de peso");
} else if (imc <= 35) {
    console.log("Obesidade");
} else {
    console.log("Obesidade mórbida");
}