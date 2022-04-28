import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { LoginAdminAsociacionComponent } from './components/login-admin-asociacion/login-admin-asociacion.component';
import { RegistrarAdminAsociacionComponent } from './components/registrar-admin-asociacion/registrar-admin-asociacion.component';



const routes: Routes = [
  {
    path: '',
    component: LoginAdminAsociacionComponent
  },
  {
    path: 'login-admin-asociacion',
    component: LoginAdminAsociacionComponent
  },
  {
    path: 'registrar-admin-asociacion',
    component: RegistrarAdminAsociacionComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
