import { Injectable} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root' // Indica que el servicio está disponible en el nivel raíz de la aplicación
})
export class PerrosService {
  private _http: HttpClient; // Variable para manejar las solicitudes HTTP
  private API_URL = `http://shibe.online/api/shibes?count=`; // URL base de la API para obtener imágenes de perros
  private API_URL2 = `&urls=true&httpsUrls=false`; // Parámetros opcionales para la API

  constructor(private httpClient: HttpClient) {
    this._http = httpClient; // Inicializa la variable _http con el servicio HttpClient
  }

  // Método para obtener imágenes de perros de la API
  getPerros(cantidad: number): Observable<any> {
    // Retorna una solicitud GET a la URL de la API con la cantidad de imágenes deseada
    return this._http.get(`${this.API_URL}${cantidad}${this.API_URL2}`);
  }

  // Método para procesar los datos recibidos de la API (en este caso, simplemente retorna los datos sin procesar)
  process(data: any): any {
    return {
      data // Retorna los datos sin procesar
    };
  }
}
