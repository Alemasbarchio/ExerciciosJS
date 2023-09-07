let recebeN1;
let TotalNumeros = 0;
let totalSoma = 0;
let Media = 0;

let exibirSomaMedia = () => {

    while (true) {
        recebeN1 = prompt("Digite um número para somar e obter a média ou sair para encerrar");
        if (recebeN1.toLocaleLowerCase() === "sair") {
            break;
        }

        totalSoma += parseInt(recebeN1);
        TotalNumeros++;
        Media = totalSoma / TotalNumeros;

        alert(" Por enquanto a SOMA é " + totalSoma +

            " e a média é  " + Media + " de um total de " + TotalNumeros + " números digitados");
    }


}

exibirSomaMedia();