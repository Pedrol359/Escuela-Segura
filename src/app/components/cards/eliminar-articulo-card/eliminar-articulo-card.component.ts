import { Component, OnInit, Input,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-eliminar-articulo-card',
  templateUrl: './eliminar-articulo-card.component.html',
  styleUrls: ['./eliminar-articulo-card.component.css']
})
export class EliminarArticuloCardComponent implements OnInit {
  constructor() { }
  //Variables de control
  @Input() vtnShow = true
  @Input() articulo:any
  @Input() id=''
  @Output() eliminarEvent= new EventEmitter<string>()
  @Output() vtnHide= new EventEmitter<boolean>()

  ngOnInit(): void {
  }

  onEliminar(){
    this.eliminarEvent.emit(this.id)
  }
  onHide(){
    this.vtnHide.emit(true)
  }


}
