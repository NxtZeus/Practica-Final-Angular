import { Component } from '@angular/core';
import { MusicaService } from '../../services/musica.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-musica',
  standalone: true,
  imports: [ FormsModule ],
  templateUrl: './musica.component.html',
  styleUrl: './musica.component.css'
})
export class MusicaComponent {

  constructor(private _musicaService: MusicaService) { }
  artista: string = '';
  cancion: string = '';
  datosLetra: any;

  buscarLetra() {
    this._musicaService.getLetra(this.artista, this.cancion).subscribe(
      (data) => {
        this.datosLetra = this._musicaService.procesarDatosLetra(data);
        console.log(this.datosLetra);
      });
  }

}
