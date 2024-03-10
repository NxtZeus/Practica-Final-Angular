import { Component } from '@angular/core';

@Component({
  selector: 'app-window',
  standalone: true,
  imports: [],
  templateUrl: './window.component.html',
  styleUrls: ['./window.component.css']
})
export class WindowComponent {

  newWindow: Window | null = null;
  valor: string | null = null;

  openNewWindow(): void {
    this.newWindow = window.open('', '', 'width=500,height=200,left=50,top=300');
  }

  closeWindow(): void {
    if (this.newWindow) {
      this.newWindow.close();
    }
  }

  moverVentanaTo(): void {
    if (this.newWindow) {
      this.newWindow.focus();
      this.newWindow.moveTo(500, 700);
    }
  }

  moverVentanaBy(): void {
    if (this.newWindow) {
      this.newWindow.focus();
      this.newWindow.moveBy(500, 700);
    }
  }

  redimensionarVentanaTo(): void {
    if (this.newWindow) {
      this.newWindow.focus();
      this.newWindow.resizeTo(1000, 500);
    }
  }

  redimensionarVentanaBy(): void {
    if (this.newWindow) {
      this.newWindow.focus();
      this.newWindow.resizeBy(1000, 500);
    }
  }

  scrollVentana(): void {
    if (this.newWindow) {
      this.newWindow.focus();
      this.newWindow.scrollBy(0, 100);
    }
  }

  scrollVentanaTo(): void {
    if (this.newWindow) {
      this.newWindow.focus();
      this.newWindow.scrollTo(0, this.newWindow.document.body.scrollHeight);
    }
  }

  printVentana(): void {
    if (this.newWindow) {
      this.newWindow.print();
    }
  }

  pedirValor(): void {
    this.valor = prompt('Dame un valor:');
  }

  alertaVentana(): void {
    if (this.newWindow) {
      this.newWindow.focus();
      this.newWindow.alert('Este es una ventana emergente');
    }
  }

  blurVentana(): void {
    if (this.newWindow) {
      this.newWindow.blur();
    }
  }

  confirmVentana(): void {
    if (this.newWindow) {
      this.newWindow.focus();
      this.newWindow.confirm();
    }
  }

  pararVentana(): void {
    if (this.newWindow) {
      this.newWindow.stop();
    }
  }
}
