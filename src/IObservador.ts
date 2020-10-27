import { Produto } from './Produto'

export interface IObservador {
  quandoAdiciona(p: Produto): void
  quandoRemove(p: Produto): void
  quandoCompra(produtos: Produto[]): void
  quandoAbandona(produtos: Produto[]): void
}
