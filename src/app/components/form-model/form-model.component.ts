import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Colecao } from 'src/app/models/colecao';
import { Modelo } from 'src/app/models/modelo';
import { ColecaoService } from 'src/app/services/colecao.service';
import { ModeloService } from 'src/app/services/modelo.service';

@Component({
  selector: 'app-form-model',
  templateUrl: './form-model.component.html',
  styleUrls: ['./form-model.component.scss']
})
export class FormModelComponent implements OnInit{
  colecoes!: Colecao[];
  modelos!: Modelo[];
  modelo!: Modelo;

  form!: FormGroup;
  rota:any;
  constructor(private colecao: ColecaoService, private modelo_service: ModeloService,  private router: Router, private fb:FormBuilder) {
    this.colecao.obterTodasColecoes().then((res) =>
    this.colecoes = res);
    this.form = fb.group({
  
      nome: ['', [Validators.required]],
      tipo: ['', [Validators.required]],
      responsavel: ['', [Validators.required]],
      colecao : ['', [Validators.required]],
      bordado: ['', [Validators.required]],
      estampa: ['', [Validators.required]],
 
  
    });

    this.modelo = this.form.value; 
    this.rota = this.router.url.split('/');
  }

 
  
  
    
    async ngOnInit(): Promise<void> {
      
    if(this.rota[2] === 'editar'){
     
      this.form.setValue(await this.modelo_service.buscarModelo(this.rota[3]));
       
    }
  

  }

    onSubmit(){

      if(this.form.valid && this.rota[2] === 'criar'){
   
        this.modelo_service.cadastrarModelo(this.form.value);
        this.router.navigate(['/modelos']);
      } else if(this.form.valid && this.rota[2] === 'editar'){
        this.modelo_service.atualizarModelo(this.form.value, this.rota[3] );
        this.router.navigate(['/modelos']);
      }
      
    }
    excluir(){
      if(confirm("Tem certeza que realmente deseja excluir?")){
      this.modelo_service.excluirModelo(this.rota[3]);
      this.router.navigate(['/modelos']);
    }
    }
}
