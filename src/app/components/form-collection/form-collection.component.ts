import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Colecao } from 'src/app/models/colecao';
import { UserPipe } from 'src/app/pipes/user.pipe';
import { ColecaoService } from 'src/app/services/colecao.service';


@Component({
  selector: 'app-form-collection',
  templateUrl: './form-collection.component.html',
  styleUrls: ['./form-collection.component.scss']
})
export class FormCollectionComponent implements OnInit {

  form!: FormGroup;
  colecao!: Colecao;
  rota: any;
  myModal: any;

  constructor(private fb: FormBuilder, private user: UserPipe, private colecao_service: ColecaoService, private router: Router) {

    this.form = fb.group({
      nome: ['', [Validators.required]],
      responsavel: ['', [Validators.required]],
      estacao: ['', [Validators.required]],
      orcamento: ['', [Validators.required, Validators.pattern(/^[0-9]+(\.[0-9]{1,2})?$/)]],
      ano: ['', [Validators.required, Validators.minLength(4)]],
      marca: ['', [Validators.required]],
    });

    this.colecao = this.form.value;
    //pegaria o nome do usuario
    //  tis.colecao.responsavel = this.user.transform(JSON.parse(localStorage.getItem('email') ?? 'email'));
    this.rota = this.router.url.split('/');
  }

  async ngOnInit(): Promise<void> {
    if (this.rota[2] === 'editar') {
      this.form.setValue(await this.colecao_service.buscarColecao(this.rota[3]));
    }
  }
  onSubmit(): void {
    if (this.form.valid && this.rota[2] === 'criar') {
      this.colecao_service.cadastrarColecao(this.form.value);
      this.router.navigate(['/colecoes']);
    } else if (this.form.valid && this.rota[2] === 'editar') {
      this.colecao_service.atualizarColecao(this.form.value, this.rota[3]);
      this.router.navigate(['/colecoes']);
    }
  }
  excluir(): void {
    if (confirm("Tem certeza que realmente deseja excluir?")) {
      this.colecao_service.excluirColecao(this.rota[3]);
      this.router.navigate(['/colecoes']);
    }
  }

}

