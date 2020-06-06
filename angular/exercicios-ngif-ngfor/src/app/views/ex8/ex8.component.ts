import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ex8',
  templateUrl: './ex8.component.html',
  styleUrls: ['./ex8.component.css']
})
export class Ex8Component implements OnInit {

  nomes = [];
  nome: String = '';

  constructor() { }

  ngOnInit(): void {
  }

  lista(): void {
    if (this.nome.length > 0) {
      this.nomes.push(this.nome);
      this.nome = '';
    } else {
      alert('Preencha o campo, por favor!');
    }
  }
}
