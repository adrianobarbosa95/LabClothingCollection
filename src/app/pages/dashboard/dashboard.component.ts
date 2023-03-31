import { Component } from '@angular/core';
import { Colecao } from 'src/app/models/colecao';
import { Modelo } from 'src/app/models/modelo';
import { RealPipe } from 'src/app/pipes/real.pipe';
import { ColecaoService } from 'src/app/services/colecao.service';
import { ModeloService } from 'src/app/services/modelo.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})

export class DashboardComponent {

  colecoes!: Colecao[];
  modelos!: Modelo[];
  title: any;
  valor: any;
  comparacao: any;
  somaColecao: number = 0;

  constructor(private colecao: ColecaoService, private modelo: ModeloService, private real : RealPipe) {
    this.modelo.obterTodosModelos().then((res) =>
      this.modelos = res);
      this.colecao.obterTodasColecoes().then((res) => {
      this.colecoes = res;
      this.colecoes.forEach((colecao => { this.somaColecao += Number.parseFloat(colecao.orcamento) }));
      this.title = ['Coleções', 'Modelos', "Orçamento Médio (R$)"];
      this.valor = [this.colecoes.length, this.modelos.length, real.transform(((this.somaColecao / this.colecoes.length).toFixed(2)).toString(), true)];
      this.comparacao = [false, false, true];
    });
  }
  
}
