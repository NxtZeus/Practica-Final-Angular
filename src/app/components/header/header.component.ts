// Importaciones necesarias
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    RouterLink,
    FormsModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  search: string = ''; // Variable para almacenar el término de búsqueda

  constructor(private router: Router) { } // Constructor del componente que inyecta el servicio Router

  // Método para realizar la búsqueda y redirigir a la ruta correspondiente
  buscar() {
    // Utiliza un switch para determinar la ruta a la que se redirigirá según el término de búsqueda ingresado
    switch (this.search.toLowerCase()) {
      case 'musica':
        this.router.navigate(['/musica']); // Redirige a la ruta '/musica'
        break;
      case 'clima':
        this.router.navigate(['/clima']); // Redirige a la ruta '/clima'
        break;
      case 'perros':
        this.router.navigate(['/perros']); // Redirige a la ruta '/perros'
        break;
      case 'paises':
        this.router.navigate(['/paises']); // Redirige a la ruta '/paises'
        break;
      case 'adivinanza':
        this.router.navigate(['/adivinanza']); // Redirige a la ruta '/adivinanza'
        break;
      case 'window':
        this.router.navigate(['/window']); // Redirige a la ruta '/window'
        break;
      case 'login':
        this.router.navigate(['/login']); // Redirige a la ruta '/login'
        break;
      default:
        this.router.navigate(['/home']); // Redirige a la ruta '/home' por defecto
    }
  }
}
