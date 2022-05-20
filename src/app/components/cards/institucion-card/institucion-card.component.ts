import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-institucion-card',
  templateUrl: './institucion-card.component.html',
  styleUrls: ['./institucion-card.component.css']
})
export class InstitucionCardComponent implements OnInit {

  constructor() { }

  //Variables
  @Input() nombre="";
  @Input() descripcion="";
  @Input() direccion="";
  @Input() telefono="";

  ngOnInit(): void {
  }

}
