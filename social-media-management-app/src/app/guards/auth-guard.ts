import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { map, Observable } from "rxjs";
import { AuthService } from "../core/services/auth.service";

@Injectable({
    providedIn: 'root'
})
export class AuthGuard implements CanActivate{

    constructor(
        private authService : AuthService
    ){}

    canActivate(
        route: ActivatedRouteSnapshot,state: RouterStateSnapshot): boolean | Observable<boolean | UrlTree> | Promise<boolean | UrlTree>{
       
            return this.authService.user.pipe(
                map(user => {
                    return !!user;
                    //Uygulamaya giriş yapan kullanıcı için true diğer durumda false değeri dönecektir.
                })
            );
    }

}