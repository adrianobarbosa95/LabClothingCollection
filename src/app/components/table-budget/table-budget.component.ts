import { AfterViewChecked, AfterViewInit, Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Colecao } from 'src/app/models/colecao';
import { ColecaoService } from 'src/app/services/colecao.service';



@Component({
  selector: 'app-table-budget',
  templateUrl: './table-budget.component.html',
  styleUrls: ['./table-budget.component.scss']
})
export class TableBudgetComponent{
colecoes!: Colecao[];

constructor (private colecao : ColecaoService) {
   colecao.listarColecoes().then((res) => 
this.colecoes = res
);

} 
  

}
