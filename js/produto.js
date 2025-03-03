"use strict";
var loja;
(function (loja) {
    class Produto {
        constructor(produto, preco) {
            this._produto = produto;
            this._preco = preco;
        }
        get produto() {
            return this._produto;
        }
        set produto(produto) {
            this._produto = produto;
        }
        get preco() {
            return this._preco;
        }
        set preco(preco) {
            this._preco = preco;
        }
        calcularPrecoFinal(imposto) {
            return this._preco + (this._preco * imposto / 100);
        }
    }
    loja.Produto = Produto;
})(loja || (loja = {}));
