import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ex10',
  templateUrl: './ex10.component.html',
  styleUrls: ['./ex10.component.css']
})
export class Ex10Component implements OnInit {

  nomeCurso: String;
  curso:String;

  constructor() { }

  ngOnInit(): void {
  }

}
