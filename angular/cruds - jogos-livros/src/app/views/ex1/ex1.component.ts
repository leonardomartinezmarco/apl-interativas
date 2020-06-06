import { Component, OnInit } from '@angular/core';
import { Jogo } from 'src/app/models/jogo';
import { JogoService } from 'src/app/services/jogo.service';

@Component({
  selector: 'app-ex1',
  templateUrl: './ex1.component.html',
  styleUrls: ['./ex1.component.css']
})
export class Ex1Component implements OnInit {
  jogos = new Array<Jogo>();
  jogo: Jogo = null;
  edit = false;

  constructor(private servico: JogoService) { }

  ngOnInit (): void {
    this.listagem();
  }

  listagem () {
    this.jogos = this.servico.listar();
  }

  selecionarJogo (jogo: Jogo) {
    this.edit = true;
    this.jogo = jogo;
  }

  create() {
    this.edit = false;
    this.jogo = new Jogo();
  }

  save() {
    if (this.edit) {
      this.servico.atualizar(this.jogo);
    } else {
      this.servico.criar(this.jogo);
    }

    this.cancel();
    this.listagem();
  }

  cancel() {
    this.jogo = null;
  }

  delete(jogo) {
    this.servico.apagar(jogo);
    this.listagem();
  }
}
