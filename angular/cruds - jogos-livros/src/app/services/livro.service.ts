import { Injectable } from '@angular/core';
import { Livro } from '../models/livro';
import { Jogo } from '../models/jogo';


@Injectable({
  providedIn: 'root'
})
export class LivroService {
  private livros = new Array<Livro>();
  private idGerado = 0;

  constructor() { }

  create(livro: Livro) {
    livro.id = this.idGerado;
    this.livros.push(livro);
    this.idGerado += 1;
  }

  list(): Array<Livro> {
    return this.livros;
  }

  update(livro: Livro) {
    let i = 0;
    let update = false;
    while (update === false && i < this.livros.length) {
      const l = this.livros[i];
      if (l.id === livro.id) {
        this.livros[i] = livro;
        update = true;
      }
      i += 1;
    }
  }

  apagar (livro: Jogo) {
    let i = 0;
    let update = false;
    while (update === false && i < this.livros.length) {
      const l = this.livros[i];
      if (l.id === livro.id) {
        this.livros.splice(i, 1);
        update = true;
      } i += 1;
    }
  }

  procurar(nome: string): Livro {
    let i = 0;
    let update = false;
    let livro: Livro;
    while (update === false && i < this.livros.length) {
      const l = this.livros[i];
      if (l.name.toUpperCase() === nome.toUpperCase()) {
        livro = l;
        update = true;
      } i += 1;
    }
    return livro;
  }
}
