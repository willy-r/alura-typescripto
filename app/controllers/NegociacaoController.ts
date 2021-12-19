import { Negociacao } from "../models/Negociacao.js";
import { Negociacoes } from "../models/Negociacoes.js";

export class NegociacaoController {
  private _inputData: HTMLInputElement;
  private _inputQuantidade: HTMLInputElement;
  private _inputValor: HTMLInputElement;

  private _negociacoes = new Negociacoes();

  // Construtor não tipa.
  constructor() {
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

  private _criaNegociacao(): Negociacao {
    const date = new Date(this._inputData.value.replace(/-/g, ',')),
          quantidade = parseInt(this._inputQuantidade.value),
          valor = parseFloat(this._inputValor.value);
    
    return new Negociacao(date, quantidade, valor);
  }

  private _limpaFormulario() {
    this._inputData.value = '';
    this._inputQuantidade.value = '';
    this._inputValor.value = '';
    // Muda o foco para o input de data do formulário.
    this._inputData.focus();
  }
}
