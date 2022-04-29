import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RegistrarAdminAsociacionComponent } from './components/registrar-admin-asociacion/registrar-admin-asociacion.component';
import { LoginAdminAsociacionComponent } from './components/login-admin-asociacion/login-admin-asociacion.component';
import { AppRoutingModule } from './app-routing.module';
import { NavbarBasicaComponent } from './components/navbar/navbar-basica/navbar-basica.component';
import { RegistrarInstitucionEducativaComponent } from './components/registrar-institucion-educativa/registrar-institucion-educativa.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { NavbarPrincipalComponent } from './components/navbar/navbar-principal/navbar-principal.component';

@NgModule({
  declarations: [
    AppComponent,
    RegistrarAdminAsociacionComponent,
    LoginAdminAsociacionComponent,
    NavbarBasicaComponent,
    RegistrarInstitucionEducativaComponent,
    InicioComponent,
    NavbarPrincipalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
