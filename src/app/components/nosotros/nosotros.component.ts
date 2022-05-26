import { Component, OnInit } from '@angular/core';
import * as Mapboxgl from 'mapbox-gl';
import { environment } from '../../../environments/environment.prod';
import { CAROUSEL_DATA_NOSOTROS } from './carousel.const.nosotros';
import { ICarouselItem } from '../carousel/Icarousel-item.metadata'
import { Router, NavigationEnd } from '@angular/router';
import { InformacionContactoService } from 'src/app/services/InformacionContacto';

@Component({
  selector: 'app-nosotros',
  templateUrl: './nosotros.component.html',
  styleUrls: ['./nosotros.component.css']
})

export class NosotrosComponent implements OnInit {
  latitud = 21.507029616565315;
  longitud = -104.92007528951542;
  link_video = 'https://www.youtube.com/watch?v=fqcbNFHsLFs&ab_channel=Asociaci%C3%B3nProgresoparaM%C3%A9xico'
  video_code = ''
  public carouselIData: ICarouselItem[] = CAROUSEL_DATA_NOSOTROS;
  //Info de contacto
  informacionContacto: any[] = []
  correoContacto = ""
  paginaWeb = ""

  constructor(private router: Router,private _contacto: InformacionContactoService) { }


  ngOnInit(): void {
    this.router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
          return;
      }
      window.scrollTo(0, 0)
    });
    this.obtenerInformacionContacto();
    this.getLocation();
    this.getVideoCode();
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

  obtenerInformacionContacto() {
    let subs = this._contacto.obtenerContacto().subscribe(data => {
        this.informacionContacto = [];
        data.forEach((element: any) => {
            this.informacionContacto.push({
                ...element.payload.doc.data(),
                id: element.payload.doc.id
            })
        })
        subs.unsubscribe
        console.log('[Información Contacto]');
        console.log(this.informacionContacto);
        // Establecemos ubicación
        this.latitud = +this.informacionContacto[0].latitud;
        this.longitud = +this.informacionContacto[0].longitud;
        this.correoContacto = this.informacionContacto[0]['correo contacto'];
        this.paginaWeb = this.informacionContacto[0]['sitio web']
        this.getLocation();
    });
  }
}
