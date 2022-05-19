import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PeticionesService {

  url='http://localhost:5000/';
  constructor(private http: HttpClient) { }

  getIncidencias(){
    return this.http.get(this.url+"readIncidencias");
  }

  getMunicipios(){
    return this.http.get(this.url+"readMunicipios")
    .pipe(map(response => response));
  }

  addInc(data:any): Observable<any> {
    console.log(data);    
    return this.http.post(this.url+"insertIncidencia", data);
  }

}


export interface Municipio{
  ID_MUNICIPIO: number
  MUNICIPIO_NOMBRE: string
}

export interface Incidencia{
  ID_INCIDENCIA?: number
  INC_ACCION: string
  INC_AGR_EDAD: string
  INC_AGR_GENERO: string
  INC_AGR_NOMBRE: string
  INC_AGR_TIPO: string
  INC_ESP: string
  INC_FECHA: string
  INC_HORA: string
  INC_INST: string
  INC_MUN: string
  INC_SERVICIO: string
  INC_TIEMPO: string
  INC_VIC_EDAD: string
  INC_VIC_GENERO: string
  INC_VIO_DESCR: string
  violencias_ID_VIOLENCIA: number
}