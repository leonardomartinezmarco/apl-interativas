import { Component, OnInit } from '@angular/core';
import { ProdutoService } from 'src/app/services/produto.service';
import { Produto } from 'src/app/model/produto';

@Component({
  selector: 'app-produto',
  templateUrl: './produto.component.html',
  styleUrls: ['./produto.component.css']
})
export class ProdutoComponent implements OnInit {
  produtos: Array<Produto>;

  constructor(private service: ProdutoService) { }

  ngOnInit(): void {
  }

  listarProdutos() {
    this.service.TodosProdutos().subscribe(produtos => {
      this.produtos = produtos;
    });
  }
}
