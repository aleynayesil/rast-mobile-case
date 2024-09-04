import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Auth } from 'src/app/core/models/auth';
import { AuthService } from 'src/app/core/services/auth.service';
@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {

  model: Auth;

  constructor(
    private authService: AuthService,
    private router: Router

  ) {}

  ngOnInit(): void {}

  login(form: NgForm){
    this.authService.login(form.value).subscribe();
    this.router.navigate(['api/getAccounts']);
  }
}
