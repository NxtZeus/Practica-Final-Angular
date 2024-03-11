import { Component } from '@angular/core';

@Component({
  selector: 'app-adivinanza',
  standalone: true,
  imports: [],
  templateUrl: './adivinanza.component.html',
  styleUrls: ['./adivinanza.component.css']
})
export class AdivinanzaComponent {
  numeroAleatorio: number; // Variable para almacenar el número aleatorio generado
  mensaje: string; // Variable para mostrar mensajes al usuario
  intentos: number; // Variable para contar la cantidad de intentos realizados

  constructor() {
    // Genera un número aleatorio entre 1 y 100
    this.numeroAleatorio = Math.floor(Math.random() * 100) + 1;
    this.mensaje = ''; // Inicializa el mensaje como una cadena vacía
    this.intentos = 0; // Inicializa la cantidad de intentos como cero
  }

  // Método para comprobar el número ingresado por el usuario
  comprobarNumero(numeroIngresado: number): void {
    // Verifica si el número ingresado es válido
    if (isNaN(numeroIngresado) || numeroIngresado < 1 || numeroIngresado > 100) {
      this.mensaje = 'Introduce un número válido entre 1 y 100.'; // Muestra un mensaje de error
      return; // Sale del método si el número no es válido
    }
    // Compara el número ingresado con el número aleatorio generado
    if (numeroIngresado === this.numeroAleatorio) {
      this.mensaje = '¡Has acertado!'; // Muestra un mensaje de acierto
    } else if (numeroIngresado < this.numeroAleatorio) {
      this.mensaje = 'El número es mayor.'; // Muestra un mensaje de que el número es mayor
    } else if (numeroIngresado > this.numeroAleatorio) {
      this.mensaje = 'El número es menor.'; // Muestra un mensaje de que el número es menor
    }
    this.intentos++; // Incrementa la cantidad de intentos realizados
  }
}
