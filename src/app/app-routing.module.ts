import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroUsuarioComponent } from './pages/cadastro-usuario/cadastro-usuario.component';
import { CollectionListComponent } from './pages/collection-list/collection-list.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { FormCollectionComponent } from './components/form-collection/form-collection.component';
import { FormModelComponent } from './components/form-model/form-model.component';
import { LoginComponent } from './pages/login/login.component';
import { ModelListComponent } from './pages/model-list/model-list.component';
import { ResetPassComponent } from './pages/reset-pass/reset-pass.component';
import { AuthGuard } from './guards/auth.guard';
import { FullComponent } from './layouts/full/full.component';

const routes: Routes = [
  {
    path: '', component: FullComponent, canActivate: [AuthGuard],
    children:
      [
        { path: 'dashboard', component: DashboardComponent },
        { path: 'colecoes', component: CollectionListComponent },
        { path: 'modelos', component: ModelListComponent },
        { path: 'colecoes/criar', component: FormCollectionComponent },
        { path: 'colecoes/editar/:id', component: FormCollectionComponent },
        { path: 'modelos/criar', component: FormModelComponent },
        { path: 'modelos/editar/:id', component: FormModelComponent },
      ]
  },
  { path: 'entrar', component: LoginComponent },
  { path: 'recuperar-senha', component: ResetPassComponent },
  { path: 'cadastro', component: CadastroUsuarioComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
