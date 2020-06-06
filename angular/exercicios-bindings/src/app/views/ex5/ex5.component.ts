import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ex5',
  templateUrl: './ex5.component.html',
  styleUrls: ['./ex5.component.css']
})
export class Ex5Component implements OnInit {

  trocarImg = '\\assets\\ex5\\img1.jpg';

  constructor() { }

  ngOnInit(): void {
  }

  imagemTrocar(): void {

    if (this.trocarImg === '\\assets\\ex5\\img1.jpg') {
      this.trocarImg = '\\assets\\ex5\\img2.jpg';
    } else {
      this.trocarImg = '\\assets\\ex5\\img1.jpg'; }
  }

}
