import { Produto } from './Produto'
import { IObservador} from './IObservador'

export class Logger implements IObservador{
  quandoAdiciona(p: Produto) {
    console.info(`LOGGER: ${p.descricao} foi adicionado`)
  }
  quandoRemove(p: Produto) {
    console.info(`LOGGER: ${p.descricao} foi removido`)

  }
  quandoCompra(produtos: Produto[]) {
    console.info(`LOGGER: ${produtos.length} comprado(s)`)
  }
  quandoAbandona(produtos: Produto[]) {
    console.info(`LOGGER: ${produtos.length} abandonado(s)`)

  }
}
