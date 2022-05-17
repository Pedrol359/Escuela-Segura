import { Component, OnInit } from '@angular/core';
import { PeticionesService, Incidencia, Municipio } from 'src/app/services/peticiones.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  incidencia: any = {
    id_incidencia: 0, // 0
    inc_accion: "", // 1
    inc_agr_edad: "", // 2
    inc_agr_genero: "", // 3
    inc_agr_nombre: "", // 4
    inc_agr_tipo: "", // 5
    inc_esp: "", // 6
    inc_fecha: "", // 7
    inc_hora: "", // 8
    inc_inst: "", // 9
    inc_mun: "", // 10
    inc_servicio: "", // 11
    inc_tiempo: "", // 12
    inc_vic_edad: "", // 13
    inc_vic_genero: "", // 14
    inc_vio_descr: "", // 15 - falta en formulario
    violencias_id_violencia: 0,
  }

  listaIncidencias: Incidencia[] = [];

  municipios: Municipio[] = []

  arrat = [2, 2]
  constructor(private peticiones: PeticionesService) { }

  ngOnInit(): void {
    this.listarIncidencias()
    this.listarMunicipios()
    console.log(this.listaIncidencias);
  }

  listarIncidencias() {
    this.peticiones.getIncidencias().subscribe(res => {
      this.listaIncidencias = <any>res;
    },
      err => console.log(err)
    );
  }

  listarMunicipios() {
    this.peticiones.getMunicipios().subscribe(res => {
      this.municipios = <any>res;
      console.log(this.municipios);
    },
      err => console.log(err)
    );
  }

  agregar() {
    delete this.incidencia.id_incidencia;
    this.peticiones.addInc(this.incidencia).subscribe();
  }

  guardarDatos() {
    console.log(this.listaIncidencias);
  }

}



