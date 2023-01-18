import {CapturaDeFaces} from './alura-captura-de-faces.js';
import { Palavra } from './palavras.js';
import { jaPassouOIntervalo } from './temporizador.js';
import { criaGiraGira } from './giraGira.js';

let captura;
let palavras = [];
let font;
const dicionario = ["Guilherme", "Chocolate", "Doce de leite", "Chá"];
let giraGira;

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
  giraGira = criaGiraGira();
}

window.draw = function() {
    if(!captura.estaPronto()) {
        return;
    }

    giraGira.remove();

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
        palavra.atualiza();
    }
    palavras = palavras.filter(p => p.estaViva())


}