import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { LoginAdminAsociacionComponent } from './components/login-admin-asociacion/login-admin-asociacion.component';
import { EstatusRecuperacionComponent } from './components/pantallas-modular/estatus-recuperacion/estatus-recuperacion.component';
import { RegistrarAdminAsociacionComponent } from './components/registrar-admin-asociacion/registrar-admin-asociacion.component';
import { RegistrarInstitucionEducativaComponent } from './components/registrar-institucion-educativa/registrar-institucion-educativa.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { ArticulosPantallaInicioComponent } from './components/articulos-pantalla-inicio/articulos-pantalla-inicio.component';
import { NosotrosComponent } from './components/nosotros/nosotros.component'
import { VerArticuloComponent } from './components/ver-articulo/ver-articulo.component';
import { InicioV2Component } from './components//inicio-v2/inicio-v2.component';
InicioComponent


const routes: Routes = [
  {
    path: '',
    component: InicioV2Component
  },
  {
    path: 'modal',
    component: EstatusRecuperacionComponent
  },
  {
    path: 'login-admin-asociacion',
    component: LoginAdminAsociacionComponent
  },
  {
    path: 'articulos',
    component: ArticulosPantallaInicioComponent
  },
  {
    path: 'registrar-admin-asociacion',
    component: RegistrarAdminAsociacionComponent
  },
  {
    path: 'registrar-institucion-educativa',
    component: RegistrarInstitucionEducativaComponent
  }
  ,
  {
    path: 'inicio',
    component: InicioComponent
  },
  {
    path: 'articulo',
    component: VerArticuloComponent
  },
  {
    path: 'nosotros',
    component: NosotrosComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
