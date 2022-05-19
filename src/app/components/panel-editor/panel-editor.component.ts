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

  articulos:any[] = []
  articulos_copy:any[] = []
  id=""
  titulo=""
  autor=""
  descripcion=""
  contenido=""
  imagen_selected:any = "../../../assets/imagenes/inicio_story_principal.svg";

  titulo_input:string="0/35";
  cargando=false
  nuevoArticulo = true
  index_selected=-1
  filePath: string = '';
  arhivo: any;
  imagenCargada = false;
  nameFile: string = 'Seleccionar una imagen';
  elimiandos:string[]=[]
  

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

  publicarArticulo(){
    
   if(!(this.titulo =='' && this.descripcion =='' && this.contenido=='' && this.autor=='')){
    this.asignarDatos()
     if (this.nuevoArticulo){
      this._articulo.agregarArticulo(this._articulo.articulo)
    }else{
      this._articulo.actualizarArticulo(this._articulo.articulo)
    }
   }
    
    console.log("articulo");
    console.log(this._articulo.articulo);

    //verifica si hay articulos por eliminar de la BD
    console.log(this.elimiandos);
    console.log(this.elimiandos.length);
    
    if (this.elimiandos.length>0){
      console.log("eliminados");
      this.eliminar()
    }
    else
      console.log("no eliminados");
      
    
  }

  obtenerArticulos() {
    let subs =this._articulo.obtenerArticulos().subscribe(data => {
        this.articulos = [];  
        data.forEach((element: any) => {
          this.articulos.push({
            ...element.payload.doc.data(),
            id: element.payload.doc.id
          })
          this.articulos_copy=this.articulos
        })
        subs.unsubscribe
        console.log(this.articulos);
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
      console.log(this.imagenCargada);
      
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

  getCharacters(limite:number,id_element:string) {
    var titulo:string = "0/35";
    var input =<HTMLInputElement> document.getElementById(id_element);
    var indicador:string = "";
    indicador = input.value.length+'\\'+limite;
    this.titulo_input = indicador;
  }

  eliminar(){
    for (let idArticulo of this.elimiandos) {
      //elimina en la base de daos articulo x articulo
      this._articulo.eliminarArticulo(idArticulo)      
    }
    //con esto se eliminan todos de forma local
    this.elimiandos =[]
  }
  
  nuevo(esNuevo:boolean){
    this.nuevoArticulo=true
    this.id=""
    this.titulo=""
    this.autor=""
    this.descripcion=""
    this.contenido=""
    this.imagen_selected = "../../../assets/imagenes/inicio_story_principal.svg";
    if (!esNuevo){
      this.elimiandos=[]
      this.articulos=this.articulos_copy
    }

  }
  prepararElimiancion(index:number){
    //se guarda el id del documento de los articulos eliminados
    this.elimiandos.push(this.articulos[index].id);
    this.articulos.splice(index,1);// se elimina el articulo de forma local
  }

  asignarDatos(){
    if (this.nuevoArticulo){
      this.articulos.push({
        titulo:this.titulo,
        id:'',
        autor:this.autor,
        descripcion:this.descripcion,
        contenido:this.contenido,
        urlImagen:this.imagen_selected
      })
    this._articulo.articulo.id=''
    this._articulo.articulo.titulo=this.titulo
    this._articulo.articulo.autor=this.autor
    this._articulo.articulo.descripcion=this.descripcion
    this._articulo.articulo.contenido=this.contenido
    this._articulo.articulo.urlImagen=this.imagen_selected
    }else{
    this._articulo.articulo.id=this.articulos[this.index_selected].id
    this.articulos[this.index_selected].titulo=this._articulo.articulo.titulo=this.titulo
    this.articulos[this.index_selected].autor=this._articulo.articulo.autor=this.autor
    this.articulos[this.index_selected].descripcion=this._articulo.articulo.descripcion=this.descripcion
    this.articulos[this.index_selected].contenido=this._articulo.articulo.contenido=this.contenido
    this.articulos[this.index_selected].urlImagen=this._articulo.articulo.urlImagen=this.imagen_selected
    this.articulos_copy=this.articulos
  }
  }

  formatearUrl(url:string){
    return 'center/cover url('+url+')'
  }
}
