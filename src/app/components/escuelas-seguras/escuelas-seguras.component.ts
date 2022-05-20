import { Component, OnInit } from '@angular/core';
import { EscuelasService } from 'src/app/services/Escuelas.service';
import { InstitucionesService } from 'src/app/services/Instituciones.service';

@Component({
  selector: 'app-escuelas-seguras',
  templateUrl: './escuelas-seguras.component.html',
  styleUrls: ['./escuelas-seguras.component.css']
})
export class EscuelasSegurasComponent implements OnInit {

  constructor(private _escuela: EscuelasService, private _institucion: InstitucionesService) { }

  escuelas:any[] = []
  instituciones:any[] = []

  ngOnInit(): void {
    this.obtenerEscuelas();
    this.obtenerInstituciones();
  }

  obtenerEscuelas() {
    this._escuela.obtenerEscuelas().subscribe(data => {
        this.escuelas = [];  
        data.forEach((element: any) => {
          this.escuelas.push({
            id: element.payload.doc.id,
            ...element.payload.doc.data()
          })
        })
        console.log(this.escuelas);
      });
  }

  obtenerInstituciones() {
    this._institucion.obtenerInstituciones().subscribe(data => {
        this.instituciones = [];  
        data.forEach((element: any) => {
          this.instituciones.push({
            id: element.payload.doc.id,
            ...element.payload.doc.data()
          })
        })
        console.log(this.instituciones);
      });
  }

}
