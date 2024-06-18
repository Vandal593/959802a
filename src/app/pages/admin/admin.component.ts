// admin.component.ts

import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../services/auth.service'; // Servicio de autenticación
import { HttpClient } from '@angular/common/http'

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  results: any[] = []; 
  filteredResults: any[] = []; 
  searchUser: string = ''; 
  autoCompleteOptions: string[] = [];


  constructor(private http: HttpClient, private authService: AuthService) { }

  ngOnInit(): void {
    if (!this.authService.getIsAdmin()) {
      console.log('No eres administrador. Acceso denegado.');
      return;
    }

    // Obtener todos los resultados de tests
    this.http.get<any>('http://localhost:5000/test_results/all').subscribe((data) => {
      this.results = data;
      this.filteredResults = data; 
      this.autoCompleteOptions = this.results.map(result => result.username);
    });
  }

  // Método para aplicar el filtro de búsqueda
  applyFilter(): void {
    console.log('Valor de búsqueda:', this.searchUser);
    if (this.searchUser.trim() !== '') {
      this.filteredResults = this.results.filter(result =>
        result.username.toLowerCase().includes(this.searchUser.toLowerCase())
      );
    } else {
      this.filteredResults = this.results; // Mostrar todos los resultados si no hay filtro
    }
    console.log('Resultados filtrados:', this.filteredResults);
  }
}
