import { Component, OnInit } from '@angular/core';
import { PeticionesService, Incidencia, Municipio } from 'src/app/services/peticiones.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  incidencia: any ={
    id_incidencia: 0,
    inc_accion: "",
    inc_agr_edad: "",
    inc_agr_genero: "",
    inc_agr_nombre: "",
    inc_agr_tipo: "",
    inc_esp: "",
    inc_fecha: "",
    inc_hora: "",
    inc_inst: "",
    inc_mun: "",
    inc_servicio: "",
    inc_tiempo: "",
    inc_vic_edad: "",
    inc_vic_genero: "",
    inc_vio_descr: "",
    violencias_id_violencia: 0,
  }

  listaIncicendias: Incidencia[] = [];

  municipios: Municipio[] = []

  arrat = [2,2]
  constructor(private peticiones:PeticionesService) { }

  ngOnInit(): void {
    this.listarIncidencias()
    this.listarMunicipios()
    console.log(this.listaIncicendias);
  }

  listarIncidencias() {
    this.peticiones.getIncidencias().subscribe(res=>{
        this.listaIncicendias =<any> res;
      },
      err => console.log(err)
      );    
    }
    
    listarMunicipios() {
      this.peticiones.getMunicipios().subscribe(res=>{
        this.municipios=<any> res;
        console.log(this.municipios);
      },
      err => console.log(err)
    );    
  }

  agregar(){
    delete this.incidencia.id_incidencia;
    this.peticiones.addInc(this.incidencia).subscribe();
  }

}



