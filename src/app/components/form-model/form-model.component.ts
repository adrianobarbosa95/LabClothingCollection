import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Colecao } from 'src/app/models/colecao';
import { ColecaoService } from 'src/app/services/colecao.service';

@Component({
  selector: 'app-form-model',
  templateUrl: './form-model.component.html',
  styleUrls: ['./form-model.component.scss']
})
export class FormModelComponent {
  colecoes!: Colecao[];
  constructor(private colecao: ColecaoService, private router: Router) {
    this.colecao.obterTodasColecoes().then((res) =>
    this.colecoes = res);
    //  this.rota = this.router.url.split('/')[1];
  }
}
