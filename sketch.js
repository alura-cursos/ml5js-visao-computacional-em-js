import {CapturaDeFaces} from './alura-captura-de-faces.js';
import { Palavra } from './palavras.js';
import { jaPassouOIntervalo } from './temporizador.js';

let captura;
let palavras = [];

function novaPalavra(posicao) {
    return new Palavra("Guilherme", posicao);
}

window.setup = function() {
    // console.log("rodando setup");
  createCanvas(400, 400);
  captura = new CapturaDeFaces();
}

window.draw = function() {
    captura.desenha();

    const face = captura.face();
    if(face !== undefined) {
        // console.log(face);
        if(face.boca.situacao === "aberta") {
            if(jaPassouOIntervalo()) {
                const palavra = novaPalavra(face.boca.centro);
                palavras.push(palavra);
            }
        }
    }


    for(const palavra of palavras) {
        palavra.desenha();
    }


}