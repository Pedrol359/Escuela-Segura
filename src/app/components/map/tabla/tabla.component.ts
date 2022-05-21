import { Component, OnInit } from '@angular/core';
import { PeticionesService } from 'src/app/services/peticiones.service';

@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.component.html',
  styleUrls: ['./tabla.component.css','./styles.css']
})
export class TablaComponent implements OnInit  {

  lugares: any =[]
  genero: any =[]
  municipios: any = []

  constructor(private peticion:PeticionesService) { }

  ngOnInit(): void {
    this.datosLugares()
    this.datosMunicipios()
    this.datosGenero()
  }

  datosLugares() {
    this.peticion.getMapDataLugar().subscribe(res=>{
      this.lugares = <any> res
     console.log(res);
     
    },
    err => console.log(err)
    );    
  }

  datosGenero() {
    this.peticion.getMapDataGenero().subscribe(res=>{
      this.genero = <any> res
     console.log(res);
     
    },
    err => console.log(err)
    );    
  }
  datosMunicipios() {
    this.peticion.getMapDataMunicipio().subscribe(res=>{
      this.municipios = <any> res
     console.log(res);
     
    },
    err => console.log(err)
    );    
  }
    
}
