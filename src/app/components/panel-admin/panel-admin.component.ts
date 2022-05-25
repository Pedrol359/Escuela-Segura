import { Component, OnInit } from '@angular/core';
import * as Mapboxgl from 'mapbox-gl';
import * as MapboxGeocoder from '@mapbox/mapbox-gl-geocoder';
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
        this.comprobarDestacados();
    }

    comprobarDestacados() {
        // Validamos que el array de destacados tenga info,
        // sino cambiamos el diseño de la tarjeta para 'seleccionar artículo'
        if (this.articulos_destacados[0] == null) {
            this.articulo_destacado_1 = 'none';
            this.articulo_default_1 = 'flex';
            console.log('Destacado 1 no existe');
        } else {
            this.articulo_destacado_1 = 'flex';
            this.articulo_default_1 = 'none';
        }

        if (this.articulos_destacados[1] == null) {
            this.articulo_destacado_2 = 'none';
            this.articulo_default_2 = 'flex';
            console.log('Destacado 2 no existe');
        } else {
            this.articulo_destacado_2 = 'flex';
            this.articulo_default_2 = 'none';
        }

        if (this.articulos_destacados[2] == null) {
            this.articulo_destacado_3 = 'none';
            this.articulo_default_3 = 'flex';
            console.log('Destacado 3 no existe');
        } else {
            this.articulo_destacado_3 = 'flex';
            this.articulo_default_3 = 'none';
        }
    }

    eliminarArticulo(index: number) {
        console.log('Artículo eliminado: ' + index);
        // Removemos de la lista de destacado al artículo seleccionado
        // además de cambiarle el estilo a la tarjeta
        switch (index) {
            case 0:
                // Cambiamos el diseño de la tarjeta
                this.articulo_destacado_1 = 'none';
                this.articulo_default_1 = 'flex';
                this.destacado1 = "";
                // Borramos el campo destacado
                this.articulos_destacados[0].destacado = '';
                // Actualizamos en Firebase
                this._articulo.actualizarArticulo(this.articulos_destacados[0], this.articulos_destacados[0].id);
                break;
            case 1:
                // Cambiamos el diseño de la tarjeta
                this.articulo_destacado_2 = 'none';
                this.articulo_default_2 = 'flex';
                this.destacado2 = "";
                // Borramos el campo destacado
                this.articulos_destacados[1].destacado = '';
                // Actualizamos en Firebase
                this._articulo.actualizarArticulo(this.articulos_destacados[1], this.articulos_destacados[1].id);
                break;
            case 2:
                // Cambiamos el diseño de la tarjeta
                this.articulo_destacado_3 = 'none';
                this.articulo_default_3 = 'flex';
                this.destacado3 = "";
                // Borramos el campo destacado
                this.articulos_destacados[2].destacado = '';
                // Actualizamos en Firebase
                this._articulo.actualizarArticulo(this.articulos_destacados[2], this.articulos_destacados[2].id);
                break;
        }
        console.log(this.articulos);
        console.log(this.articulos_destacados);
    }

    seleccionarArticulo(index: number) {
        console.log('Artículo seleccionado: ' + index);
        // Agregamos el artículo a la lista de destacados
        // modificamos opacidad del articulo en lista de articulos disponibles
        if (this.destacado1 == '') {
            this.articulos[index].destacado = '0';
            this.articulos_destacados[0] = this.articulos[index];
            this.destacado1 = '' + index;
            // ->
            this.articulo_destacado_1 = 'flex';
            this.articulo_default_1 = 'none';

        } else if (this.destacado2 == '') {
            this.articulos[index].destacado = '1';
            this.articulos_destacados[1] = this.articulos[index];
            this.destacado2 = '' + index;
            // ->
            this.articulo_destacado_2 = 'flex';
            this.articulo_default_2 = 'none';

        } else if (this.destacado3 == '') {
            this.articulos[index].destacado = '2';
            this.articulos_destacados[2] = this.articulos[index];
            this.destacado3 = '' + index;
            // ->
            this.articulo_destacado_3 = 'flex';
            this.articulo_default_3 = 'none';
        }
        console.log(this.articulos[index]);
    }

    asignarFiltro(index: number) {
        if (this.articulos[index].destacado == '0') {
            return 'opacity(20%)';
        } else if (this.articulos[index].destacado == '1') {
            return 'opacity(20%)';
        } else if (this.articulos[index].destacado == '2') {
            return 'opacity(20%)';
        } else {
            return 'brightness(100%)';
        }
    }

    formatearUrl(url: string) {
        return 'center/cover url(' + url + ')';
    }

    guardarArticulos() {
        // Validar que haya 3 artículos destacados
        if (this.articulos_destacados[0] != '') {
            if (this.articulos_destacados[1] != '') {
                if (this.articulos_destacados[2] != '') {
                    // Actualizamos individualmente
                    this._articulo.actualizarArticulo(this.articulos_destacados[0], this.articulos_destacados[0].id);

                    this._articulo.actualizarArticulo(this.articulos_destacados[1], this.articulos_destacados[1].id);

                    this._articulo.actualizarArticulo(this.articulos_destacados[2], this.articulos_destacados[2].id);

                    alert('¡Se guardaron los artículos destacados!');

                    // Visualización de sección
                    this.before_catalogo = 'flex';
                    this.catalogo_articulos = 'none';
                } else {
                    alert('Es necesario seleccionar tres artículos destacados\nSelecciona el artículo destacado 3');
                }
            } else {
                alert('Es necesario seleccionar tres artículos destacados\nSelecciona el artículo destacado 2');
            }
        } else {
            alert('Es necesario seleccionar tres artículos destacados\nSelecciona el artículo destacado 1');
        }
    }

    verArticulos() {
        // Activar el display del grid del total de articulos para seleccionar
        this.before_catalogo = 'none';
        this.catalogo_articulos = 'flex';
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
    imagen_selected: any = '../../../assets/imagenes/inicio_story_principal.svg';

    getLocation() { // Mapa
        (Mapboxgl as any).accessToken = environment.mapboxKey;

        var mapa = new Mapboxgl.Map({
            container: 'map-box',
            style: 'mapbox://styles/mapbox/streets-v11',
            center: [this.longitud, this.latitud],
            zoom: 13,
        });

        const geocoder = new MapboxGeocoder({
            accessToken: environment.mapboxKey,
            marker: false,
            mapboxgl: mapa,
            placeholder: 'Busca tu dirección',
        }).addTo(mapa);

        mapa.addControl(new Mapboxgl.NavigationControl());

        var marker = new Mapboxgl.Marker({
            draggable: true,
        })
            .setLngLat([this.longitud, this.latitud])
            .addTo(mapa);

        marker.on('drag', () => {
            this.latitud = marker.getLngLat().lat;
            this.longitud = marker.getLngLat().lng;
            console.log(this.latitud + ', ' + this.longitud);
        });

        mapa.on('click', (e) => {
            marker.setLngLat(e.lngLat);
            this.latitud = marker.getLngLat().lat;
            this.longitud = marker.getLngLat().lng;
            console.log(this.latitud + ', ' + this.longitud);
        });

    }

    getVideoCode() { // Obtener link
        var code = this.link_video.split('?v=', 2);
        this.video_code = code[1];
        // console.log(this.video_code);
        code = this.video_code.split('&', 2);
        // console.log(this.video_code);
        this.video_code = 'https://www.youtube.com/embed/' + code[0];
        // console.log(this.video_code);
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
    index: number = 0;
    combo_option_0 = 'flex';
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
    idInstituciones: any[] = [];
    instituciones: any[] = [];
    institucion = {
        nombre: '',
        id: '',
        descripcion: '',
        direccion: '',
        telefono: ''
    }

    nuevaInstitucion = {
        nombre: '',
        id: '',
        descripcion: '',
        direccion: '',
        telefono: ''
    }

    updateInstitucionApoyo() {
        // Validar que no haya campos vacíos
        if ((this.institucion.direccion != '' && this.institucion.telefono != '' && this.institucion.descripcion != '')) {
            // Validar número telefónico
            if (this.institucion.telefono.length == 10) {
                if (this.institucion.telefono.match(/^(\d){10}$/g)) {
                    this._institucion.actualizarInstituciones(this.institucion, this.idInstituciones[this.index])
                } else {
                    alert('Solo se aceptan números para el número telefónico');
                    return;
                }
            } else {
                alert('El número telefónico debe contener diez digitos\nEjemplo: 1234567890');
                return;
            }
        } else {
            alert('Es necesario rellenar todos los campos para actualizar la institución de apoyo');
        }
    }

    getDatosInstitucion(id: any) {
        console.log('Index = ' + this.index);
        this.combo_option_0 = 'none';
        this.institucion.nombre = this.instituciones[id].nombre;
        this.institucion.id = this.instituciones[id].id;
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
                this.idInstituciones.push(element.payload.doc.id);
            })
            console.log(this.instituciones);

        });
        console.log(this.idInstituciones);
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
        this.updateInstitucionApoyo();
    }
}
