import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Produto } from '../model/produto';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  constructor(private http: HttpClient) { }

  public TodosProdutos(): Observable <Produto[]> {
    return this.http.get<Produto[]>('https://oficinacordova.azurewebsites.net/android/rest/produto');
  }
}
