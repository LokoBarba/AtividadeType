"use strict";
var loja;
(function (loja) {
    let p = new loja.Produto("", 0);
    const nmProduto = document.getElementById("nmProduto");
    const precoProd = document.getElementById("precoProd");
    const imp = document.getElementById("imp");
    const calc = document.getElementById("calc");
    const res = document.getElementById("res");
    nmProduto.value = p.produto;
    precoProd.value = p.preco.toFixed(2);
    calc.addEventListener("click", () => {
        const imposto = parseFloat(imp.value);
        // valida se os campos estão preenchidos corretamente
        if (nmProduto.value && precoProd.value && imp.value) {
            p.produto = nmProduto.value;
            p.preco = parseFloat(precoProd.value);
            // Calculando o preço final com o imposto
            const precoFinal = p.calcularPrecoFinal(imposto);
            //exibir preço final
            res.textContent = `Preço final com imposto: R$${precoFinal.toFixed(2)}`;
        }
        else {
            alert("Preencha corretamente!");
        }
        // funcionalidade para alterar o nome na tela
        nmProduto.addEventListener("input", () => {
            p.produto = nmProduto.value;
        });
    });
})(loja || (loja = {}));
