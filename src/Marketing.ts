import { Produto } from './Produto'
import { IObservador } from './IObservador'

export class Marketing implements IObservador{

  quandoAdiciona(p: Produto) {
    console.info(`MARKETING: ${p.descricao} foi adicionado`)
  }
  quandoRemove(p: Produto) {
    console.info(`MARKETING: ${p.descricao} foi removido`)

  }
  quandoCompra(produtos: Produto[]) {
    console.info(`MARKETING: ${produtos.length} comprado(s)`)
  }
  quandoAbandona(produtos: Produto[]) {
    console.info(`MARKETING: ${produtos.length} abandonado(s)`)

  }
}
