import { Negociacao } from '../models/Negociacao.js';

export class Negociacoes {
  private _negociacoes: Array<Negociacao> = [];

  get negociacoes(): Array<Negociacao> {
    return this._negociacoes;
  }

  adiciona(negociacao: Negociacao) {
    this._negociacoes.push(negociacao);
  }

  lista(): ReadonlyArray<Negociacao> {
    return this._negociacoes;
  }
}
