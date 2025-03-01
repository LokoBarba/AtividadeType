namespace loja{

    let p = new Produto();

    const nmProduto = document.getElementById("nmProduto") as HTMLInputElement;
    const precoProd = document.getElementById("precoProd") as HTMLInputElement;
    const imp = document.getElementById("imp") as HTMLInputElement;
    const calc = document.getElementById("calc") as HTMLInputElement;

    calc.addEventListener("click", ()=>{

        p.produto = nmProduto.value;
        p.preco = parseFloat(precoProd.value);
        p.imposto = parseFloat(imp.value);
        p.calcularPrecoFinal;

        document.getElementById("produto").textContent = p.produto;
        document.getElementById("preco").textContent = p.preco.toString();
        document.getElementById("imposto").textContent = p.imposto.toString();
        document.getElementById("res").textContent = p.calcularPrecoFinal().toLocaleString();

    })

}