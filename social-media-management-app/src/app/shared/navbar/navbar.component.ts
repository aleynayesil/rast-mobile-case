import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/core/services/auth.service';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  isAuthenticated:boolean = false;
  
  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    this.authService.user.subscribe(user =>{
      if(localStorage.getItem("user")){
      this.isAuthenticated = !!user; 
      }
    })
  }

  logOut(){
    this.authService.logOut();
  }

}
