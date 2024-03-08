import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MusicaService {

  private API_URL = `https://api.lyrics.ovh/v1/`;


  constructor(private _http: HttpClient) { }

  getLetra(artista: string, cancion: string): Observable<any> {
    return this._http.get(`${this.API_URL}${artista}/${cancion}`);
  }

  procesarDatosLetra(data: any): any {
    return {
      artista: data.artista,
      cancion: data.cancion,
      letra: data.lyrics
    };
  }
}
