import { Produto } from './Produto'
import { Pedido } from './Pedido'
import { IObservador } from './IObservador'


// API
export class Geral {
  readonly observadores : IObservador[] = []
  readonly produtos: Produto[] = []

  adiciona(p: Produto) {
    this.notificaAdicao(p)
    this.produtos.push(p)
  }

  private notificaAdicao(p: Produto){
    for (const observador of this.observadores){
      observador.quandoAdiciona(p)
    }
  }

  remove(p: Produto): void {
    const i = this.produtos.indexOf(p)
    if (i >= 0) {
      this.notificaRemocao(p)
      this.produtos.splice(i, 1)
    }
  }

  private notificaRemocao(p: Produto) {
    for (const observador of this.observadores) {
      observador.quandoRemove(p)
    }
  }

  compra(): Pedido {
    const prods: Produto[] = [...this.produtos]
    this.notificaCompra(prods)
    const ped = new Pedido(prods)
    this.esvazia()
    return ped
  }

  private notificaCompra(prods: Produto[]) {
    for (const observador of this.observadores) {
      observador.quandoCompra(prods)
    }
  }

  abandona(): void {
    this.notificaAbandono(this.produtos)
    this.esvazia()
  }

  private notificaAbandono(prods: Produto[]) {
    for (const observador of this.observadores) {
      observador.quandoAbandona(prods)
    }
  }

  adicionaObservador(obs: IObservador){
    this.observadores.push(obs)
  }

  removeObservador(obs: IObservador){
    const i = this.observadores.indexOf(obs)
    if (i >= 0) {
      this.observadores.splice(i,1)
    }
  }

  esvazia(): void {
    this.produtos.splice(0)
  }
}
