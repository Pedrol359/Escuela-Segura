import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as CryptoJS from 'crypto-js';

@Component({
  selector: 'app-login-admin-asociacion',
  templateUrl: './login-admin-asociacion.component.html',
  styleUrls: ['./login-admin-asociacion.component.css']
})
export class LoginAdminAsociacionComponent implements OnInit {

  constructor(private router:Router) { }
  //Variables
  tipo = "password"
  verPassword=false;
  ocu1 ="mostrar"
  ocu2 = "ocultar"
  //Mensajes de error
  usuarioError = ""
  passwordError = ""
  error = false
  //Input Values
  password = ""
  usuario=""
  //Encriptación de contraseña
  passwordEncryp = ""
  passwordDesencryp = ""
  //Objeto registro
  login = {}

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

  recuperar(estatus:string){
    localStorage.setItem('status_message',estatus);
    this.router.navigate(['/modal']);
  }

  //Para desencriptar la contraseña, enviar como parametro false; Para encriptar enviar true
  encriptarPassword(booleanEncrypter:boolean){
    if(booleanEncrypter){
      this.passwordEncryp = CryptoJS.AES.encrypt(this.password.trim(), "").toString();
      //console.log('La contraseña encriptada es: '+this.passwordEncryp)
    } else{
      this.passwordDesencryp = CryptoJS.AES.decrypt(this.passwordEncryp.trim(),"").toString(CryptoJS.enc.Utf8);
      //console.log('La contraseña desencriptada es: '+this.passwordDesencryp)
    }
  }
  
  //Comprueba que los campos estén llenos y que las contraseñas coíncidan, si hay un error, no encripta contraseña
  comprobarCampos(){
    if(this.usuario == ""){
      this.usuarioError = "Ingrese un nombre de usuario"
      this.error = true
    } 
    if(this.password == ""){
      this.passwordError = "Ingrese una contraseña"
      this.error = true
    }  
    if(!this.error) this.getLogin()
  }

  restoreUser(){
    this.usuarioError = ""
    this.error = false
  }


  restorePass(){
    this.passwordError = ""
    this.error = false
  }

  getLogin(){
    this.encriptarPassword(true)
    this.login = {
      usuario: this.usuario,
      passwordEncryp: this.passwordEncryp
    }
    console.log(this.login)
  }
}
