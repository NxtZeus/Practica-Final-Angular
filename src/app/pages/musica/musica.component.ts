import { Component } from '@angular/core';
import { MusicaService } from '../../services/musica.service'; // Importa el servicio MusicaService
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-musica', // Selector del componente
  standalone: true, // Indica que el componente es independiente y no necesita otros componentes para funcionar
  imports: [ FormsModule ], // Importa el módulo FormsModule
  templateUrl: './musica.component.html', // URL del archivo de plantilla HTML asociado al componente
  styleUrl: './musica.component.css' // URL del archivo de estilos CSS asociado al componente
})
export class MusicaComponent {

  constructor(private _musicaService: MusicaService) { } // Inyección del servicio MusicaService en el constructor

  artista: string = ''; // Variable para almacenar el nombre del artista
  cancion: string = ''; // Variable para almacenar el título de la canción
  datosLetra: any; // Variable para almacenar los datos de la letra

  // Método para buscar la letra de una canción
  buscarLetra() {
    // Llama al método getLetra del servicio MusicaService pasando el nombre del artista y el título de la canción
    this._musicaService.getLetra(this.artista, this.cancion).subscribe(
      (data) => { // Callback que se ejecuta cuando se recibe una respuesta exitosa de la solicitud HTTP
        // Procesa los datos recibidos utilizando el método procesarDatosLetra del servicio MusicaService
        this.datosLetra = this._musicaService.procesarDatosLetra(data);
        console.log(this.datosLetra); // Muestra los datos procesados en la consola
      });
  }
}
