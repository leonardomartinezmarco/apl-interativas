import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { EnderecoBusca } from '../model/cep';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServicoCep {
  constructor(private http: HttpClient) { }
  public TodosCEP(cep: string): Observable <EnderecoBusca> {
    return this.http.get<EnderecoBusca>('http://viacep.com.br/ws/' + cep + '/json/');
  }
}
