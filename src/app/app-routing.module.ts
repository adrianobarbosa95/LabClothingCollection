import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroUsuarioComponent } from './components/cadastro-usuario/cadastro-usuario.component';
import { LoginComponent } from './components/login/login.component';
import { MenuLateralComponent } from './components/menu-lateral/menu-lateral.component';
import { ResetPassComponent } from './components/reset-pass/reset-pass.component';
import { FullComponent } from './layouts/full/full.component';

const routes: Routes = [
  {
    path:'', component: FullComponent, children:
    [
      {path:'entrar', component: LoginComponent },
      {path:'recuperar-senha', component: ResetPassComponent },
      {path:'cadastrar-usuario', component: CadastroUsuarioComponent },
      {path:'menu', component: MenuLateralComponent},
    ]
  },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
