
export class Palavra {
    constructor(palavra, posicao) {
        this.palavra = palavra;
        this.posicao = posicao;
        console.log(`criando ${palavra}`);
    }

    desenha = function() {
        fill(color("#6cd9ff"));

        const tamanho = height / 10;
        textSize(tamanho);

        stroke("black");
        strokeWeight(tamanho / 20);
        textAlign(CENTER, CENTER);

        text(this.palavra, this.posicao.x, this.posicao.y);
    }

}