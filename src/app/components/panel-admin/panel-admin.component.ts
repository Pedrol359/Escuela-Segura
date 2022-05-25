import { Component, OnInit } from '@angular/core';
import * as Mapboxgl from 'mapbox-gl';
import { environment } from '../../../environments/environment.prod';
import { ArticuloService } from 'src/app/services/Articulos.service';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { InstitucionesService } from 'src/app/services/Instituciones.service';
@Component({
    selector: 'app-panel-admin',
    templateUrl: './panel-admin.component.html',
    styleUrls: ['./panel-admin.component.css'],
})
export class PanelAdminComponent implements OnInit {
    constructor(private _articulo: ArticuloService, private storage: AngularFireStorage, private _institucion: InstitucionesService) { }
    ngOnInit(): void {
        this.getLocation();
        this.getVideoCode();
        this.obtenerInstituciones();
        this.obtenerArticulos();
    }


    // Contenido destacado
    articulo_destacado_1 = 'flex';
    articulo_destacado_2 = 'flex';
    articulo_destacado_3 = 'flex';
    before_catalogo = 'flex';
    articulo_default_1 = 'none';
    articulo_default_2 = 'none';
    articulo_default_3 = 'none';
    catalogo_articulos = 'none';
    articulos_default: boolean[] = [false, false, false];
    articulos: any[] = []
    articulos_destacados: any[] = []
    eliminados: string[] = []
    destacado1 = '';
    destacado2 = '';
    destacado3 = '';

    // Grid de artículos
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
            console.log(this.articulos);
            console.log("Artículos destacados:");
            this.obtenerArticulosDestacados();
            console.log(this.articulos_destacados);
        });
    }

    obtenerArticulosDestacados() {
        // Con este método filtramos los artículos destacados de la
        // lista de artículos obtenidos
        for (var a in this.articulos) {
            if (this.articulos[a].destacado == "0") {
                this.destacado1 = a;
                this.articulos_destacados[0] = this.articulos[a];

            } else
                if (this.articulos[a].destacado == "1") {
                    this.destacado2 = a;
                    this.articulos_destacados[1] = this.articulos[a];
                } else
                    if (this.articulos[a].destacado == "2") {
                        this.destacado3 = a;
                        this.articulos_destacados[2] = this.articulos[a];
                    }
        }
    }

    eliminarArticulo(index: number) {
        console.log('Artículo seleccionado: ' + index);
        // Removemos de la lista de destacado al artículo seleccionado
        // además de cambiarle el estilo a la tarjeta
        // this.obtenerArticulosDestacados();
        switch (index) {
            case 0:
                this.articulo_destacado_1 = 'none';
                this.articulo_default_1 = 'flex';
                this.articulos[+this.destacado1].destacado = "";
                this.destacado1 = "";
                break;
            case 1:
                this.articulo_destacado_2 = 'none';
                this.articulo_default_2 = 'flex';
                this.articulos[+this.destacado2].destacado = "";
                this.destacado2 = "";
                break;
            case 2:
                this.articulo_destacado_3 = 'none';
                this.articulo_default_3 = 'flex';
                this.articulos[+this.destacado3].destacado = "";
                this.destacado3 = "";
                break;
        }
    }

    seleccionarArticulo(index: number) {
        console.log('Artículo seleccionado: ' + index);
        // Agregamos el artículo a la lista de destacados
        // modificamos opacidad del articulo en lista de articulos disponibles
        if (this.destacado1 == "") {
            this.articulos[index].destacado = "0";
            this.articulos_destacados[0] = this.articulos[index];
            this.destacado1 = "" + index;
            // ->
            this.articulo_destacado_1 = 'flex';
            this.articulo_default_1 = 'none';

        } else if (this.destacado2 == "") {
            this.articulos[index].destacado = "1";
            this.articulos_destacados[1] = this.articulos[index];
            this.destacado2 = "" + index;
            // ->
            this.articulo_destacado_2 = 'flex';
            this.articulo_default_2 = 'none';

        } else if (this.destacado3 == "") {
            this.articulos[index].destacado = "2";
            this.articulos_destacados[2] = this.articulos[index];
            this.destacado3 = "" + index;
            // ->
            this.articulo_destacado_3 = 'flex';
            this.articulo_default_3 = 'none';
        }
        console.log(this.articulos[index]);
    }

    asignarFiltro(index: number) {
        if (this.articulos[index].destacado == "0") {
            return 'opacity(20%)';
        } else if (this.articulos[index].destacado == "1") {
            return 'opacity(20%)';
        } else if (this.articulos[index].destacado == "2") {
            return 'opacity(20%)';
        } else {
            return 'brightness(100%)';
        }
    }

    formatearUrl(url: string) {
        return 'center/cover url(' + url + ')';
    }

    guardarArticulos() {
        this.before_catalogo = 'flex';
        this.catalogo_articulos = 'none';
    }

    eliminar() {
        for (let idArticulo of this.eliminados) {
            this._articulo.eliminarArticulo(idArticulo)
        }
        this.eliminados = []
    }


    verArticulos() {
        // Secciones
        this.before_catalogo = 'none';
        this.catalogo_articulos = 'flex';
        // activar el display del grid del total de articulos para seleccionar
    }

    // Actualizar información de contacto

    modal_update = 'none';
    modal_content = 'none';
    modal_add = 'none';
    displayYoutube = 'none';

    latitud = 21.507029616565315;
    longitud = -104.92007528951542;
    link_video =
        'https://www.youtube.com/watch?v=fqcbNFHsLFs&ab_channel=Asociaci%C3%B3nProgresoparaM%C3%A9xico';
    video_code = '';
    archivo: any;
    imagenCargada = false;
    cargando = false
    filePath: string = '';
    imagen_selected: any = "../../../assets/imagenes/inicio_story_principal.svg";
    getLocation() { // Mapa
        (Mapboxgl as any).accessToken = environment.mapboxKey;
        var mapa = new Mapboxgl.Map({
            container: 'map-box',
            style: 'mapbox://styles/mapbox/streets-v11',
            center: [this.longitud, this.latitud],
            zoom: 11,
        });
        var marker = new Mapboxgl.Marker({
            draggable: true,
        })
            .setLngLat([this.longitud, this.latitud])
            .addTo(mapa);
        mapa.addControl(new Mapboxgl.NavigationControl());
    }
    getVideoCode() { // Obtener link
        var code = this.link_video.split('?v=', 2);
        this.video_code = code[1];
        // console.log(this.video_code);
        console.log(this.video_code);
        code = this.video_code.split('&', 2);
        // console.log(this.video_code);
        console.log(this.video_code);
        this.video_code = 'https://www.youtube.com/embed/' + code[0];
        // console.log(this.video_code);
        console.log(this.video_code);
    }

    cargarImagen(event: any) {
        try {
            this.archivo = event.target.files[0];
            const id = Math.random().toString(36).substring(2);
            this.imagenCargada = true;
            this.filePath = 'Imagenes_articulos/articulo_' + id;
            /* Cargar imagen para mostrarla en la vista previa */
            let reader = new FileReader();
            reader.readAsDataURL(this.archivo);
            reader.onload = () => {
                this.imagen_selected = reader.result;
            }
        } catch (error) {
            console.log('Error al cargar la img local: ' + error);
            this.imagenCargada = false;
            this.filePath = '';
        }
    }
    open_modal() {
        this.modal_update = 'flex';
        this.modal_content = '';
    }
    open_modal_add() {
        this.modal_add = 'block';
    }
    open_yt() {
        this.modal_content = 'none';
        this.displayYoutube = 'block';
    }
    close_modal() {
        this.modal_update = 'none';
        this.modal_content = 'none';
        this.displayYoutube = 'none';
    }
    close_modal_add() {
        this.modal_add = 'none';
    }
    // Escuelas Seguras
    estado = [true, false, true, false];
    nombres = [
        'Instituto Tecnológico de Tepic',
        'Universidad Autonoma de Nayarit',
        'Universidad Tecnológica de Tepic',
        'Universidad Politécnica del Estado de Nayarit',
        'Universidad Vizcaya de las Américas',
        'CONALEP Tepic II 310',
        'CONALEP Tepic 169',
        'Colegio de Bachilleres del Estado de Nayarit',
        'Preparatoria del Valle',
        'Colegio Herbart',
    ];
    claves = [
        '123456678',
        '123456778',
        '23456789',
        'FT678902',
        'GT567892',
        'BFGHJ56789',
        '2345678HJW',
        'DUIKAN15678',
        'DFYHJ567890',
        'DFGHJK56789',
    ];
    niveles = [
        'Superior',
        'Superior',
        'Superior',
        'Superior',
        'Superior',
        'Medio',
        'Medio',
        'Medio',
        'Medio',
        'Medio',
    ];
    direcciones = [
        'Av. Tecnológico 2595, Lagos del Country, 63 ...',
        'Boulevard Tepic-Xalisco #325 C.P. 63155, Ciu...',
        'Carretera México 200, Km 9 63786, Col, 24 d...',
        'Calle Dr Ignacio Cuesta Barrera S/N Carreter...',
        'Calle Miñon Pte 7, Centro, 63000 Tepic, Nay.',
        'Alejandrina esquina con, Topacio, 63173 Tepi...',
        'Av. de las Torres 3, Col, Lomas de la Cruz, 63...',
        'Av Del Ejército 107, Fray Junípero Serra, 6316...',
        'Av. de la Cultura No. 30, Cd del Valle, 63199 ...',
        'Tokio 8, Cd del Valle, 63157 Tepic, Nay.',
    ];
    check(est: boolean, index: number) {
        this.estado[index] = est;
        console.log(this.estado[index]);
        console.log(index);
    }
    // Instituciones de apoyo
    instituciones: any[] = []
    institucion = {
        nombre: "",
        descripcion: "",
        direccion: "",
        telefono: ""
    }
    nuevaInstitucion = {
        nombre: "",
        descripcion: "",
        direccion: "",
        telefono: ""
    }
    index: number = 0;
    combo_option_0 = 'flex';
    getDatosInstitucion(id: any) {
        this.combo_option_0 = 'none';
        this.institucion.direccion = this.instituciones
        [id].direccion;
        this.institucion.telefono = this.instituciones[id].telefono;
        this.institucion.descripcion = this.instituciones[id].descripcion;
    }
    obtenerInstituciones() {
        this._institucion.obtenerInstituciones().subscribe(data => {
            this.instituciones = [];
            data.forEach((element: any) => {
                this.instituciones.push({
                    id: element.payload.doc.id,
                    ...element.payload.doc.data()
                })
            })
            console.log(this.instituciones.length);
        });
    }
    agregarInstitucion() {
        this.obtenerInstituciones();
        this._institucion.institucion.id = this.instituciones.length;
        this._institucion.institucion.nombre = this.nuevaInstitucion.nombre;
        this._institucion.institucion.direccion = this.nuevaInstitucion.direccion;
        this._institucion.institucion.telefono = this.nuevaInstitucion.telefono;
        this._institucion.institucion.descripcion = this.nuevaInstitucion.descripcion;
        this._institucion.agregarInstitucion(this.nuevaInstitucion)
        console.log(this._institucion.institucion);
    }
    // Guardar todo
    guardarTodo() {
        console.log(this.institucion);
    }
}
