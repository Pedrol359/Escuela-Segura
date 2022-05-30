import { Component, OnInit } from '@angular/core';
import { PeticionesService } from 'src/app/services/peticiones.service';

@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.component.html',
  styleUrls: ['./tabla.component.css','./styles.css']
})
export class TablaComponent implements OnInit  {

  lug = false
  inst = false
  gen = false
  mun = true
  niv = false
  vio = false

  lugares: any =[]
  genero: any =[]
  municipios: any = []
  instituciones: any = []
  nivel: any = []
  violencias: any = []

  constructor(private peticion:PeticionesService) { }

  ngOnInit(): void {
    this.datosLugares()
    this.datosMunicipios()
    this.datosGenero()
    this.datosInst()
    this.datosNivel()
    this.datosViolencia()
  }

  datosLugares() {
    this.peticion.getMapDataLugar().subscribe(res=>{
      this.lugares = <any> res
     console.log(res);
     
    },
    err => console.log(err)
    );    
  }
  datosInst() {
    this.peticion.getMapDataInst().subscribe(res=>{
      this.instituciones = <any> res
     console.log(res);
     
    },
    err => console.log(err)
    );    
  }
  datosNivel() {
    this.peticion.getMapDataNiv().subscribe(res=>{
      this.nivel = <any> res
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
  datosViolencia() {
    this.peticion.getMapDataVio().subscribe(res=>{
      this.violencias = <any> res
     console.log(res);
     
    },
    err => console.log(err)
    );    
  }
    
  clickMun(){
    this.mun = true
    this.lug = false
    this.inst = false
    this.gen = false
    this.niv = false
    this.vio = false
  }
  clickLug(){
    this.mun = false
    this.lug = true
    this.inst = false
    this.gen = false
    this.niv = false
    this.vio = false
  }
  clickInst(){
    this.mun = false
    this.lug = false
    this.inst = true
    this.gen = false
    this.niv = false
    this.vio = false
  }
  clickGen(){
    this.mun = false
    this.lug = false
    this.inst = false
    this.gen = true
    this.niv = false
    this.vio = false
  }
  clickNiv(){
    this.mun = false
    this.lug = false
    this.inst = false
    this.gen = false
    this.niv = true
    this.vio = false
  }
  clickVio(){
    this.mun = false
    this.lug = false
    this.inst = false
    this.gen = false
    this.niv = false
    this.vio = true
  }

  refresh(){
    this.datosLugares()
    this.datosMunicipios()
    this.datosGenero()
    this.datosInst()
    this.datosNivel()
    this.datosViolencia()
  }
}
