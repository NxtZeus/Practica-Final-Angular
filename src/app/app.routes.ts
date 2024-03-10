import { RouterOutlet, Routes } from '@angular/router';
import { ClimaComponent } from './pages/clima/clima.component';
import { HomeComponent } from './pages/home/home.component';
import { MusicaComponent } from './pages/musica/musica.component';
import { PerrosComponent } from './pages/perros/perros.component';
import { PaisesComponent } from './pages/paises/paises.component';
import { AdivinanzaComponent } from './pages/adivinanza/adivinanza.component';
import { LoginComponent } from './pages/login/login.component';
import { WindowComponent } from './pages/window/window.component';

export const routes: Routes = [

{path: '', component:HomeComponent},
{path: 'clima', component:ClimaComponent},
{path: 'musica', component:MusicaComponent},
{path: 'perros', component:PerrosComponent},
{path: 'paises', component:PaisesComponent},
{path: 'adivinanza', component:AdivinanzaComponent},
{path: 'login', component:LoginComponent},
{path: 'window', component:WindowComponent},
{path: '**',redirectTo: '',pathMatch:'full' },

];
