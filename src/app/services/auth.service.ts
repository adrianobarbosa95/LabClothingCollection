import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from '../models/usuario';



@Injectable({
  providedIn: 'root'
})
export class AuthService {
  usuario!: Usuario[];
  url = 'http://localhost:3000/usuarios';
  private local = localStorage;

  constructor(private _httpClient: HttpClient, private router: Router) { }

  async loggin(email: string, senha: string) {
    return this._httpClient.get<Usuario[]>(this.url).subscribe(
      (users) => {
        const encontrado = users.some(user =>
          user.email === email && user.senha === senha
        )
        if (encontrado) {
          this.local.setItem('logado', JSON.stringify(true));
          this.local.setItem('email', JSON.stringify(email));
          this.router.navigate(['/dashboard']);
        }
      }
    );
  }

}

