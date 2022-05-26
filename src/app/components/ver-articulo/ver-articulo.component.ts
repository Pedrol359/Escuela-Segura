import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ver-articulo',
  templateUrl: './ver-articulo.component.html',
  styleUrls: ['./ver-articulo.component.css']
})
export class VerArticuloComponent implements OnInit {

  constructor() { }
  articulo:any

  ngOnInit(): void {
    this.articulo= JSON.parse(localStorage.getItem('articuloSeleccionado') || ''); 
    //localStorage.setItem('articuloSeleccionado',JSON.stringify(this.articulo))
  }

}
