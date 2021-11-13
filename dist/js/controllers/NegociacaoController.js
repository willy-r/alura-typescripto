export class NegociacaoController {
    constructor() {
        this._inputData = document.querySelector('#data');
        this._inputQuantidade = document.querySelector('#quantidade');
        this._inputValor = document.querySelector('#valor');
    }
    adiciona() {
        console.log(this._inputData);
        console.log(this._inputQuantidade);
        console.log(this._inputValor);
    }
}
