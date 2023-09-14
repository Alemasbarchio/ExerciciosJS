class CaixaLapis {
    constructor(cores, qtdeLapis) {
        this.cores = cores;
        this.qtdeLapis = qtdeLapis;
    }

    colocarLapisCaixa() {
        alert("na Caixa de Lapis tem " + this.qtdeLapis + " Lapis" + " das cores\n " + this.cores)

    }

    excluirLapisCaixa() {

        if (listaLapis.length > 1) {
            alert("agora na Caixa de Lapis tem " + this.qtdeLapis + " Lapis" + " das cores\n " + this.cores)
        }

        else {
            alert("agora na Caixa de Lapis tem " + this.qtdeLapis + " Lapis" + " das cor\n " + this.cores)

        }
    }

}

const listaLapis = [];
const numeroLapis = prompt("Digite quantos lapis deseja guardar na caixa")
while (listaLapis.length != numeroLapis) {
    const guardar = prompt("Digite o nome das cores do Lápis");
    listaLapis.push(guardar);

}

const lapis = new CaixaLapis(listaLapis, numeroLapis);
lapis.colocarLapisCaixa();
let excluirLapis;
excluirLapis = prompt("Exclua um Lapis\n " + listaLapis);
listaLapis.forEach((cor, index) => {
    if (cor === excluirLapis) {
        alert("Lapis excluido da cor " + listaLapis.splice(index, 1));
    }
});

const novoLapis = new CaixaLapis(listaLapis, listaLapis.length);
novoLapis.excluirLapisCaixa();
