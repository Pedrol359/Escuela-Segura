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
import { AdminInicioComponent } from './components/admin-inicio/admin-inicio.component';
import { PanelEditorComponent } from './components/panel-editor/panel-editor.component';
import { TestInteractivoComponent } from './components/test-interactivo/test-interactivo.component';
import { TiposViolenciaComponent } from './components/tipos-violencia/tipos-violencia.component';
import { FormComponent } from './components/form/form/form.component';
import { PanelAdminComponent } from './components/panel-admin/panel-admin.component';
import { TablaComponent } from './components/map/tabla/tabla.component';
import { ReporteFormularioComponent } from './components/reporte-formulario/reporte-formulario.component';
import { EscuelasSegurasComponent } from './components/escuelas-seguras/escuelas-seguras.component'
import { AuthGuard } from './security/guards/auth.guard';
InicioComponent



const routes: Routes = [
  {
    path: '',
    component: InicioComponent
  },
  {
    path: 'admin',
    component: AdminInicioComponent,
    canActivate:[AuthGuard]
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
  },
  {
    path: 'panel-editor',
    component: PanelEditorComponent,
    canActivate:[AuthGuard]
  },
  {
    path: 'panel-admin',
    component: PanelAdminComponent,
    canActivate:[AuthGuard]
  },
  {
    path: 'test-interactivo',
    component: TestInteractivoComponent
  },
  {
    path: 'tipos-violencia',
    component: TiposViolenciaComponent
  },
  {
    path: 'form',
    component: FormComponent
  },
  {
    path: 'mapa',
    component: TablaComponent,
    //canActivate:[AuthGuard]
  },
  {
    path: 'reporte',
    component: ReporteFormularioComponent
  },
  {
    path: 'escuelas-seguras',
    component: EscuelasSegurasComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
