
export class Palavra {
    constructor(palavra, posicao) {
        this.palavra = palavra;
        this.posicao = posicao;
        this.tamanho = height / 10;
        this.tamanhoInicial = this.tamanho;
        console.log(`criando ${palavra}`);
    }

    atualiza = function() {
        const segundosPassados = deltaTime / 1000;

        const velocidadeDeEncolhimento = this.tamanhoInicial / 6;
        this.tamanho -= velocidadeDeEncolhimento * segundosPassados;

        this.posicao.x += 50 * segundosPassados;
        this.posicao.y += 50 * segundosPassados;

        fill(color("#6cd9ff"));

        textSize(this.tamanho);

        stroke("black");
        strokeWeight(this.tamanho / 20);
        textAlign(CENTER, CENTER);

        text(this.palavra, this.posicao.x, this.posicao.y);
    }

    estaViva = function() {
        return this.tamanho > 0;
    }

}