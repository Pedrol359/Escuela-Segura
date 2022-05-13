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
  estado =[false,false,false,false,false,false,false,false,false,false]
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

  estados(){
    this.estado[0] =! this.estado[0]
    console.log(this.estado[0]);
    
    
  }
}
