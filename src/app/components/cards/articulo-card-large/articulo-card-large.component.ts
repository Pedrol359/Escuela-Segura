import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-articulo-card-large',
  templateUrl: './articulo-card-large.component.html',
  styleUrls: ['./articulo-card-large.component.css']
})
export class ArticuloCardLargeComponent implements OnInit {

  constructor() {
    
    
   }
  //Variables
  @Input() url="";
  @Input() titulo="";
  @Input() descripcion="";


  ngOnInit(): void {
    if (this.url ==""){
      this.url="../../../../assets/img/articulo1.png"
    }
    if (this.titulo ==""){
      this.titulo="La discriminación en el ambiente escolar"
    }
    if (this.descripcion ==""){
      this.descripcion="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget amet, tellus amet, vitae neque, aliquam dignissim. Ac diam... Seguir leyendo"
    }

  }
  

}