// Importaciones necesarias
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ServicioPais {
  private apiUrl = 'http://localhost:3000/paises'; // URL del servidor Express

  constructor(private http: HttpClient) { }

  // Método para obtener países paginados
  obtenerPaises(page: number, porPagina: number): Observable<any> {
    const url = `${this.apiUrl}?page=${page}&perPage=${porPagina}`;
    return this.http.get<any>(url)
  }

  // Método para agregar un nuevo país
  agregarPais(pais: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, pais)
  }

  // Método para eliminar un país
  eliminarPais(nombre: string): Observable<any> {
    const url = `${this.apiUrl}/${nombre}`;
    return this.http.delete<any>(url)
  }
}
