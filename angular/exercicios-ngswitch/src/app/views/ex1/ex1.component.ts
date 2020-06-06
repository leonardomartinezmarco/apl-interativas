import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ex1',
  templateUrl: './ex1.component.html',
  styleUrls: ['./ex1.component.css']
})
export class Ex20Component implements OnInit {

  nomeUser: String = '';

  constructor() { }

  ngOnInit(): void {
  }

}
