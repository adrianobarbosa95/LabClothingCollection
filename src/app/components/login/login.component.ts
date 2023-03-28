import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';





@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  form!: FormGroup;
  email: string = 'admin@admin.com';
  senha: string ='12345678';
  invalido = false;

  logado !: string;

  constructor(private fb: FormBuilder, private router: Router, private auth: AuthService) {
    this.form = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      senha: ['', [Validators.required, Validators.minLength(8)]],
    });

  }
  async onSubmit() {

    if (this.form.valid) {
      // this.logado = await this.auth.loggin(this.email, this.senha) ? "": "verifique os dados e tente novamente"; 
      this.invalido = await this.auth.loggin(this.email, this.senha) ? true : false; 
    }  
  }
 
  public loggin(email: string, senha: string) {
    // this._httpClient.get<{email: string, senha:string}[]>(this.url).forEach(retorno=> {if(email == retorno.email && senha ==retorno.senha) this.logado = true;});
    console.log();
  }

}
