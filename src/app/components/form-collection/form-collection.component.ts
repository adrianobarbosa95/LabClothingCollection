import { Component } from '@angular/core';
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
export class FormCollectionComponent {

  form!: FormGroup;
  colecao!: Colecao;
  rota:any;

constructor (private fb:FormBuilder, private user: UserPipe, private colecao_service:ColecaoService, private router:Router) {
  
  this.form = fb.group({

    nome: ['', [Validators.required]],
    responsavel: ['', [Validators.required]],
    estacao : ['', [Validators.required]],
    orcamento: ['', [Validators.required, Validators.pattern(/^-?(0|[1-9]\d*)?$/)]],
    ano: ['', [Validators.required, Validators.minLength(4)]],
    marca: ['', [Validators.required]],

  });

  this.colecao = this.form.value; 
  //pegaria o nome do usuario
  //  tis.colecao.responsavel = this.user.transform(JSON.parse(localStorage.getItem('email') ?? 'email'));
 this.rota = this.router.url.split('/');
}
  onSubmit(){

    if(this.form.valid && this.rota[2] === 'criar'){
      console.log(this.form.value);
      this.colecao_service.cadastrarColecao(this.form.value);
      this.router.navigate(['/colecoes']);
    }
else {
  console.log('erro na validacao');
  
}
  }

}

