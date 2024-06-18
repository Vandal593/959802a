import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
//modulos
import { HttpClientModule, withFetch } from '@angular/common/http';
import {provideHttpClient} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
//import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';

import { ToastrModule } from 'ngx-toastr';

//componentes 
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { NavComponent } from './shared/nav/nav.component';

import { LoginComponent } from './components/login/login.component';
import { SignInComponent } from './components/sign-in/sign-in.component';

import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { CursoDetalleComponent } from './pages/curso-detalle/curso-detalle.component';
import { PruebaComponent } from './pages/prueba/prueba.component';
import { RetroalimentacionComponent } from './pages/retroalimentacion/retroalimentacion.component';

import { CompletarCodigoComponent } from './pages/completar-codigo/completar-codigo.component';
import { ArrastrarPalabrasComponent } from './pages/arrastrar-palabras/arrastrar-palabras.component';
import { UnirLineasComponent } from './pages/unir-lineas/unir-lineas.component';
import { AdminComponent } from './pages/admin/admin.component';
import { AuthGuard } from './guards/auth.guard';
import { AuthService } from '../services/auth.service';
import { ModuloComponent } from './pages/modulo/modulo.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    DashboardComponent,
    NavComponent,
    LoginComponent,

    SignInComponent,
    

    NavComponent,
    SidebarComponent,
    CursoDetalleComponent,
    PruebaComponent,
    RetroalimentacionComponent,
    CompletarCodigoComponent,
    ArrastrarPalabrasComponent,
    UnirLineasComponent,
    AdminComponent,
    ModuloComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot(
      {timeOut: 4000,
      positionClass: 'toast-bottom-right',
      preventDuplicates: true,}

    ), // ToastrModule added


  ],
  providers: [ AuthGuard,AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
