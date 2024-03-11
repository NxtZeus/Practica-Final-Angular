import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root' // Indica que el servicio está disponible en el nivel raíz de la aplicación
})
export class ClimaService {
  private _http: HttpClient; // Variable para manejar las solicitudes HTTP
  private urlBase = 'https://api.openweathermap.org/data/2.5/weather'; // URL base de la API de OpenWeatherMap
  private apiKey = '605507acf87117e111e54a3ab5238541'; // Clave de API de OpenWeatherMap
  private difKelvin = 273.15; // Diferencia de temperatura en Kelvin

  constructor(private httpClient: HttpClient) {
    this._http = httpClient; // Inicializa la variable _http con el servicio HttpClient
  }

  // Método para buscar el clima de una ciudad utilizando la API de OpenWeatherMap
  buscarClima(ciudad: string): Observable<any> {
    // Retorna una solicitud GET a la URL de la API con el nombre de la ciudad y la clave de la API
    return this._http.get(`${this.urlBase}?q=${ciudad}&appid=${this.apiKey}`);
  }

  // Método para procesar los datos del clima recibidos de la API de OpenWeatherMap
  procesarDatosClima(data: any): any {
    return {
      // Extrae y formatea los datos relevantes del objeto de respuesta
      ciudadNombre: data.name, // Nombre de la ciudad
      paisNombre: data.sys.country, // Nombre del país
      temperatura: Math.floor(data.main.temp - this.difKelvin), // Temperatura en Celsius
      humedad: data.main.humidity, // Humedad
      descripcion: data.weather[0].description, // Descripción del clima
      icono: `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png` // URL del icono del clima
    };
  }
}
