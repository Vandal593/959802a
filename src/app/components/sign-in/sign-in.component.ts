import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { User } from '../../interface/user';
import { UserService } from '../../../services/user.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
  username: string = '';
  password: string = '';
  confirmPassword: string = '';
  email: string = '';
  

  constructor(private toastr: ToastrService,
    private _userService: UserService,
    private router: Router) { }

  ngOnInit(): void {}

  addUser() {
    if (this.username == '' || this.password == '' || this.confirmPassword == '' || this.email == '') {
      this.toastr.error('Todos los campos son obligatorios', 'Error');
      return;
    }

    if (this.password != this.confirmPassword) {
      this.toastr.error('Las contraseñas ingresadas son distintas', 'Error');
      return;
    }

    const user: User = {
      username: this.username,
      password: this.password,
      email: this.email,
      role_id: 1
    };

    this._userService.signIn(user).subscribe(
      data => {
        this.toastr.success(`El usuario ${this.username} fue registrado con éxito`, 'Usuario registrado');
        this.router.navigate(['/login']);
      },
      error => {
        this.toastr.error('Error al registrar el usuario', 'Error');
        console.error('Error:', error);
      }
    );
  }
}
