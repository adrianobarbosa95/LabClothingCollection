import { AfterViewChecked, AfterViewInit, Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { Colecao } from 'src/app/models/colecao';
import { Modelo } from 'src/app/models/modelo';
import { ColecaoService } from 'src/app/services/colecao.service';
import { ModeloService } from 'src/app/services/modelo.service';



@Component({
  selector: 'app-table-budget',
  templateUrl: './table-budget.component.html',
  styleUrls: ['./table-budget.component.scss']
})
export class TableBudgetComponent {
  colecoes!: Colecao[];  
  colecoesCompletas!: Colecao[];  
  modelos!: Modelo[];
rota!:any;


  constructor(private colecao: ColecaoService, private modelo: ModeloService,  private router: Router) {
    colecao.listarColecoes().then((res) =>
      this.colecoes = res
    );
    colecao.obterTodasColecoes().then((res) =>
    this.colecoesCompletas = res
  );
    modelo.obterTodosModelos().then((res) =>
      this.modelos = res
    );
    this.rota = this.router.url.split('/')[1];
  }


}
