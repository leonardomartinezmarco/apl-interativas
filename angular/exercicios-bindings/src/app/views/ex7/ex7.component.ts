import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ex7',
  templateUrl: './ex7.component.html',
  styleUrls: ['./ex7.component.css']
})
export class Ex7Component implements OnInit {

  div1 = 'ver_div';
  div2 = 'esconder_div';
  div3 = 'esconder_div';

  constructor() { }

  ngOnInit(): void {
  }

  button1(): void {

    this.div1 = 'ver_div';
    this.div2 = 'esconder_div';
    this.div3 = 'esconder_div';
  }

  button2(): void {

    this.div1 = 'esconder_div';
    this.div2 = 'ver_div';
    this.div3 = 'esconder_div';
  }

  button3(): void {

    this.div1 = 'esconder_div';
    this.div2 = 'esconder_div';
    this.div3 = 'ver_div';
  }

}
