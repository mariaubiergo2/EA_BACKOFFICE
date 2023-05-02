import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { Component } from '@angular/core';
import { map } from 'rxjs/operators';
import { FormuserComponent } from '../formuser/formuser.component';
import { ListuserComponent } from '../listuser/listuser.component';
import { ModifyuserComponent } from '../modifyuser/modifyuser.component';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.scss']
})
export class UsuariosComponent {
  cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if (matches) {
        return [
          { title: 'Añadir un usuarios', cols: 1, rows: 1 , html: '', component: FormuserComponent},
          { title: 'Modificar un usuarios', cols: 1, rows: 1 , html: '', component: ModifyuserComponent},
          { title: 'Listado de usuarios', cols: 1, rows: 1 , html: '', component: ListuserComponent},
          // { title: 'Filtro Challenge', cols: 1, rows: 1 , html: '', component: FormchallengeComponent}
        ];
      }

      return [
        { title: 'Añadir un usuarios', cols: 1, rows: 1 , html: '', component: FormuserComponent},
        { title: 'Modificar un usuarios', cols: 1, rows: 1 , html: '', component: ModifyuserComponent},
        { title: 'Listado de usuarios', cols: 2, rows: 2 , html: '', component: ListuserComponent},
        // { title: 'Filtro Challenge', cols: 1, rows: 1 , html: '', component: FormchallengeComponent}
      ];
    })
  );

  constructor(private breakpointObserver: BreakpointObserver) {}
}
