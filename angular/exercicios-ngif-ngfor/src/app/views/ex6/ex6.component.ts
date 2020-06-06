import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ex6',
  templateUrl: './ex6.component.html',
  styleUrls: ['./ex6.component.css']
})
export class Ex6Component implements OnInit {

  paises = ['Brasil:Brasilia','Peru:Lima','Australia:Camberra','Chile:Santiago']
  constructor() { }

  ngOnInit(): void {
  }

  capital(capital: string): void {
    alert(capital);
  }
}
