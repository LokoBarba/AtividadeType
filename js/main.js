"use strict";
var loja;
(function (loja) {
    let p = new loja.Produto();
    const nmProduto = document.getElementById("nmProduto");
    const precoProd = document.getElementById("precoProd");
    const imp = document.getElementById("imp");
    const calc = document.getElementById("calc");
    calc.addEventListener("click", () => {
        p.produto = nmProduto.value;
        p.preco = parseFloat(precoProd.value);
        p.imposto = parseFloat(imp.value);
        p.calcularPrecoFinal;
        document.getElementById("produto").textContent = p.produto;
        document.getElementById("preco").textContent = p.preco.toString();
        document.getElementById("imposto").textContent = p.imposto.toString();
        document.getElementById("res").textContent = p.calcularPrecoFinal().toLocaleString();
    });
})(loja || (loja = {}));
