// Importa el decorador 'Component' del módulo '@angular/core'
import { Component } from '@angular/core';

// Component decorator con la configuración del componente
@Component({
  selector: 'app-window', // Selector del componente
  standalone: true, // Indica que el componente es independiente y no necesita otros componentes para funcionar
  imports: [], // No hay importaciones adicionales
  templateUrl: './window.component.html', // URL del archivo de plantilla HTML asociado al componente
  styleUrls: ['./window.component.css'] // URL del archivo de estilos CSS asociado al componente
})
export class WindowComponent {
  // Variables para manejar la ventana emergente y un valor ingresado por el usuario
  newWindow: Window | null = null;
  valor: string | null = null;

  // Método para abrir una nueva ventana emergente
  openNewWindow(): void {
    this.newWindow = window.open('', '', 'width=500,height=200,left=50,top=300');
  }

  // Método para cerrar la ventana emergente
  closeWindow(): void {
    if (this.newWindow) {
      this.newWindow.close();
    }
  }

  // Métodos para mover la ventana emergente a una posición específica
  moverVentanaTo(): void {
    if (this.newWindow) {
      this.newWindow.focus();
      this.newWindow.moveTo(500, 700);
    }
  }

  // Métodos para mover la ventana emergente una cierta cantidad de píxeles
  moverVentanaBy(): void {
    if (this.newWindow) {
      this.newWindow.focus();
      this.newWindow.moveBy(500, 700);
    }
  }

  // Métodos para redimensionar la ventana emergente a un tamaño específico
  redimensionarVentanaTo(): void {
    if (this.newWindow) {
      this.newWindow.focus();
      this.newWindow.resizeTo(1000, 500);
    }
  }

  // Métodos para redimensionar la ventana emergente una cierta cantidad de píxeles
  redimensionarVentanaBy(): void {
    if (this.newWindow) {
      this.newWindow.focus();
      this.newWindow.resizeBy(1000, 500);
    }
  }

  // Métodos para desplazar la ventana emergente una cierta cantidad de píxeles
  scrollVentana(): void {
    if (this.newWindow) {
      this.newWindow.focus();
      this.newWindow.scrollBy(0, 100);
    }
  }

  // Métodos para desplazar la ventana emergente a una posición específica
  scrollVentanaTo(): void {
    if (this.newWindow) {
      this.newWindow.focus();
      this.newWindow.scrollTo(0, this.newWindow.document.body.scrollHeight);
    }
  }

  // Método para imprimir el contenido de la ventana emergente
  printVentana(): void {
    if (this.newWindow) {
      this.newWindow.print();
    }
  }

  // Método para solicitar un valor al usuario mediante un cuadro de diálogo
  pedirValor(): void {
    this.valor = prompt('Dame un valor:');
  }

  // Método para mostrar una alerta en la ventana emergente
  alertaVentana(): void {
    if (this.newWindow) {
      this.newWindow.focus();
      this.newWindow.alert('Este es una ventana emergente');
    }
  }

  // Método para desenfocar la ventana emergente
  blurVentana(): void {
    if (this.newWindow) {
      this.newWindow.blur();
    }
  }

  // Método para mostrar un cuadro de diálogo de confirmación en la ventana emergente
  confirmVentana(): void {
    if (this.newWindow) {
      this.newWindow.focus();
      this.newWindow.confirm();
    }
  }

  // Método para detener la carga de la ventana emergente
  pararVentana(): void {
    if (this.newWindow) {
      this.newWindow.stop();
    }
  }
}