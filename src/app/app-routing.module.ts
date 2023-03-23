import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroUsuarioComponent } from './components/cadastro-usuario/cadastro-usuario.component';
import { LoginComponent } from './components/login/login.component';
import { ResetPassComponent } from './components/reset-pass/reset-pass.component';

const routes: Routes = [
{path:'entrar', component: LoginComponent },
{path:'recuperar-senha', component: ResetPassComponent },
{path:'cadastrar-usuario', component: CadastroUsuarioComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
