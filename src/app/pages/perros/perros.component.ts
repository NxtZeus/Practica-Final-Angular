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
  constructor(private _perrosService: PerrosService) { }

  cantidad: number = 0;
  perros: any;

  buscarPerros() {
    this._perrosService.getPerros(this.cantidad).subscribe(
      (data: any) => {
        this.perros = this._perrosService.process(data);
        console.log(this.perros);
      }
    );
  }
}
