namespace loja{
    export class Produto{

        private _produto:string;
        private _preco:number;
        
        constructor(produto: string, preco: number) {
            this._produto = produto;
            this._preco = preco;
        }

        get produto(){
            return this._produto;
        }

        set produto(produto:string){
            this._produto=produto;
        }

        get preco(){
            return this._preco;
        }

        set preco(preco:number){
            this._preco=preco;
        }
        
        public calcularPrecoFinal(imposto: number): number {
            return this._preco + (this._preco * imposto / 100);
        }

    }
}
