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
import { TablaComponent } from './components/map/tabla/tabla.component';
import { ReporteFormularioComponent } from './components/reporte-formulario/reporte-formulario.component';
InicioComponent



const routes: Routes = [
  {
    path: '',
    component: InicioComponent
  },
  {
    path: 'admin',
    component: AdminInicioComponent
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
    component: PanelEditorComponent
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
    component: TablaComponent
  },
  {
    path: 'reporte',
    component: ReporteFormularioComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
