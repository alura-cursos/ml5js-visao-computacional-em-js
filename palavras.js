
export class Palavra {
    constructor(palavra, posicao) {
        this.palavra = palavra;
        this.posicao = posicao;
        this.tamanho = height / 10;
        console.log(`criando ${palavra}`);
    }

    desenha = function() {
        fill(color("#6cd9ff"));

        textSize(this.tamanho);

        stroke("black");
        strokeWeight(this.tamanho / 20);
        textAlign(CENTER, CENTER);

        text(this.palavra, this.posicao.x, this.posicao.y);
        this.tamanho -= 1;
    }

    estaViva = function() {
        return this.tamanho > 0;
    }

}