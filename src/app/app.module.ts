import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RegistrarAdminAsociacionComponent } from './components/registrar-admin-asociacion/registrar-admin-asociacion.component';
import { LoginAdminAsociacionComponent } from './components/login-admin-asociacion/login-admin-asociacion.component';

@NgModule({
  declarations: [
    AppComponent,
    RegistrarAdminAsociacionComponent,
    LoginAdminAsociacionComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
