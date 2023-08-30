var nome;
var peso = 0;
var altura = 0;
var confirma = '';
var imc = 0;

informarDados();
function informarDados() {
    nome=prompt("Insira seu nome")
    peso = prompt("Insira seu Peso ");
    altura = prompt("Insira sua altura");
    calcularIMC();
    confirma = prompt( nome + " Deseja saber qual sua Classificação S ou N ?")

    if (confirma == "S" || confirma == "s") {
        verificaClassificacao();

    }
    else if (confirma = "n" || confirma == "N") {

        informarDados();
    }
}


function calcularIMC() {
    altura = altura / 100;
    console.log(altura);
    imc = (parseInt(peso) / (parseFloat(altura) * parseFloat(altura)));
    alert(nome + "Seu indice de Massa Corporal é :" + imc)

}


function verificaClassificacao() {
    if (imc < 18.5) {
        alert( nome + " com IMC de: " + imc + " você está Abaixo do Peso")
    }

    if (imc > 18.5 && imc <= 24.9) {
        alert( nome + " com IMC de: " + imc + " você está com Peso Adequado")
    }
    if (imc >= 25 && imc < 29.9) {
        alert( nome + " com IMC de: " + imc + "  você está com Sobrepeso")
    }
    else if (imc > 30 && imc < 34.9) {
        alert( nome + " com IMC de: " + imc + " você está com Obesidade Grau 1")

    }
    else if (imc > 35 && imc < 39.9) {
        alert(nome + " com IMC de: " + imc + " você está com Obesidade Grau 2")
    }

    else if (imc > 40) {
        alert(nome + " com IMC de: " + imc + " você está com Obesidade extrema")
    }

}

