import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { ResetPassComponent } from './components/reset-pass/reset-pass.component';
import { CadastroUsuarioComponent } from './components/cadastro-usuario/cadastro-usuario.component';
import { MenuLateralComponent } from './components/menu-lateral/menu-lateral.component';
import { FullComponent } from './layouts/full/full.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { CardComponent } from './components/card/card.component';
import { TableBudgetComponent } from './components/table-budget/table-budget.component';
import { CollectionListComponent } from './components/collection-list/collection-list.component';
import { ModelListComponent } from './components/model-list/model-list.component';
import { FormCollectionComponent } from './components/form-collection/form-collection.component';
import { FormModelComponent } from './components/form-model/form-model.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { DbService } from './services/db.service';
import { UserPipe } from './pipes/user.pipe';
import { RealPipe } from './pipes/real.pipe';
 
 


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ResetPassComponent,
    CadastroUsuarioComponent,
    MenuLateralComponent,
    FullComponent,
    NavbarComponent,
    DashboardComponent,
    CardComponent,
    TableBudgetComponent,
    CollectionListComponent,
    ModelListComponent,
    FormCollectionComponent,
    FormModelComponent,
    UserPipe,
    RealPipe,
 
    
  ],
  imports: [
    FormsModule, ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,  

  ],
  providers: [DbService, UserPipe, RealPipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
