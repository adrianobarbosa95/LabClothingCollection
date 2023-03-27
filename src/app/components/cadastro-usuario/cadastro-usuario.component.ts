import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { firstValueFrom } from 'rxjs';
import { Usuario } from 'src/app/models/usuario';
 

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
  confirmPassword!:string;

  url = 'http://localhost:3000/usuarios';

constructor (private fb: FormBuilder, private _httpClient:HttpClient, private router : Router) {
 
  this.form = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    senha: ['', [Validators.required, Validators.minLength(8)]],
    nome: ['', [Validators.required]],
    empresa: ['', [Validators.required]],
    cnpj: ['', [Validators.required, Validators.minLength(14)]],
    confirmPassword: ['', [Validators.required, Validators.minLength(8)]],
  } );
  
}

passwordMatchValidator(frm: FormGroup) {
  return frm.controls['senha'].value === frm.controls['confirmPassword'].value ? null : {'mismatch': true};
}


onSubmit(){
  const usuario:Usuario = this.form.value;
  if(this.form.valid && this.senha===this.confirmPassword){

     firstValueFrom(this._httpClient.post<Usuario>(this.url, usuario) );
  this.router.navigate(['/dashboard']);
  }
else{
  
}
   
}


}
