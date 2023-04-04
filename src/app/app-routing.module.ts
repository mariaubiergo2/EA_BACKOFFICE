import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UsuariosComponent } from './components/user/usuarios/usuarios.component';
import { ChallengesComponent } from './components/challenge/challenges/challenges.component';
import { MapaComponent } from './components/map/mapa/mapa.component';

const routes: Routes = [
  {
    path: 'usuarios',
    component: UsuariosComponent
  },
  {
    path: 'challenges',
    component: ChallengesComponent
  },
  {
    path: 'mapa',
    component: MapaComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
