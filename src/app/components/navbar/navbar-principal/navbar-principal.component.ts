import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-navbar-principal',
  templateUrl: './navbar-principal.component.html',
  styleUrls: ['./navbar-principal.component.css']
})
export class NavbarPrincipalComponent implements OnInit {

  screenWidth:any
  display_full = 'flex';
  display_responsive = 'none';

  constructor() {
      this.getScreenSize();
   }

  ngOnInit(): void {
    this.screenWidth = window.innerWidth;
  }

  @HostListener('window:resize', ['$event'])
    getScreenSize() {
      this.screenWidth = window.innerWidth;
      console.log(this.screenWidth);
      if(this.screenWidth < 1330) this.dropDownOn();
      else this.fullOn();
  }

  dropDownOn(){
    this.display_responsive = "flex"
    this.display_full = "none"
  }

  fullOn(){
    this.display_responsive = "none"
    this.display_full = "flex"
  }

}
