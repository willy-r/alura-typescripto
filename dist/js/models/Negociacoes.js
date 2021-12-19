export class Negociacoes {
    constructor() {
        this._negociacoes = [];
    }
    get negociacoes() {
        return this._negociacoes;
    }
    adiciona(negociacao) {
        this._negociacoes.push(negociacao);
    }
    lista() {
        return this._negociacoes;
    }
}
