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
    return this.http.get<Professional[]>(environment.apiBaseUrl).pipe(
      map((res: Professional[]) => {
        console.log(res);
        return res;
      })
    );
  }

  show(id: number): Observable<any> {
    return this.http.get<Professional>(environment.apiBaseUrl + '/' + id).pipe(
      map((res: Professional) => {
        console.log(res);
        return res;
      })
    );
  }
}
