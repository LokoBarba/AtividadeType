namespace loja{
    export class Produto{

        private _produto:string;
        private _preco:number;
        private _imposto:number;

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

        get imposto(){
            return this._imposto;
        }

        set imposto(imposto:number){
            this._imposto=imposto;
        }
        

        public calcularPrecoFinal(imp1:number):number{
            return imp1 / this._preco;
        }

    }
}
