import { movimentoEmFluxo } from "./movimento.js";

export class Palavra {
    constructor(palavra, posicao) {
        this.palavra = palavra;
        this.posicao = posicao;
        this.tamanho = height / 10;
        this.tamanhoInicial = this.tamanho;
        const corAleatoria = random(["red", "white", "#6cd9ff"]);
        this.cor = color(corAleatoria);
        console.log(`criando ${palavra}`);
    }

    atualiza = function() {
        const segundosPassados = deltaTime / 1000;

        const velocidadeDeEncolhimento = this.tamanhoInicial / 6;
        this.tamanho -= velocidadeDeEncolhimento * segundosPassados;

        // this.posicao.x += 50 * segundosPassados;
        // this.posicao.y += 50 * segundosPassados;

        const diferenca = movimentoEmFluxo(this.posicao);
        this.posicao.x += diferenca.x * segundosPassados;
        this.posicao.y += diferenca.y * segundosPassados;

        fill(this.cor);

        textSize(this.tamanho);

        stroke("black");
        strokeWeight(this.tamanho / 20);
        textAlign(CENTER, CENTER);

        text(this.palavra, this.posicao.x, this.posicao.y);
    }

    estaViva = function() {
        return this.tamanho > 0 && this.posicao.x >=0 &&
            this.posicao.y >= 0 && this.posicao.x < width &&
            this.posicao.y < height;
    }

}