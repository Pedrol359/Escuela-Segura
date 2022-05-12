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
import { EstatusRecuperacionComponent } from './components/pantallas-modular/estatus-recuperacion/estatus-recuperacion.component';
import { NosotrosComponent } from './components/nosotros/nosotros.component';
import { ArticulosPantallaInicioComponent } from './components/articulos-pantalla-inicio/articulos-pantalla-inicio.component';
import { ArticuloCardLargeComponent } from './components/cards/articulo-card-large/articulo-card-large.component';
import { VerArticuloComponent } from './components/ver-articulo/ver-articulo.component';
import { InicioV2Component } from './components//inicio-v2/inicio-v2.component';

@NgModule({
  declarations: [
    AppComponent,
    RegistrarAdminAsociacionComponent,
    LoginAdminAsociacionComponent,
    NavbarBasicaComponent,
    RegistrarInstitucionEducativaComponent,
    InicioComponent,
    NavbarPrincipalComponent,
    EstatusRecuperacionComponent,
    ArticulosPantallaInicioComponent,
    ArticuloCardLargeComponent,
    NosotrosComponent,
    ArticulosPantallaInicioComponent,
    VerArticuloComponent,
    InicioV2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
