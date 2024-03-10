import { Component } from '@angular/core';
import { PerrosService } from '../../services/perros.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-perros',
  standalone: true,
  imports: [ FormsModule ],
  templateUrl: './perros.component.html',
  styleUrl: './perros.component.css'
})
export class PerrosComponent {
  constructor(private _perrosService: PerrosService) { } // Constructor del componente que recibe una instancia de PerrosService

  cantidad: number = 0; // Variable para almacenar la cantidad de fotos de perros
  perros: any; // Variable para almacenar los datos de las fotos de perros

  // Método para buscar fotos de perros
  buscarPerros() {
    // Llama al método getPerros del servicio PerrosService pasando la cantidad de fotos
    this._perrosService.getPerros(this.cantidad).subscribe(
      (data: any) => { // Callback que se ejecuta cuando se recibe una respuesta exitosa de la solicitud HTTP
        // Procesa los datos recibidos utilizando el método process del servicio PerrosService
        this.perros = this._perrosService.process(data);
        console.log(this.perros); // Muestra los datos procesados en la consola
      }
    );
  }
}
