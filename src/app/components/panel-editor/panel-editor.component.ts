import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-panel-editor',
  templateUrl: './panel-editor.component.html',
  styleUrls: ['./panel-editor.component.css']
})
export class PanelEditorComponent implements OnInit {

  articulos:string[]=["../../../assets/icons/Panel-editor/destacado.svg","../../../assets/icons/Panel-editor/destacado2.svg",
  "../../../assets/icons/Panel-editor/destacado3.svg","../../../assets/icons/Panel-editor/destacado.svg",
  "../../../assets/icons/Panel-editor/destacado2.svg","../../../assets/icons/Panel-editor/destacado3.svg",
  "../../../assets/icons/Panel-editor/destacado.svg","../../../assets/icons/Panel-editor/destacado2.svg",
  "../../../assets/icons/Panel-editor/destacado3.svg","../../../assets/icons/Panel-editor/destacado.svg",
  "../../../assets/icons/Panel-editor/destacado2.svg","../../../assets/icons/Panel-editor/destacado3.svg"]
  
  selected_article:string = "../../../assets/icons/Panel-editor/selected-article.svg";
  constructor() { }

  ngOnInit(): void {
  }

}
