import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { ArticuloService } from 'src/app/services/Articulos.service';


@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  // Contenido destacado
  articulos: any[] = []
  articulos_destacados: any[] = []
  eliminados: string[] = []
  destacado1 = '';
  destacado2 = '';
  destacado3 = '';

  constructor(private router: Router,private _articulo: ArticuloService) { }

  ngOnInit(): void {
    this.router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
          return;
      }
      window.scrollTo(0, 0)
    });
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
