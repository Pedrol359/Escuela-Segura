import { Component, OnInit } from '@angular/core';
import { ArticuloService } from 'src/app/services/Articulos.service';
import { AngularFireStorage } from '@angular/fire/compat/storage';

@Component({
  selector: 'app-panel-editor',
  templateUrl: './panel-editor.component.html',
  styleUrls: ['./panel-editor.component.css']
})
export class PanelEditorComponent implements OnInit {
  constructor(private _articulo: ArticuloService, private storage: AngularFireStorage) { }
  //Variables de control de interfaz
  vtnDeleteShow=false
  cargando = false
  titulo_count: string = "0/35";
  descripcion_count: string = "0/35";
  nuevoArticulo = true
  btnCancelarShow=false
  //Variables
  articulos: any[] = []
  idArticulos: string[] = []
  titulo = ""
  autor = ""
  descripcion = ""
  contenido = ""
  imagen_selected: any ='';
  // imagen_selected: any = "../../../assets/imagenes/inicio_story_principal.svg";

  index_selected = -1
  filePath: string = '';
  arhivo: any;
  imagenCargada = false;
  nameFile: string = 'Seleccionar una imagen';

  articuloToDelete=this._articulo.articulo
  articuloIdDelete=''
  articuloIndexDelete=-1


  ngOnInit(): void {
    this.obtenerArticulos()
  }

  seleccionarArticulo(index: number) {
    this.titulo = this.articulos[index].titulo
    this.autor = this.articulos[index].autor
    this.descripcion = this.articulos[index].descripcion
    this.contenido = this.articulos[index].contenido
    this.imagen_selected = this.articulos[index].urlImagen
    this.index_selected = index
    this.nuevoArticulo = false
    this.getCharacters()
  }

  publicarArticulo() {

    if (!(this.titulo == '' && this.descripcion == '' && this.contenido == '' && this.autor == '')) {
      if (this.imagen_selected =='') {
        alert("No haz subido ninguna imagen para tu articulo")
        return;
      }
      this.asignarDatos()
      if (this.nuevoArticulo) {
        
        this._articulo.agregarArticulo(this._articulo.articulo)
      } else {
        this._articulo.actualizarArticulo(this._articulo.articulo, this.idArticulos[this.index_selected])
      }
      this.nuevo()
    }

    console.log("articulo");
    console.log(this._articulo.articulo);
  }

  obtenerArticulos() {
    let subs = this._articulo.obtenerArticulos().subscribe(data => {
      this.articulos = [];
      data.forEach((element: any) => {
        this.articulos.push({
          ...element.payload.doc.data()
        })
        this.idArticulos.push(element.payload.doc.id)
      })

      subs.unsubscribe
      console.log(this.articulos);
      console.log(this.idArticulos);
    });
  }


  cargarImagen(event: any) {
    try {
      this.arhivo = event.target.files[0];
      const id = Math.random().toString(36).substring(2);
      this.imagenCargada = true;
      this.filePath = 'Imagenes_articulos/articulo_' + id;

      /* Cargar imagen para mostrarla en la vista previa */
      let reader = new FileReader();
      reader.readAsDataURL(this.arhivo);
      reader.onload = () => {
      this.imagen_selected = reader.result;
      this.btnCancelarShow = true
      }
    } catch (error) {
      console.log('Error al cargar la img local: ' + error);
      this.imagenCargada = false;
      this.filePath = '';
      this.btnCancelarShow = false
    }
  }
  subirImagen() { // En realidad modifica el usuario existente y le agrega una imagen

    let imagenSubida = false;
    // let userAlmacenado = false;
    try {
      console.log(this.imagenCargada);
      if (this.imagenCargada) {
        this.imagenCargada = false
        let porcentaje = 0;
        const subirImagen = this.storage.upload(this.filePath, this.arhivo);
        const subscription = subirImagen.percentageChanges().subscribe((changes) => {
          let cont = 0
          console.log(cont++);
          porcentaje = (changes || 0);
          console.log('porcentaje ' + porcentaje);
          imagenSubida = porcentaje >= 100;
          console.log('imagenSubida ' + imagenSubida);
          if (imagenSubida) {
            const ref = this.storage.ref(this.filePath).getDownloadURL().subscribe(url => {
              subscription.unsubscribe();
              ref.unsubscribe();
              this.imagen_selected = url;
              console.log(url);

              this.publicarArticulo();
            });
          }
        });// Con ese metodo se sube la imagen y te da el porcentaje de subida
      } else {
        this.publicarArticulo();
      }
    } catch (error) {
      console.log(error);
      this.cargando = false;
    }
  }

  publicar() { //aqui hacer la validacion
    this.subirImagen()
  }


  prepararElimiancion(index: number) {
    this.articuloToDelete = this.articulos[index]
    this.articuloIdDelete = this.idArticulos[index]
    this.vtnDeleteShow=false
    this.vtnDeleteShow=true
    console.log(this.articuloToDelete);
    console.log(this.vtnDeleteShow);
  }
  eliminarArticulo(idArticulo:string) {
      console.log("eliminar Articulo: "+ idArticulo+ " index: "+ this.articuloIndexDelete)
      let resul = this._articulo.eliminarArticulo(idArticulo)
      console.log(resul);
      this.vtnDeleteShow=false
  }

  nuevo() {
    this.nuevoArticulo = true
    this.titulo = ""
    this.autor = ""
    this.descripcion = ""
    this.contenido = ""
    this.imagen_selected = "";
    this.getCharacters()
    this.btnCancelarShow = false
    
  }



  asignarDatos() {
    if (this.nuevoArticulo) {
      this._articulo.articulo.titulo = this.titulo
      this._articulo.articulo.autor = this.autor
      this._articulo.articulo.descripcion = this.descripcion
      this._articulo.articulo.contenido = this.contenido
      this._articulo.articulo.urlImagen = this.imagen_selected
    } else {
      this.articulos[this.index_selected].titulo = this._articulo.articulo.titulo = this.titulo
      this.articulos[this.index_selected].autor = this._articulo.articulo.autor = this.autor
      this.articulos[this.index_selected].descripcion = this._articulo.articulo.descripcion = this.descripcion
      this.articulos[this.index_selected].contenido = this._articulo.articulo.contenido = this.contenido
      this.articulos[this.index_selected].urlImagen = this._articulo.articulo.urlImagen = this.imagen_selected
    }
  }



  /* Metodos de control de interfaz */
  formatearUrl(url: string) {
    return 'center/cover url(' + url + ')'
  }
  getCharacters() {
    this.titulo_count= this.titulo.length+'/35'
    this.descripcion_count= this.descripcion.length+'/100'
    this.btnCancelarShow = true
  }

}
