import { Component, OnInit, Input, Output } from '@angular/core';

@Component({
  selector: 'app-articulo-card-admin',
  templateUrl: './articulo-card-admin.component.html',
  styleUrls: ['./articulo-card-admin.component.css']
})
export class ArticuloCardAdminComponent implements OnInit {
  constructor() { }

  @Input() imagen=''
  @Input() titulo=''
  @Input() index=''
  @Output() deleted=false

  

  ngOnInit(): void {
  }

}
