import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-cadastro-usuario',
  templateUrl: './cadastro-usuario.component.html',
  styleUrls: ['./cadastro-usuario.component.scss']
})
export class CadastroUsuarioComponent {
  form!: FormGroup;
  email!: string;
  senha!: string;
  nome!: string;
  empresa!: string;
  cnpj!: string;
  confirmPassword !: string;

  
constructor (private fb: FormBuilder) {
 
  this.form = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    senha: ['', [Validators.required, Validators.minLength(8)]],
    nome: ['', [Validators.required]],
    empresa: ['', [Validators.required]],
    cnpj: ['', [Validators.required, Validators.minLength(14)]],
    confirmPassword: ['', [Validators.required, Validators.minLength(8)]],
  });
  
}


onSubmit(){
}


}
