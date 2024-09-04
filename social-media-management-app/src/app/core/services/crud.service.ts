import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Crud } from "../models/crud";
import { BehaviorSubject, map, Observable, take, tap } from "rxjs";
import { Sorting } from "../models/sorting";

@Injectable() 
export class CrudService{
    private url = "http://localhost:3000/api";

    constructor(
        private http: HttpClient
    ){}

    getAccounts(sorting: Sorting,searchValue: string, page: number, limit: number): Observable<Crud[]>{
        return this.http.get<Crud[]>(this.url + '/getAccounts' + 
            `?sort=${sorting.order}&name=${searchValue}&page=${page}&limit=${limit}`)
        .pipe(
            map((data:any) => data.getAccounts)
        );
    }

    getAccount(_id: string): Observable<Crud>{
        return this.http.get<Crud>(this.url + '/getAccount/' + _id);
    }

    createNewAccount(crud: Crud): Observable<Crud>{
        return this.http.post<Crud>(this.url + '/createNewAccount' , crud);
    }

    updateAccount(crud: Crud, _id: string): Observable<Crud>{
        return this.http.patch<Crud>(this.url + '/updateAccount/' + crud._id , crud);
    }

    deleteAccount(_id: string){
        return this.http.delete(this.url + '/deleteAccount/' + _id);
    }
}