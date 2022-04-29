import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registrar-admin-asociacion',
  templateUrl: './registrar-admin-asociacion.component.html',
  styleUrls: ['./registrar-admin-asociacion.component.css']
})
export class RegistrarAdminAsociacionComponent implements OnInit {

  constructor() { }
  //Variables
  tipo = "password"
  tipo1 = "password"
  verPassword=false;
  ocu1 ="mostrar"
  ocu2 = "ocultar"
  ocu3 ="mostrar"
  ocu4 = "ocultar"
  ngOnInit(): void {
  }

  verPassword_clic(){
    this.verPassword=!this.verPassword
    if(this.verPassword){
      this.tipo = "text"
      this.ocu2 = "mostrar"
      this.ocu1 ="ocultar"
      
    }else{
      this.tipo = "password"
      this.ocu1 ="mostrar"
      this.ocu2 = "ocultar"
    }
  }

  verPassword_clic1(){
    this.verPassword=!this.verPassword
    if(this.verPassword){
      this.tipo1 = "text"
      this.ocu4 = "mostrar"
      this.ocu3 ="ocultar"
      
    }else{
      this.tipo1 = "password"
      this.ocu3 ="mostrar"
      this.ocu4 = "ocultar"
    }
  }

}
