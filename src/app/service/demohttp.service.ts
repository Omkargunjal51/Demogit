import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class DemohttpService {
 url1 = "www.com"
  constructor(private http : HttpClient) { }

  getResource(): Observable<any> {
    return this.http.get<any>(this.url1);
  }
}
