import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root' // Indica que este servicio estará disponible en toda la aplicación como un singleton
})
export class MusicaService {

  private API_URL = `https://api.lyrics.ovh/v1/`; // URL base de la API de Lyrics.ovh

  constructor(private _http: HttpClient) { } // Constructor que recibe una instancia de HttpClient

  // Método para obtener la letra de una canción de un artista específico
  // Retorna un Observable que emite los datos de la letra
  getLetra(artista: string, cancion: string): Observable<any> {
    // Realiza una solicitud HTTP GET a la API de Lyrics.ovh
    // Concatena la URL base con el nombre del artista y el título de la canción
    return this._http.get(`${this.API_URL}${artista}/${cancion}`);
  }

  // Método para procesar los datos de la letra recibidos de la API
  procesarDatosLetra(data: any): any {
    // Retorna un objeto con las propiedades artista, cancion y letra
    return {
      artista: data.artista, // Suponiendo que la API devuelve el nombre del artista
      cancion: data.cancion, // Suponiendo que la API devuelve el título de la canción
      letra: data.lyrics // Suponiendo que la API devuelve la letra de la canción
    };
  }
}
