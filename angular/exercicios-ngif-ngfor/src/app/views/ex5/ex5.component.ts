import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ex5',
  templateUrl: './ex5.component.html',
  styleUrls: ['./ex5.component.css']
})
export class Ex5Component implements OnInit {

  imagens = ['\\assets\\ex5\\Crash.jpg', '\\assets\\ex5\\Mario.jpg', '\\assets\\ex5\\dragonball.jpg', '\\assets\\ex5\\Sonic.jpg'];

  constructor() { }

  ngOnInit(): void {
  }

  exibir(nome: string): void {
    const nomeTemp = nome.substr(nome.indexOf('ex5\\')+5).replace('.jpg','');
    alert(nomeTemp);
  }
}
