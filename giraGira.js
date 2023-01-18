export function criaGiraGira() {
    const componente = createImg("spinner200.gif", "a imagem de programa carregando");
    componente.size(100, 100);
    const meioDaLargura = width / 2 - componente.width / 2;
    const meioDaAltura = height / 2 - componente.height / 2;
    componente.position(meioDaLargura, meioDaAltura);
    return componente;
}