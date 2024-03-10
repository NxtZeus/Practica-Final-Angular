// Importamos los módulos necesarios de Angular
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
  search: string = '';
  constructor(private router: Router) { }
  buscar() {
    switch (this.search.toLowerCase()) {
      case 'musica':
        this.router.navigate(['/musica']);
        break;
      case 'clima':
        this.router.navigate(['/clima']);
        break;
      case 'perros':
        this.router.navigate(['/perros']);
        break;
      case 'paises':
        this.router.navigate(['/paises']);
        break;
      case 'adivinanza':
        this.router.navigate(['/adivinanza']);
        break;
      case 'window':
        this.router.navigate(['/window']);
        break;
      case 'login':
        this.router.navigate(['/login']);
        break;
      default:
        this.router.navigate(['/home']);
    }
  }
}
