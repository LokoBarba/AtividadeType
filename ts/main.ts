namespace loja{

    let p = new Produto("", 0);

    const nmProduto = document.getElementById("nmProduto") as HTMLInputElement;
    const precoProd = document.getElementById("precoProd") as HTMLInputElement;
    const imp = document.getElementById("imp") as HTMLInputElement;
    const calc = document.getElementById("calc") as HTMLButtonElement;
    const res = document.getElementById("res") as HTMLSpanElement;
    const produto = document.getElementById("produto") as HTMLSpanElement;
    const preco = document.getElementById("preco") as HTMLSpanElement;
    const imposto = document.getElementById("imposto") as HTMLSpanElement;
    
    //inicia produto e preço com valores padrões
    produto.textContent = p.produto;
    preco.textContent = p.preco.toFixed(2);
    
    //alteração do nome do produto
    nmProduto.addEventListener("input", () =>{
        p.produto = nmProduto.value;
        produto.textContent = p.produto
    })

    calc.addEventListener("click", () => {
        const imposto = parseFloat(imp.value);
        // valida se os campos estão preenchidos corretamente
        if (nmProduto.value && precoProd.value && imp.value) {
            p.produto = nmProduto.value;
            p.preco = parseFloat(precoProd.value);
            // Calculando o preço final com o imposto
            const precoFinal = p.calcularPrecoFinal(imposto);

            //atualizando os valores
            produto.textContent = p.produto;
            preco.textContent = p.preco.toFixed(2);
            imp.textContent = `${imposto}%`;
            res.textContent = `Preço final com imposto: R$${precoFinal.toFixed(2)}`;

        } else {
            alert("Preencha corretamente!");
        }
    
    });

}