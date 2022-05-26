import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ArticuloService } from 'src/app/services/Articulos.service';

@Component({
  selector: 'app-articulo-card-large',
  templateUrl: './articulo-card-large.component.html',
  styleUrls: ['./articulo-card-large.component.css']
})
export class ArticuloCardLargeComponent implements OnInit {

  constructor(private _articulo: ArticuloService, private router:Router) {
    
   }
  //Variables
  @Input() articulo:any = this._articulo.articulo;


  ngOnInit(): void {
    if (this.articulo.urlImagen ==""){
      this.articulo.urlImagen="../../../../assets/img/articulo1.png"
    }
    if (this.articulo.titulo ==""){
      this.articulo.titulo="La discriminación en el ambiente escolar"
    }
    if (this.articulo.descripcion ==""){
      this.articulo.descripcion="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget amet, tellus amet, vitae neque, aliquam dignissim. Ac diam... Seguir leyendo"
    }

  }

  seleccionarArticulo(){
    localStorage.setItem('articuloSeleccionado',JSON.stringify(this.articulo))
    this.router.navigate(['/articulo']);
  }
  

}