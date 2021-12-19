import { Negociacao } from "../models/Negociacao.js";
import { Negociacoes } from "../models/Negociacoes.js";
export class NegociacaoController {
    // Construtor não tipa.
    constructor() {
        this._negociacoes = new Negociacoes();
        this._inputData = document.querySelector('#data');
        this._inputQuantidade = document.querySelector('#quantidade');
        this._inputValor = document.querySelector('#valor');
    }
    adiciona() {
        const negociacao = this._criaNegociacao();
        this._negociacoes.adiciona(negociacao);
        console.log(this._negociacoes.lista());
        this._limpaFormulario();
    }
    _criaNegociacao() {
        const date = new Date(this._inputData.value.replace(/-/g, ',')), quantidade = parseInt(this._inputQuantidade.value), valor = parseFloat(this._inputValor.value);
        return new Negociacao(date, quantidade, valor);
    }
    _limpaFormulario() {
        this._inputData.value = '';
        this._inputQuantidade.value = '';
        this._inputValor.value = '';
        // Muda o foco para o input de data do formulário.
        this._inputData.focus();
    }
}
