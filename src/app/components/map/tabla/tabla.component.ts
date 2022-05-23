import { Component, OnInit } from '@angular/core';
import { PeticionesService } from 'src/app/services/peticiones.service';

@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.component.html',
  styleUrls: ['./tabla.component.css','./styles.css']
})
export class TablaComponent implements OnInit  {

  lug = true
  inst = false
  gen = false
  mun = false
  niv = false

  lugares: any =[]
  genero: any =[]
  municipios: any = []
  instituciones: any = []
  nivel: any = []

  constructor(private peticion:PeticionesService) { }

  ngOnInit(): void {
    this.datosLugares()
    this.datosMunicipios()
    this.datosGenero()
    this.datosInst()
    this.datosNivel()
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
    
  clickMun(){
    this.mun = true
    this.lug = false
    this.inst = false
    this.gen = false
    this.niv = false
    console.log(this.mun,this.lug,this.inst, this.gen);
    
  }
  clickLug(){
    this.mun = false
    this.lug = true
    this.inst = false
    this.gen = false
    this.niv = false
    console.log(this.mun,this.lug,this.inst, this.gen);
  }
  clickInst(){
    this.mun = false
    this.lug = false
    this.inst = true
    this.gen = false
    this.niv = false
    console.log(this.mun,this.lug,this.inst, this.gen);
  }
  clickGen(){
    this.mun = false
    this.lug = false
    this.inst = false
    this.gen = true
    this.niv = false
    console.log(this.mun,this.lug,this.inst, this.gen);
  }
  clickNiv(){
    this.mun = false
    this.lug = false
    this.inst = false
    this.gen = false
    this.niv = true
    console.log(this.mun,this.lug,this.inst, this.gen);
  }
}
