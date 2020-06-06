import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ex4',
  templateUrl: './ex4.component.html',
  styleUrls: ['./ex4.component.css']
})
export class Ex4Component implements OnInit {

  imagem1 = '\\assets\\ex4\\img1.jpg';

  imagem2 = '/assets/ex4/img2.jpg';

  imagem3 = '\\assets\\ex4\\img3.jpg';

  classTamanho     = 'imagemTamanho';
  classBordaMargin = 'imagemBorda imagemMargem';

  constructor() { }

  ngOnInit(): void {
  }

}
