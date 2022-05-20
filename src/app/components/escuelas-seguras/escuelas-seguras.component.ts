import { Component, OnInit } from '@angular/core';
import { EscuelasService } from 'src/app/services/Escuelas.service';

@Component({
  selector: 'app-escuelas-seguras',
  templateUrl: './escuelas-seguras.component.html',
  styleUrls: ['./escuelas-seguras.component.css']
})
export class EscuelasSegurasComponent implements OnInit {

  constructor(private _escuela: EscuelasService) { }

  escuelas:any[] = []

  ngOnInit(): void {
    this.obtenerEscuelas();
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

}
