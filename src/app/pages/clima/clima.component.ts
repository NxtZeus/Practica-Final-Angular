import { Component, inject } from '@angular/core';
import { ClimaService } from '../../services/clima.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-clima',
  templateUrl: './clima.component.html',
  styleUrls: ['./clima.component.css'],
  standalone: true,
  imports: [FormsModule],
})
export class ClimaComponent {

  ciudad: string = ''; // Variable para almacenar el nombre de la ciudad ingresado por el usuario
  private _climaService = inject(ClimaService); // Inyección del servicio ClimaService
  datosClima: any; // Variable para almacenar los datos del clima

  // Método para buscar el clima de una ciudad
  buscarCiudad() {
    this._climaService.buscarClima(this.ciudad).subscribe(
      (data) => {
        this.datosClima = this._climaService.procesarDatosClima(data); // Procesa los datos del clima
      });
  }
}


/* import { Component, inject } from '@angular/core';
import { ClimaService } from '../../services/clima.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-clima',
  templateUrl: './clima.component.html',
  styleUrls: ['./clima.component.css'],
  imports: [FormsModule,CommonModule],
  standalone: true,
})
export class ClimaComponent {

  ciudad: string = '';
  datosClima: any;

  constructor(private climaService: ClimaService) { }

  buscarCiudad() {
    this.climaService.buscarClima(this.ciudad)
      .subscribe((data: any) => {
        this.datosClima = this.climaService.procesarDatosClima(data);
      });
  }
}
 */
