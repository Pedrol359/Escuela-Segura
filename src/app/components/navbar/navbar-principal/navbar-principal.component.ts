import { Component, OnInit, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';
import { PeticionesService } from 'src/app/services/peticiones.service';

@Component({
  selector: 'app-navbar-principal',
  templateUrl: './navbar-principal.component.html',
  styleUrls: ['./navbar-principal.component.css']
})
export class NavbarPrincipalComponent implements OnInit {

  screenWidth:any
  display_full = 'flex';
  display_responsive = 'none';

  constructor(private auth:LoginService,private router: Router) {
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
  
  goToPanelAdmin(){
    console.log(this.auth.isLogged)
    this.router.navigate(['panel-admin'])
  }
}
