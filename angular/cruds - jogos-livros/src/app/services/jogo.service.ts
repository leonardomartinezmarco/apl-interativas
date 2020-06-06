import { Injectable } from '@angular/core';
import { Jogo } from '../models/jogo';

@Injectable({
  providedIn: 'root'
})
export class JogoService {
  private jogos = new Array<Jogo>();
  private id = 0;

  constructor() { }

  create (jogo: Jogo) {
    jogo.id = this.id;
    this.jogos.push(jogo);
    this.id += 1;
  }

  list(): Array<Jogo> {
    return this.jogos;
  }

  update (jogo: Jogo) {
    let i = 0;
    let update = false;
    while (update === false && i < this.jogos.length) {
      const j = this.jogos[i];
      if (j.id === jogo.id) {
        this.jogos[i] = jogo;
        update = true;
      } i += 1;
    }
  }

  delete (jogo: Jogo) {
    let i = 0;
    let search = false;
    while (search === false && i < this.jogos.length) {
      const j = this.jogos[i];
      if (j.id === jogo.id) {
        this.jogos.splice(i, 1);
        search = true;
      } i += 1;
    }
  }
}
