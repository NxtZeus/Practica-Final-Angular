import { Component } from '@angular/core';

@Component({
  selector: 'app-adivinanza',
  standalone: true,
  imports: [],
  templateUrl: './adivinanza.component.html',
  styleUrls: ['./adivinanza.component.css']
})
export class AdivinanzaComponent {
  numeroAleatorio: number;
  mensaje: string;
  intentos: number;

  constructor() {
    this.numeroAleatorio = Math.floor(Math.random() * 100) + 1;
    this.mensaje = '';
    this.intentos = 0;
  }

  comprobarNumero(numeroIngresado: number): void {
    if (isNaN(numeroIngresado) || numeroIngresado < 1 || numeroIngresado > 100) {
      this.mensaje = 'Introduce un número válido entre 1 y 100.';
      return;
    }
    if (numeroIngresado === this.numeroAleatorio) {
      this.mensaje = '¡Has acertado!';
    } else if (numeroIngresado < this.numeroAleatorio) {
      this.mensaje = 'El número es mayor.';
    } else if (numeroIngresado > this.numeroAleatorio) {
      this.mensaje = 'El número es menor.';
    }
    this.intentos++;
  }
}