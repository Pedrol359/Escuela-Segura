import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-navbar-principal',
  templateUrl: './navbar-principal.component.html',
  styleUrls: ['./navbar-principal.component.css']
})
export class NavbarPrincipalComponent implements OnInit {

  screenWidth:any

  constructor() { }

  ngOnInit(): void {
    this.screenWidth = window.innerWidth;
  }

  @HostListener('window:resize')
onResize() {
  this.screenWidth = window.innerWidth
}

}
