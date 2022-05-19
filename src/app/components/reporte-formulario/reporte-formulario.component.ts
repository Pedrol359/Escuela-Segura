import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reporte-formulario',
  templateUrl: './reporte-formulario.component.html',
  styleUrls: ['./reporte-formulario.component.css']
})
export class ReporteFormularioComponent implements OnInit {

   // Secciones del formulario
   display_uno = 'flex';
   display_dos = 'none';
   display_tres = 'none';

   // Fecha actual
   year = ''
   month = ''
   day = ''
   fecha = ''

   //Datos sección I entrada
   municipios = ['Tepic','Xalisco','San Blas','Santa María del Oro','Santiago Ixcuintla','San Pedro Lagunillas']
   niveles_educativos = ['Nivel Medio Superior','Nivel Superior']
   instituciones_superior = ['Instituto Tecnológico de Tepic','Universidad Autonoma de Nayarit','Universidad del Valle']
   instituciones_media = ['Cetis 100','Cecyten','Conalep','Preparatoría #1']
   espacios = ['Dentro del aula','En una oficina o privado','Áreas comunes','Baños',
   'Fuera del plantel realizando una actividad académica','Fuera del plantel realizando otra actividad']
   //IF NIVEL
   instituciones = []
   //Datos sección I NG_MODEL
   municipio = ''
   nivel_educativo = ''
   institucion = ''
   carrera = ''
   espacio = ''

   //Datos sección II entrada
   violencias = ['Verbal o Psicológica', 'Patrimonial', 'Física', 'Sexual']
   descripciones_verbal = ['Bromas hirientes','Apodos','Engaños','Ignorar','Celar','Culpabilizar'
   ,'Descalificar','Ridiculizar','Ofender','Humillar en público','Controlar o prohibir',
   'Amenazas','Manipulación']
   descripciones_patrimonial = ['Destrucción de artículos personales','Esconder artículos personales']
   descripciones_fisica = ['Dar sapes','Golpear "jugando"','Pellizcar','Arañazos',
   'Empujones','Jalones','Forcejeos','Cachetear','Patear','Encerrar o aislar']
   descripciones_sexual = ['Piropos','Miradas lascivas','Condicionar calificaciones a cambio de favores sexuales',
   'Manoseos','Envió de fotografías o videos íntimos sin haberlas solicitado',
   'Solicitud de fotografías o videos íntimos','Exponer contenido sexual sin consentimiento',
   'Tomar fotografías o videos íntimos sin consentimiento','Amenaza de difundir contenido intimo',
   'Difusión de fotografías intimas','Forzar a tener relaciones sexuales','Violación']
   horas = ['7:00AM','8:00AM','9:00AM','10:00AM','11:00AM','12:00PM','13:00PM','14:00PM','15:00PM','16:00PM',
   '17:00PM','18:00PM','19:00PM','20:00PM','21:00PM','22:00PM','23:00PM','00:00AM']
   //IF TIPO_VIOLENCIA
   descipciones = []
   //Datos sección II NG_MODEL
   tipo_violencia = ''
   descripcion = ''
   fecha_incidente = ''
   hora_incidente = ''

   //Datos sección III entrada
   sexos = ['Hombre','Mujer']
   //Datos sección III NG_MODEL
   sexo_victima = ''
   edad_victima = ''

   //Datos sección IV entrada
   agresor = ['Compañero de clase','Compañero de escuela',
   'Relación de noviazgo dentro de la escuela','Relación de noviazgo fuera de la escuela',
   'Maestro','Director','Personal administrativo','Personal de labores varias','Personas ajenas a la escuela']
   //Datos sección IV NG_MODEL
   sexo_agresor = ''
   nombre_agresor = ''
   persona_agresora = ''

   
   //Datos sección V entrada
   acciones = ['Denuncié ante un maestro','Denuncié ante una autoridad escolar',
   'Denuncié ante una instancia','Ninguna']
   tiempos = ['Más de 12 meses','Entre 6 y 12 meses','Entre 3 y 6 meses','Menos de 3 meses','En los últimos 15 días']
   servicios = ['Atención psicológica','Atención psiquiátrica','Atención medica','Interrupcion legal del embarazo','Ninguna']
   //Datos sección V NG_MODEL
   accion = ''
   tiempo = ''
   servicio = ''

   //Datos sección VI entrada
   resp_cerrada = ['Sí','No']
   //Datos sección VI NG_MODEL
   recibir_info = ''
   mecanismos = ''

  constructor() { }

  ngOnInit(): void {
  }

  seccion2() {
    this.display_uno = 'none';
    this.display_dos = 'flex';
  }

  seccion3() {
    this.display_dos = 'none';
    this.display_tres = 'flex';
  }

  backto1(){
    this.display_dos = 'none';
    this.display_uno = 'flex';
  }

  backto2(){
    this.display_tres = 'none';
    this.display_dos = 'flex';
  }

  getFecha(){
    let date: Date = new Date();
    this.year = date.getFullYear()+'-';
    this.month = date.getMonth()+'-';
    this.day = date.getDay+'-'
    this.fecha = this.year+this.month+this.day;
  }
}
