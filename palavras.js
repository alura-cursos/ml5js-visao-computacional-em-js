
export class Palavra {
    constructor(palavra, posicao) {
        this.palavra = palavra;
        this.posicao = posicao;
        console.log(`criando ${palavra}`);
    }

    desenha = function() {
        fill(color("#6cd9ff"));
        text(this.palavra, this.posicao.x, this.posicao.y);
    }

}