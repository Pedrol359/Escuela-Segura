import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reporte-formulario',
  templateUrl: './reporte-formulario.component.html',
  styleUrls: ['./reporte-formulario.component.css']
})
export class ReporteFormularioComponent implements OnInit {

   // Secciones del formulario
   display_uno = 'flex';
   display_dos = 'none';
   display_tres = 'none';

   // Fecha actual
   year = ''
   month = ''
   day = ''
   fecha = ''

  constructor() { }

  ngOnInit(): void {
  }

  seccion2() {
    this.display_uno = 'none';
    this.display_dos = 'flex';
  }

  seccion3() {
    this.display_dos = 'none';
    this.display_tres = 'flex';
  }

  backto1(){
    this.display_dos = 'none';
    this.display_uno = 'flex';
  }

  backto2(){
    this.display_tres = 'none';
    this.display_dos = 'flex';
  }

  getFecha(){
    let date: Date = new Date();
    this.year = date.getFullYear()+'-';
    this.month = date.getMonth()+'-';
    this.day = date.getDay+'-'
    this.fecha = this.year+this.month+this.day;
  }
}
