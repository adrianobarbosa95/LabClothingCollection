import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { ResetPassComponent } from './components/reset-pass/reset-pass.component';
import { CadastroUsuarioComponent } from './components/cadastro-usuario/cadastro-usuario.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ResetPassComponent,
    CadastroUsuarioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
