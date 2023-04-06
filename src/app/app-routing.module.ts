import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UsuariosComponent } from './components/user/usuarios/usuarios.component';
import { ChallengesComponent } from './components/challenge/challenges/challenges.component';
import { MapaComponent } from './components/map/mapa/mapa.component';
import { LoginComponent } from './components/login/login.component';

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
  },
  {
    path: '',
    component: LoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
