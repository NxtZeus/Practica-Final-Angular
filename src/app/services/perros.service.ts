import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class PerrosService {

  private _http = inject(HttpClient);

  private API_URL = `http://shibe.online/api/shibes?count=`;

  private API_URL2 = `&urls=true&httpsUrls=false`;

  getPerros(cantidad: number): Observable<any> {
    return this._http.get(`${this.API_URL}${cantidad}${this.API_URL2}`);
  }
  process(data: any): any {
    return {
      data
    };
  }
  constructor() { }
}
