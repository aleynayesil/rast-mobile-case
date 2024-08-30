import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Crud } from "../models/crud";
import { map, Observable } from "rxjs";

@Injectable() //component oluşturulduğunda constractur içerisine inject edebilmek için
export class CrudService{
    private url = "http://localhost:3000/api";

    constructor(
        private http: HttpClient
    ){}

    getAccounts(): Observable<Crud[]>{
        return this.http.get<Crud[]>(this.url + '/getAccounts')
        .pipe(
            map((data : any) => data.getAccounts)
        );
    }

    createNewAccount(crud: Crud): Observable<Crud>{
        return this.http.post<Crud>(this.url + '/createNewAccount' , crud);
    }

    updateAccount(crud: Crud): Observable<Crud>{
        return this.http.patch<Crud>(this.url + '/updateAccount' + crud.id , crud);
    }

    deleteAccount(id:string){
        return this.http.delete(this.url + '/deleteAccount' + id);
    }
}