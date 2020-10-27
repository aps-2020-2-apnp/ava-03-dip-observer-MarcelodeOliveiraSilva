import { Produto } from './Produto'

export class Pedido {
  produtos: Produto[]
  constructor(produtos: Produto[]) {
    this.produtos = produtos
  }
}
