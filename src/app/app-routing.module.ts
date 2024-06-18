import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//para controlar las rutas
import { AuthGuard } from './guards/auth.guard';

//lamo a las rutas para poderlo manejar
import { DashboardComponent } from '../app/pages/dashboard/dashboard.component';
import { LoginComponent } from '../app/components/login/login.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { CursoDetalleComponent } from './pages/curso-detalle/curso-detalle.component';
import { PruebaComponent } from './pages/prueba/prueba.component';
import { RetroalimentacionComponent } from './pages/retroalimentacion/retroalimentacion.component';
import { AdminComponent } from './pages/admin/admin.component';
import { ModuloComponent } from './pages/modulo/modulo.component';
//defino la ruta
//componentes
const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] }, // Proteger la ruta
  { path: 'curso/:id', component: CursoDetalleComponent, canActivate: [AuthGuard] }, // Proteger la ruta
  { path: 'curso/:cursoId/modulo/:moduloId', component: ModuloComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent },
  { path: 'signIn', component: SignInComponent },
  { path: 'curso/:cursoId/modulo/:moduloId/prueba/:pruebaId', component: PruebaComponent },
  { path: 'retroalimentacion', component: RetroalimentacionComponent, canActivate: [AuthGuard] }, // Proteger la ruta

  { path: 'admin',component: AdminComponent,canActivate: [AuthGuard] },// Proteger la ruta con el guardia de autenticación
    
  { path: '**', redirectTo: 'login', pathMatch: 'full' },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
