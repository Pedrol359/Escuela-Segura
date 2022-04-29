import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-admin-asociacion',
  templateUrl: './login-admin-asociacion.component.html',
  styleUrls: ['./login-admin-asociacion.component.css']
})
export class LoginAdminAsociacionComponent implements OnInit {

  constructor() { }
  //Variables
  tipo = "password"
  verPassword=false;
  ocu1 ="mostrar"
  ocu2 = "ocultar"
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

}
