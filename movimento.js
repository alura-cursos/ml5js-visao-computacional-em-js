
const semente = Math.random();

const VELOCIDADE_MAXIMA = 300;

export function movimentoEmFluxo(posicao) {

    const pedacoX = Math.floor((posicao.x) / 200);
    const pedacoY = Math.floor((posicao.y) / 200);
    const a = 100 * pedacoX + semente;
    const b = 100 * pedacoY;
    const posicaoX = VELOCIDADE_MAXIMA * (noise(a, b, 100) - 0.5);
    const posicaoY = VELOCIDADE_MAXIMA * (noise(a, b, 2000) - 0.5);
    return {
        x: posicaoX,
        y: posicaoY
    };
}

