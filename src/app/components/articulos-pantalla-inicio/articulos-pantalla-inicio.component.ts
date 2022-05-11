import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-articulos-pantalla-inicio',
  templateUrl: './articulos-pantalla-inicio.component.html',
  styleUrls: ['./articulos-pantalla-inicio.component.css']
})
export class ArticulosPantallaInicioComponent implements OnInit {

  constructor() {

  }
  //Variables
  t1 = "La discriminación en el ambiente escolar"
  t2 = "La discriminación en el ambiente escolar"
  t3 = "La discriminación en el ambiente escolar"
  c1 = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget amet, tellus amet, vitae neque, aliquam dignissim. Ac diam"
  c2 = "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Itaque dignissimos accusantium rem voluptates, laboriosam nostrum,"
  c3 = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget amet, tellus amet, vitae neque, aliquam dignissim. Ac diam"
  imgS1 = ""
  imgS2 = ""
  sl1=true
  ngOnInit(): void {
    this.imgS1 = "../../../../assets/img/img1-1.png"
    this.imgS2 = "../../../../assets/img/img1-2.png"
  }

  slider1() {
    this.imgS1 = "../../../../assets/img/img1-1.png"
    this.imgS2 = "../../../../assets/img/img1-2.png"
    this.sl1=true
  }
  slider2() {
    this.imgS1 = "../../../../assets/img/img1-2.png"
    this.imgS2 = "../../../../assets/img/img1-1.png"
    this.sl1=false
  }
}
