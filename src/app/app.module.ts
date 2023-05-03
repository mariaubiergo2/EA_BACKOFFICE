import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavigationComponent } from './navigation/navigation.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { UsuariosComponent } from './components/user/usuarios/usuarios.component';
import { ChallengesComponent } from './components/challenge/challenges/challenges.component';
import { MapaComponent } from './components/map/mapa/mapa.component';
import { HttpClientModule } from '@angular/common/http';
import { FormchallengeComponent } from './components/challenge/formchallenge/formchallenge.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ListchallengeComponent } from './components/challenge/listchallenge/listchallenge.component';
import { ModifychallengeComponent } from './components/challenge/modifychallenge/modifychallenge.component';
import { FormuserComponent } from './components/user/formuser/formuser.component';
import { ListuserComponent } from './components/user/listuser/listuser.component';
import { ModifyuserComponent } from './components/user/modifyuser/modifyuser.component';
import { LoginComponent } from './components/login/login.component';
import { AuthService } from './components/auth/auth.service';
import { AuthGuardService } from './components/auth/auth-guard.service';
import { GoogleMapsModule } from '@angular/google-maps';
import { ConfirmationPopoverModule } from 'angular-confirmation-popover';
import { NgxPaginationModule } from 'ngx-pagination';
import { FilterPipe } from './components/filter.pipe';
import { ToastrModule } from 'ngx-toastr';


@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    UsuariosComponent,
    ChallengesComponent,
    MapaComponent,
    FormchallengeComponent,
    ListchallengeComponent,
    ModifychallengeComponent,
    FormuserComponent,
    ListuserComponent,
    ModifyuserComponent,
    LoginComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    GoogleMapsModule,
    NgxPaginationModule,
    ConfirmationPopoverModule.forRoot({
      confirmButtonType: 'danger'
    }),
    ToastrModule.forRoot({})
  ],
  providers: [AuthService, AuthGuardService],
  bootstrap: [AppComponent]
})

export class AppModule { }