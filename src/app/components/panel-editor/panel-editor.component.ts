import { Component, OnInit } from '@angular/core';
import { ArticuloService } from 'src/app/services/Articulos.service';
import { AngularFireStorage } from '@angular/fire/compat/storage';

@Component({
  selector: 'app-panel-editor',
  templateUrl: './panel-editor.component.html',
  styleUrls: ['./panel-editor.component.css']
})
export class PanelEditorComponent implements OnInit {
  constructor(private _articulo:ArticuloService, private storage: AngularFireStorage) { }

  /*articulos:string[]=["../../../assets/icons/Panel-editor/destacado.svg","../../../assets/icons/Panel-editor/destacado2.svg",
  "../../../assets/icons/Panel-editor/destacado3.svg","../../../assets/icons/Panel-editor/destacado.svg",
  "../../../assets/icons/Panel-editor/destacado2.svg","../../../assets/icons/Panel-editor/destacado3.svg",
  "../../../assets/icons/Panel-editor/destacado.svg","../../../assets/icons/Panel-editor/destacado2.svg",
  "../../../assets/icons/Panel-editor/destacado3.svg","../../../assets/icons/Panel-editor/destacado.svg",
  "../../../assets/icons/Panel-editor/destacado2.svg","../../../assets/icons/Panel-editor/destacado3.svg"]*/
  articulos:any[] = []
  titulo="El cafe y la programación"
  autor="Filindes Dolca"
  descripcion="Un poco de descirpción"
  contenido="Nada en especial"
  imagen_selected:any = "../../../assets/icons/Panel-editor/selected-article.svg";

  titulo_input:string="0/35";
  cargando=false
  nuevoArticulo = true
  index_selected=-1
  

  ngOnInit(): void {
    this.obtenerArticulos()
  }

  seleccionarArticulo(index:number){   
    this.titulo=this.articulos[index].titulo
    this.autor=this.articulos[index].autor
    this.descripcion=this.articulos[index].descripcion
    this. contenido=this.articulos[index].contenido
    this.imagen_selected = this.articulos[index].urlImagen
    this.index_selected=index
    this.nuevoArticulo=false
  }
  getCharacters(limite:number,id_element:string) {
    var titulo:string = "0/35";
    var input =<HTMLInputElement> document.getElementById(id_element);
    var indicador:string = "";
    indicador = input.value.length+'\\'+limite;
    this.titulo_input = indicador;
  }

  obtenerArticulos() {
    this._articulo.obtenerArticulos().subscribe(data => {
        this.articulos = [];  
        data.forEach((element: any) => {
          this.articulos.push({
            id: element.payload.doc.id,
            ...element.payload.doc.data()
          })
        })
        console.log(this.articulos);
      });
  }

  publicarArticulo(){
    this._articulo.articulo.id=this._articulo.articulo.id
    this._articulo.articulo.titulo=this.titulo
    this._articulo.articulo.autor=this.autor
    this._articulo.articulo.descripcion=this.descripcion
    this._articulo.articulo.contenido=this.contenido
    this._articulo.articulo.urlImagen=this.imagen_selected
    console.log("articulo");
    console.log(this._articulo.articulo);
    let algo = this._articulo.agregarArticulo(this._articulo.articulo)
    console.log(algo)
  }

  filePath: string = '';
  arhivo: any;
  imagenCargada = false;
  nameFile: string = 'Seleccionar una imagen';
 
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
      }
    } catch (error) {
      console.log('Error al cargar la img local: ' + error);
      this.imagenCargada = false;
      this.filePath = '';
    }
  }
  subirImagen() { // En realidad modifica el usuario existente y le agrega una imagen

    let imagenSubida = false;
    // let userAlmacenado = false;
    try {
      if (this.imagenCargada) {
        let porcentaje = 0;
        const subirImagen = this.storage.upload(this.filePath, this.arhivo);

        const subscription = subirImagen.percentageChanges().subscribe((changes) => {
          let cont =0
          
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
  publicar(){
    this.subirImagen()
  }
  probar(){
    console.log(this.articulos);
    
  }
}
