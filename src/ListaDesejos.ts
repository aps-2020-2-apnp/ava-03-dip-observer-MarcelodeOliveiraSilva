import { Geral } from './Geral'

export class ListaDesejos extends Geral {
  abandona(): void {
    this.esvazia()
  }
}
