import { Component, OnInit } from '@angular/core';
import { EnderecoBusca } from 'src/app/model/cep';
import { ServicoCep } from 'src/app/services/cep.service';

@Component({
  selector: 'app-cep',
  templateUrl: './cep.component.html',
  styleUrls: ['./cep.component.css']
})
export class CepComponent implements OnInit {
  cep: string;
  end: EnderecoBusca;
  constructor(private cepService: ServicoCep) { }

  ngOnInit(): void {
  }

  consultaTodosCEP () {
    this.cepService.TodosCEP(this.cep).subscribe(endereco => {
      this.end = endereco;
    });
  }
}
