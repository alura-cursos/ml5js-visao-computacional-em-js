import {CapturaDeFaces} from './alura-captura-de-faces.js';
import { Palavra } from './palavras.js';
import { jaPassouOIntervalo } from './temporizador.js';

let captura;
let palavras = [];
let font;
const dicionario = ["Guilherme", "Chocolate", "Doce de leite", "Chá"];

function novaPalavra(posicao) {
    const texto = random(dicionario);
    return new Palavra(texto, posicao);
}

window.preload = function() {
    font = loadFont("Dosis-Bold.ttf");
}

window.setup = function() {
    // console.log("rodando setup");
  createCanvas(400, 400);
  captura = new CapturaDeFaces();
  textFont(font);
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