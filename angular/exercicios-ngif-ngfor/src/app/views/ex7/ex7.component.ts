import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ex7',
  templateUrl: './ex7.component.html',
  styleUrls: ['./ex7.component.css']
})
export class Ex7Component implements OnInit {

  titulos = ['titulo 1', 'titulo 2', 'titulo 3'];
  conteudos = ['conteudo 1', 'conteudo 2', 'conteudo 3'];

  constructor() { }

  ngOnInit(): void {
  }
}

