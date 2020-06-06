import { Component, OnInit } from '@angular/core';
import { LivroService } from 'src/app/services/livro.service';
import { Livro } from 'src/app/models/livro';

@Component({
  selector: 'app-ex2',
  templateUrl: './ex2.component.html',
  styleUrls: ['./ex2.component.css']
})

export class Ex2Component implements OnInit {
  livros = new Array<Livro>();
  livro: Livro = null;
  edit = false;
  search: string;
  return_search: Livro = null;
  warning: string;

  constructor(private service: LivroService) { }

  ngOnInit (): void {
    this.listagem();
  }

  listagem() {
    this.livros = this.service.listar();
  }

  livroselecionar (livro: Livro) {
    this.edit = true;
    this.livro = livro;
  }

  create() {
    this.edit = false;
    this.livro = new Livro();
  }

  save() {
    if (this.edit) {
      this.service.atualizar(this.livro);
    } else {
      this.service.criar(this.livro);
    }
    this.cancel();
    this.listagem();
  }

  cancel () {
    this.livro = null;
  }

  delete (livro) {
    this.service.apagar(livro);
    this.listagem();
  }

  search_procurar (nome: string) {
    const retorno = this.service.procurar(nome);

    if (retorno === null || retorno === undefined) {
      this.warning = `Não há um livro com o nome "${nome}"`;
    } else {
      this.return_search = retorno;
    }
  }
}
