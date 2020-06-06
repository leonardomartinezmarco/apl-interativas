import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ex9',
  templateUrl: './ex9.component.html',
  styleUrls: ['./ex9.component.css']
})
export class Ex9Component implements OnInit {

  nome = '';
  exibirNome = 'Digite o nome de uma raça de cachorro!';
  imagem = '\\assets\\ex9\\vazio.jpg';

  constructor() { }

  ngOnInit(): void {
  }

  imagemTrocar(): void {

    let racaCachorro = this.nome.toUpperCase();

    if (racaCachorro === 'Rottweiler') {
      this.exibirNome = 'Rottweiler.';
      this.imagem = '\\assets\\ex9\\rottweiler.jpg';
    } else if (racaCachorro === 'Pitbull') {
      this.exibirNome = 'Pitbull.';
      this.imagem = '\\assets\\ex9\\pitbull.jpg';
    } else if (racaCachorro === 'Labrador') {
      this.exibirNome = 'Labrador.';
      this.imagem = '\\assets\\ex9\\labrador.jpg';
    } else if (racaCachorro === '') {
      this.exibirNome = 'Digite nome de uma raça de cachorro!';
      this.imagem = '\\assets\\ex9\\vazio.jpg';
    } else{
      this.exibirNome = 'Não encontrado!';
      this.imagem = '\\assets\\ex9\\errado.png';
    }
  }
}
