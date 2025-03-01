"use strict";
var loja;
(function (loja) {
    class Produto {
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
        get imposto() {
            return this._imposto;
        }
        set imposto(imposto) {
            this._imposto = imposto;
        }
        calcularPrecoFinal(imp1) {
            return imp1 / this._preco;
        }
    }
    loja.Produto = Produto;
})(loja || (loja = {}));
