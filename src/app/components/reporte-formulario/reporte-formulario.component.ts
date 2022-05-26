import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { PeticionesService, Municipio, Incidencia, Institucion } from 'src/app/services/peticiones.service';
import { ArticuloService } from 'src/app/services/Articulos.service';

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

  // Contenido destacado
  articulos: any[] = []
  articulos_destacados: any[] = []
  eliminados: string[] = []
  destacado1 = '';
  destacado2 = '';
  destacado3 = '';

  //Datos sección I entrada
  //municipios = ['Tepic','Xalisco','San Blas','Santa María del Oro','Santiago Ixcuintla','San Pedro Lagunillas']
  municipios: Municipio[] = []
  niveles_educativos = ['Nivel Medio Superior', 'Nivel Superior']
  instituciones_superior = ['Instituto Tecnológico de Tepic', 'Universidad Autonoma de Nayarit', 'Universidad del Valle']
  instituciones_media = ['Cetis 100', 'Cecyten', 'Conalep', 'Preparatoría #1']
  espacios = ['Dentro del aula', 'En una oficina o privado', 'Áreas comunes', 'Baños',
    'Fuera del plantel realizando una actividad académica', 'Fuera del plantel realizando otra actividad']
  //IF NIVEL
  //instituciones = this.instituciones_superior
  instituciones : Institucion[] = []
  //Datos sección I NG_MODEL
  municipio = this.municipios[0]
  nivel_educativo = this.niveles_educativos[0]
  indexNivel = -1
  indexViolencia = 1
  institucion = ""
  carrera = ''
  espacio = this.espacios[0]

  //Datos sección II entrada
  violencias = ['Verbal o Psicológica', 'Patrimonial', 'Física', 'Sexual']
  descripciones_verbal = ['Bromas hirientes', 'Apodos', 'Engaños', 'Ignorar', 'Celar', 'Culpabilizar'
    , 'Descalificar', 'Ridiculizar', 'Ofender', 'Humillar en público', 'Controlar o prohibir',
    'Amenazas', 'Manipulación']
  descripciones_patrimonial = ['Destrucción de artículos personales', 'Esconder artículos personales']
  descripciones_fisica = ['Dar sapes', 'Golpear "jugando"', 'Pellizcar', 'Arañazos',
    'Empujones', 'Jalones', 'Forcejeos', 'Cachetear', 'Patear', 'Encerrar o aislar']
  descripciones_sexual = ['Piropos', 'Miradas lascivas', 'Condicionar calificaciones a cambio de favores sexuales',
    'Manoseos', 'Envió de fotografías o videos íntimos sin haberlas solicitado',
    'Solicitud de fotografías o videos íntimos', 'Exponer contenido sexual sin consentimiento',
    'Tomar fotografías o videos íntimos sin consentimiento', 'Amenaza de difundir contenido intimo',
    'Difusión de fotografías intimas', 'Forzar a tener relaciones sexuales', 'Violación']
  horas = ['7:00AM', '8:00AM', '9:00AM', '10:00AM', '11:00AM', '12:00PM', '13:00PM', '14:00PM', '15:00PM', '16:00PM',
    '17:00PM', '18:00PM', '19:00PM', '20:00PM', '21:00PM', '22:00PM', '23:00PM', '00:00AM']
  //IF TIPO_VIOLENCIA
  descripciones = this.descripciones_verbal
  //Datos sección II NG_MODEL
  tipo_violencia = this.violencias[0]
  descripcion = this.descripciones_verbal[0]
  fecha_incidente = this.getFecha()
  hora_incidente = "13:00"

  //Datos sección III entrada
  sexos = ['Hombre', 'Mujer']
  sexosI = ['H', 'M']
  //Datos sección III NG_MODEL
  sexo_victima = this.sexos[0]
  edad_victima = 20

  //Datos sección IV entrada
  agresor = ['Compañero de clase', 'Compañero de escuela',
    'Relación de noviazgo dentro de la escuela', 'Relación de noviazgo fuera de la escuela',
    'Maestro', 'Director', 'Personal administrativo', 'Personal de labores varias', 'Personas ajenas a la escuela']
  //Datos sección IV NG_MODEL
  sexo_agresor = this.sexos[0]
  nombre_agresor = ''
  persona_agresora = this.agresor[0]

  //Datos sección V entrada
  acciones = ['Denuncié ante un maestro', 'Denuncié ante una autoridad escolar',
    'Denuncié ante una instancia', 'Ninguna']
  tiempos = ['Más de 12 meses', 'Entre 6 y 12 meses', 'Entre 3 y 6 meses', 'Menos de 3 meses', 'En los últimos 15 días']
  servicios = ['Atención psicológica', 'Atención psiquiátrica', 'Atención medica', 'Interrupcion legal del embarazo', 'Ninguna']
  //Datos sección V NG_MODEL
  accion = this.acciones[0]
  tiempo = this.tiempos[0]
  servicio = this.servicios[0]

  //Datos sección VI entrada
  resp_cerrada = ['Sí', 'No']
  //Datos sección VI NG_MODEL
  recibir_info = this.resp_cerrada[0]
  mecanismos = this.resp_cerrada[0]

  //Objeto reporte
  reporte: Incidencia = {
    ID_INCIDENCIA: 0,
    INC_ACCION: "",
    INC_AGR_EDAD: "",
    INC_AGR_GENERO: "",
    INC_AGR_NOMBRE: "",
    INC_AGR_TIPO: "",
    INC_ESP: "",
    INC_FECHA: "",
    INC_HORA: "",
    INC_INST: "",
    INC_MUN: "",
    INC_SERVICIO: "",
    INC_TIEMPO: "",
    INC_VIC_EDAD: "",
    INC_VIC_GENERO: "",
    INC_VIO_DESCR: "",
    violencias_ID_VIOLENCIA: 0
  }
  listaIncidencias: Incidencia[] = [];

  constructor(private peticiones: PeticionesService, private _articulo: ArticuloService) { }

  ngOnInit(): void {
    this.listarMunicipios();
    this.obtenerArticulos();
  }
  listarMunicipios() {
    this.peticiones.getMunicipios().subscribe(res => {
      this.municipios = <any>res;
      console.log(this.municipios);
    },
      err => console.log(err)
    );
  }

  seccion2() {
    this.display_uno = 'none';
    this.display_dos = 'flex';
  }

  seccion3() {
    this.display_dos = 'none';
    this.display_tres = 'flex';
  }

  backto1() {
    this.display_dos = 'none';
    this.display_uno = 'flex';
  }

  backto2() {
    this.display_tres = 'none';
    this.display_dos = 'flex';
    delete this.reporte.ID_INCIDENCIA;
    this.peticiones.addInc(this.reporte).subscribe();
  }

  getFecha(): string {
    let date: Date = new Date();
    this.year = date.getFullYear() + '-';
    var mes = date.getMonth() + 1;
    if (mes < 10) this.month = '0' + mes + '-';
    else this.month = mes + '-';
    var dia = date.getDate();
    if (dia < 10) this.day = '0' + dia;
    else this.day = dia + '';
    this.fecha = this.year + this.month + this.day;
    console.log(this.fecha)
    return this.fecha;
  }

  /* Funciones cambios de valor en combos */
  setNivel() {    
    if (this.indexNivel==0) {
      this.peticiones.getInstitucionesBy("Medio",this.reporte.INC_MUN).subscribe(res => {
        this.instituciones = <any>res;
        console.log(this.instituciones);
      },
        err => console.log(err)
      );
    }
    else {
      this.peticiones.getInstitucionesBy("Superior",this.reporte.INC_MUN).subscribe(res => {
        this.instituciones = <any>res;
        console.log(this.instituciones);
      },
        err => console.log(err)
      );
    }
  }

  setTipo() {
    switch (this.tipo_violencia) {
      case 'Verbal o Psicológica': {
        this.descripciones = this.descripciones_verbal
        break;
      }
      case 'Patrimonial': {
        this.descripciones = this.descripciones_patrimonial
        break;
      }
      case 'Física': {
        this.descripciones = this.descripciones_fisica
        break;
      }
      case 'Sexual': {
        this.descripciones = this.descripciones_sexual
        break;
      }
    }
  }

  getReporte() {
    if (this.reporte.INC_AGR_GENERO == "")

      this.reporte.violencias_ID_VIOLENCIA = parseInt(this.reporte.violencias_ID_VIOLENCIA + "") + this.indexViolencia
    console.log(this.reporte.violencias_ID_VIOLENCIA)
    console.log(this.reporte)
    this.peticiones.addInc(this.reporte).subscribe()
  }

  obtenerArticulos() {
    let subs = this._articulo.obtenerArticulos().subscribe(data => {
        this.articulos = [];
        this.articulos_destacados = [];
        data.forEach((element: any) => {
            this.articulos.push({
                ...element.payload.doc.data(),
                id: element.payload.doc.id
            })
        })
        subs.unsubscribe
        this.obtenerArticulosDestacados();
        // console.log(this.articulos_destacados);
    });
  }

  obtenerArticulosDestacados() {
    // Con este método filtramos los artículos destacados de la
    // lista de artículos obtenidos
    for (var a in this.articulos) {
        if (this.articulos[a].destacado == '0') {
            this.destacado1 = a;
            this.articulos_destacados[0] = this.articulos[a];
        }

        if (this.articulos[a].destacado == '1') {
            this.destacado2 = a;
            this.articulos_destacados[1] = this.articulos[a];
        }

        if (this.articulos[a].destacado == '2') {
            this.destacado3 = a;
            this.articulos_destacados[2] = this.articulos[a];
        }
    }
    console.log('[Artículo Destacados]');
    console.log(this.articulos_destacados);
  }

  formatearUrl(url: string) {
    return 'center/cover url(' + url + ')';
  }
}
