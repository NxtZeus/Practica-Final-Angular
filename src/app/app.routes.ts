import { RouterOutlet, Routes } from '@angular/router';
import { ClimaComponent } from './pages/clima/clima.component';
import { HomeComponent } from './pages/home/home.component';
import { MusicaComponent } from './pages/musica/musica.component';
import { PerrosComponent } from './pages/perros/perros.component';

export const routes: Routes = [

{path: '', component:HomeComponent},
{path: 'clima', component:ClimaComponent},
{path: 'musica', component:MusicaComponent},
{path: 'perros', component:PerrosComponent},

{path: '**',redirectTo: '',pathMatch:'full' },

];
