import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Auth } from "../models/auth";
import { BehaviorSubject, map, Subject, tap } from "rxjs";

@Injectable()
export class AuthService{

    private url = "http://localhost:3000/api";
    
    user = new BehaviorSubject<Auth|null>(null);

    loadedUser = new Subject<Auth>;

    constructor(
        private http: HttpClient
    ){}

    login(auth:Auth){
       return this.http.post(this.url + '/login' ,auth)
       .pipe(
            tap((res:any) => {
                localStorage.setItem("user", JSON.stringify(res));
                this.user.next(res);
            })
       )
    }

    autoLogin(){
        if (localStorage.getItem("user") == null) {
            return;
        }
        const user= JSON.parse(localStorage.getItem("user") || "{}");
        this.user.next(user);
    }

    register(auth: Auth){
        return this.http.post(this.url + '/register' ,auth)
        .pipe(
            tap((res:any) => {
                this.user.next(res);
            })
        )
    }

    logOut(){
        this.user.next(null);
        localStorage.removeItem("user");
    }
}