namespace loja{

    let p = new Produto("", 0);

    const nmProduto = document.getElementById("nmProduto") as HTMLInputElement;
    const precoProd = document.getElementById("precoProd") as HTMLInputElement;
    const imp = document.getElementById("imp") as HTMLInputElement;
    const calc = document.getElementById("calc") as HTMLButtonElement;
    const res = document.getElementById("res") as HTMLTextAreaElement;
    const produto = document.getElementById("produto") as HTMLTextAreaElement;
    const preco = document.getElementById("preco") as HTMLTextAreaElement;
    const imposto = document.getElementById("imposto") as HTMLTextAreaElement;
    
    //inicia produto e preço com valores padrões
    produto.textContent = p.produto;
    preco.textContent = p.preco.toFixed(2);
    imposto.textContent = imp.value;
    
    calc.addEventListener("click", () => {
        const calcula = parseFloat(imp.value);
        // valida se os campos estão preenchidos corretamente
        if (nmProduto.value && precoProd.value && imp.value) {
            p.produto = nmProduto.value;
            p.preco = parseFloat(precoProd.value);

            //calcula o preço final com o imposto
            const precoFinal = p.calcularPrecoFinal(calcula);

            //atualizando os valores
            produto.textContent = `Nome do produto: ${p.produto}`;
            preco.textContent = `Preço do produto: R$${p.preco.toFixed(2)}`;
            //imposto.textContent = `Valor do imposto: R$${imp.value}`;
            res.textContent = `Preço final com imposto: R$${precoFinal.toFixed(2)}`;

        } else {
            alert("Preencha corretamente!");
        }
    });
    /*alteração do nome do produto
    nmProduto.addEventListener('change', () =>{
        nmProduto.value = p.produto
        nmProduto.oninput = () =>{
        produto.value = nmProduto.value;
        produto.value = `Nome do produto: ${p.produto}`;
    };
    });*/    
}