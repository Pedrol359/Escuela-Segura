import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-escuela-card',
  templateUrl: './escuela-card.component.html',
  styleUrls: ['./escuela-card.component.css']
})
export class EscuelaCardComponent implements OnInit {

  constructor() { }

  //Variables
  @Input() nombre="";
  @Input() nivel="";
  @Input() direccion="";

  ngOnInit(): void {
  }

}
