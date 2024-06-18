import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  isAuthenticated: boolean = false;
  username: string = ''; 

  constructor(private authService: AuthService,private router: Router) { }

  ngOnInit(): void {
    this.authService.isAuthenticated.subscribe((isAuthenticated: boolean) => {
      this.isAuthenticated = isAuthenticated;
      if (isAuthenticated) {
        this.username = this.authService.getUsername(); 
        console.log('Nombre de usuario en el HeaderComponent:', this.username);
      } else {
        this.username = ''; 
      }
    });
  }

  logout() {
    this.authService.logout();
    this.router.navigateByUrl('/login');
  }
}
