import { Component, OnInit } from '@angular/core';
import { ArticuloService } from 'src/app/services/Articulos.service';


@Component({
  selector: 'app-tipos-violencia',
  templateUrl: './tipos-violencia.component.html',
  styleUrls: ['./tipos-violencia.component.css']
})
export class TiposViolenciaComponent implements OnInit {

  //Variables
  idArticulos: string[] = []
  titulo = ""
  autor = ""
  descripcion = ""
  contenido = ""
  imagen_selected: any =''
  index_selected = -1
  destacado1 = '';
  destacado2 = '';
  destacado3 = '';

  articulos_destacados: any[] = []
  articulos: any[] = []

  constructor(private _articulo: ArticuloService) { }

  ngOnInit(): void {
    this.obtenerArticulos();
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

  seleccionarArticulo(index: number) {
    this.titulo = this.articulos[index].titulo
    this.autor = this.articulos[index].autor
    this.descripcion = this.articulos[index].descripcion
    this.contenido = this.articulos[index].contenido
    this.imagen_selected = this.articulos[index].urlImagen
    this.index_selected = index
  }

  /* Metodos de control de interfaz */
  formatearUrl(url: string) {
    return 'center/cover url(' + url + ')'
  }

}
