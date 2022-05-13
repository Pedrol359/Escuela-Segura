import { Component, OnInit } from '@angular/core';
import * as Mapboxgl from 'mapbox-gl';
import { environment } from '../../../environments/environment.prod';

@Component({
  selector: 'app-admin-inicio',
  templateUrl: './admin-inicio.component.html',
  styleUrls: ['./admin-inicio.component.css']
})
export class AdminInicioComponent implements OnInit {

  latitud = 21.507029616565315;
  longitud = -104.92007528951542;
  link_video = 'https://www.youtube.com/watch?v=fqcbNFHsLFs&ab_channel=Asociaci%C3%B3nProgresoparaM%C3%A9xico'
  video_code = ''
  // estado =[false,false,false,false,false,false,false,false,false,false]
  estado =[true,false,true,false]
  nombres=[
    "Instituto Tecnológico de Tepic",
    "Universidad Autonoma de Nayarit",
    "Universidad Tecnológica de Tepic",
    "Universidad Politécnica del Estado de Nayarit",
    "Universidad Vizcaya de las Américas",
    "CONALEP Tepic II 310",
    "CONALEP Tepic 169",
    "Colegio de Bachilleres del Estado de Nayarit",
    "Preparatoria del Valle",
    "Colegio Herbart"
  ]
  claves=["123456678","123456778","23456789","FT678902","GT567892","BFGHJ56789","2345678HJW","DUIKAN15678","DFYHJ567890","DFGHJK56789"]
  niveles=["Superior","Superior","Superior","Superior","Superior","Medio","Medio","Medio","Medio","Medio"]
  direcciones=[
    "Av. Tecnológico 2595, Lagos del Country, 63 ...",
    "Boulevard Tepic-Xalisco #325 C.P. 63155, Ciu...",
    "Carretera México 200, Km 9 63786, Col, 24 d...",
    "Calle Dr Ignacio Cuesta Barrera S/N Carreter...",
    "Calle Miñon Pte 7, Centro, 63000 Tepic, Nay.",
    "Alejandrina esquina con, Topacio, 63173 Tepi...",
    "Av. de las Torres 3, Col, Lomas de la Cruz, 63...",
    "Av Del Ejército 107, Fray Junípero Serra, 6316...",
    "Av. de la Cultura No. 30, Cd del Valle, 63199 ...",
    "Tokio 8, Cd del Valle, 63157 Tepic, Nay."
  ]
  constructor() { }

  ngOnInit(): void {
    this.getLocation();
    this.getVideoCode();
    console.log(this.estado[0]);
    
  }

  getLocation(){
    (Mapboxgl as any).accessToken = environment.mapboxKey;
    var mapa = new Mapboxgl.Map({
      container: 'map-box', // container CSS
      style: 'mapbox://styles/mapbox/streets-v11', //mapbox://styles/mapbox/streets-v11 (LIGHT)
      center: [this.longitud, this.latitud], // LONGITUD,LATITUD
      zoom: 11 // Zoom inicial
    });

    var marker = new Mapboxgl.Marker({
      draggable: false
    }).setLngLat([this.longitud, this.latitud]).addTo(mapa);

    // Add zoom and rotation controls to the map.
    mapa.addControl(new Mapboxgl.NavigationControl());
  }

  getVideoCode() {
    var code = this.link_video.split("?v=",2);
    this.video_code = code[1];
    console.log(this.video_code);
    code = this.video_code.split("&",2);
    console.log(this.video_code);
    this.video_code = 'https://www.youtube.com/embed/'+code[0];
    console.log(this.video_code);
  }

  check(est:boolean,index:number){
    this.estado[index] =est
    console.log(this.estado[index]);    
    console.log(index);    
  }
}
