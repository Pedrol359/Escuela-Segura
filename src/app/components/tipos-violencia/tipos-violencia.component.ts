import { Component, OnInit } from '@angular/core';
import { CAROUSEL_DATA_TIPOS } from './carousel.const.tipos';
import { ICarouselItem } from '../carousel/Icarousel-item.metadata'
@Component({
  selector: 'app-tipos-violencia',
  templateUrl: './tipos-violencia.component.html',
  styleUrls: ['./tipos-violencia.component.css']
})
export class TiposViolenciaComponent implements OnInit {

  public carouselIData: ICarouselItem[] = CAROUSEL_DATA_TIPOS;
  constructor() { }

  ngOnInit(): void {
  }

}
