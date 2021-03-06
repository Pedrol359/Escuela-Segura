import { Component, OnInit, HostListener } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-navbar-admin',
  templateUrl: './navbar-admin.component.html',
  styleUrls: ['./navbar-admin.component.css']
})
export class NavbarAdminComponent implements OnInit {

  screenWidth:any
  display_full = 'flex';
  display_responsive = 'none';

  constructor(private auth:LoginService) {
      this.getScreenSize();
   }


  ngOnInit(): void {
    this.screenWidth = window.innerWidth;
  }

  @HostListener('window:resize', ['$event'])
    getScreenSize() {
      this.screenWidth = window.innerWidth;
      // console.log(this.screenWidth);
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

  salir(){
    console.log("Salimos");
    this.auth.isLogged = false
    
  }


}
