// Importamos los módulos necesarios de Angular
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
@Component({
  selector: 'app-header',
  // Indica que este componente puede ser utilizado de forma independiente
  standalone: true,
  // Lista de módulos a importar
  imports: [
    RouterLink,
    FormsModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  // Variable para almacenar la búsqueda del usuario
  search: string = '';
  // Inyectamos el servicio Router en el constructor
  constructor(private router: Router) { }
  // Método para buscar y navegar a la página correspondiente
  buscar() {
    switch (this.search.toLowerCase()) {
      case 'cats':
        this.router.navigate(['/cats']);
        break;
      case 'clima':
        this.router.navigate(['/clima']);
        break;
      case 'gitHub':
        this.router.navigate(['/github']);
        break;
      case 'servidor':
        this.router.navigate(['/server']);
        break;
      case 'calculadora':
        this.router.navigate(['/calculadora']);
        break;
      case 'galeria':
        this.router.navigate(['/galeria']);
        break;
      default:
        this.router.navigate(['/home']);
    }
  }
}
