import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-estatus-recuperacion',
  templateUrl: './estatus-recuperacion.component.html',
  styleUrls: ['./estatus-recuperacion.component.css']
})
export class EstatusRecuperacionComponent implements OnInit {

  constructor() { }
  titulo="Correo enviado"
  mensaje="Se te ha enviado un correo para la recuperación de tu contraseña éxitosamente."
  estado='1'

  ngOnInit(): void {
    this.estado = localStorage.getItem('status_message') || '1'
    switch (this.estado) {
      case '1': 
      this.mensaje = "Se te ha enviado un correo para la recuperación de tu contraseña éxitosamente."
      this.titulo="Correo enviado"
        break
      case '2': 
      this.mensaje = "El correo que proporcionaste no coincide con ninguna cuenta de administrador. Contacte a la asociación."
      this.titulo="Correo no enviado"
        break
      case '3': 
      this.mensaje = "El correo que proporcionaste no coincide con ninguna cuenta de institución educativa. Contacte a la asociación."
      this.titulo="Correo enviado"
        break
          case '4': 
      this.mensaje = "Se te ha enviado un correo para la recuperación de tu contraseña éxitosamente."
      this.titulo="Correo enviado"
        break
    }
  }

}
