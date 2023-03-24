import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroUsuarioComponent } from './components/cadastro-usuario/cadastro-usuario.component';
import { CollectionListComponent } from './components/collection-list/collection-list.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LoginComponent } from './components/login/login.component'; 
import { ModelListComponent } from './components/model-list/model-list.component';
import { ResetPassComponent } from './components/reset-pass/reset-pass.component';
import { FullComponent } from './layouts/full/full.component';

const routes: Routes = [
  {
    path:'', component: FullComponent, children:
    [
      
      {path:'dashboard', component: DashboardComponent},
      {path:'colecoes', component: CollectionListComponent},
      {path:'modelos', component: ModelListComponent},
 
    ]
  },
  {path:'entrar', component: LoginComponent },
  {path:'recuperar-senha', component: ResetPassComponent },
  {path:'cadastrar-usuario', component: CadastroUsuarioComponent },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
