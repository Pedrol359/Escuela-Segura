import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as CryptoJS from 'crypto-js'

@Component({
  selector: 'app-registrar-admin-asociacion',
  templateUrl: './registrar-admin-asociacion.component.html',
  styleUrls: ['./registrar-admin-asociacion.component.css']
})
export class RegistrarAdminAsociacionComponent implements OnInit {

  constructor(private router: Router) { }
  //Variables
  tipo = "password"
  tipo1 = "password"
  verPassword=false;
  ocu1 ="mostrar"
  ocu2 = "ocultar"
  ocu3 ="mostrar"
  ocu4 = "ocultar"
  //Mensajes de error
  nombreError = ""
  usuarioError = ""
  passwordError = ""
  error = false
  //Input Values
  password = ""
  passwordConfirmacion = ""
  nombre=""
  usuario=""
  //Encriptación de contraseña
  passwordEncryp = ""
  passwordDesencryp = ""
  //Objeto registro
  registro= {}

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
    if(this.nombre == ""){
      this.nombreError = "Ingrese un nombre"
      this.error = true
    } 
    if(this.usuario == ""){
      this.usuarioError = "Ingrese un nombre de usuario"
      this.error = true
    } 
    if(this.password == ""){
      this.passwordError = "Ingrese una contraseña"
      this.error = true
    } 
    if(this.passwordConfirmacion != this.password){
      this.passwordError = "Revise que la contraseña y su confirmación coíncidan"
      this.error = true
    } 
    if(!this.error) this.getRegistro()
  }

  restoreUser(){
    this.usuarioError = ""
    this.error = false
  }

  restoreName(){
    this.nombreError = ""
    this.error = false
  }

  restorePass(){
    this.passwordError = ""
    this.passwordConfirmacion = ""
    this.error = false
  }

  getRegistro(){
    this.encriptarPassword(true)
    this.registro = {
      nombre: this.nombre,
      usuario: this.usuario,
      passwordEncryp: this.passwordEncryp
    }
    console.log(this.registro)
  }
}
