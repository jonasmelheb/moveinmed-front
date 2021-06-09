import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Professional } from "../interface/professional";
import { map } from "rxjs/operators";
import { environment } from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class ProfessionalService {

  constructor(private http: HttpClient) { }

  create(params: any) {
    return this.http.post(environment.apiBaseUrl, params);
  }

  list(): Observable<Professional[]> {
    return this.http.get<Professional[]>(environment.apiBaseUrl);
  }

  show(id: number): Observable<Professional> {
    return this.http.get<Professional>(environment.apiBaseUrl + '/' + id);
  }
  getById(id: number): Observable<Professional>{
    return this.http.get<Professional>(environment.apiBaseUrl + '/' + id);
  }

  update(params: any, id: number): Observable<Professional>{
    return this.http.put<Professional>(environment.apiBaseUrl + '/' + id, params);
  }

  delete(id: number): Observable<null>{
    return this.http.delete<null>(environment.apiBaseUrl + '/' + id);
  }
}
