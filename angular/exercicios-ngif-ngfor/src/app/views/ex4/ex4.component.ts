import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ex4',
  templateUrl: './ex4.component.html',
  styleUrls: ['./ex4.component.css']
})
export class Ex4Component implements OnInit {

  value1: number;
  value2: number;
  result: number;

  constructor() { }

  ngOnInit(): void {
  }

  operacaoNum(op: String): void {

    let tempoValor: number = 0;

    switch (op) {
      case 'somar':
        tempoValor = this.value1 + this.value2;
        break;

      case 'subtrair':
        tempoValor = this.value1 - this.value2;
        break;

      case 'multiplicar':
        tempoValor = this.value1 * this.value2;
        break;

      case 'dividir':
        if (this.value2 === 0) {
          tempoValor = 0;
        } else {
          tempoValor = this.value1 / this.value2;
        }
        break;

        default:
          tempoValor = 0;
        break;
    }

    this.result = tempoValor;
  }

}
