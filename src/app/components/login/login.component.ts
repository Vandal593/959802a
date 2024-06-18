import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from "../../../services/auth.service";
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  usuario: string = '';
  password: string = '';

  constructor(private authService: AuthService, private router: Router, private toastr: ToastrService) {}

  verificarCredenciales() {
    if (!this.usuario || !this.password) {
      this.toastr.error('Por favor, complete todos los campos.');
      return;
    }
    this.authService.login(this.usuario, this.password).subscribe(
      (response) => {
        
        console.log(response); 
        this.authService.getIsAdmin().subscribe((isAdmin) => { // Obtener el estado de admin
          if (isAdmin) { // Verificar si es admin
            this.router.navigate(['/admin']); // Redirigir a la página de admin
          } else {
            this.router.navigate(['/dashboard']); // Redirigir a otra página si no es admin
          }
        });
      },
      (error) => {
        if (error.status === 401) {
          this.toastr.error('Credenciales incorrectas');
        } else {
          this.toastr.error('Error en la solicitud. Por favor, inténtelo de nuevo.');
          console.error('Error:', error); 
        }
      }
    );
  }
}
