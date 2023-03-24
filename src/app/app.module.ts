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
    TableBudgetComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
