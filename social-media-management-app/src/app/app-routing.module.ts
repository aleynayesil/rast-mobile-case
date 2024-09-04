import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './layouts/home/home.component';
import { SignupComponent } from './modules/auth/signup/signup.component';
import { AuthGuard } from './guards/auth-guard';
import { SigninComponent } from './modules/auth/signin/signin.component';

const routes: Routes = [
  { path: '', redirectTo: '/api/login', pathMatch: 'full'},
  { path: 'api/login', component: SigninComponent},
  { path: 'api/register', component: SignupComponent},
  { path: 'api/getAccounts', component: HomeComponent, canActivate: [AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
