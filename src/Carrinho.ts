import { Geral } from './Geral'

export class Carrinho extends Geral{
  abandona():void{
    this.esvazia()
  }
}
