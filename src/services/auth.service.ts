import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private baseUrl = 'http://localhost:5000';
  private isAuthenticatedSubject: BehaviorSubject<boolean>;
  public isAuthenticated: Observable<boolean>;
  private username: string = ''; 
  //para el admin
  private isAdminSubject: BehaviorSubject<boolean>; // Agregar para controlar el estado de admin
  public isAdmin: Observable<boolean>; // Agregar para controlar el estado de admin

  constructor(private http: HttpClient) {
    this.isAuthenticatedSubject = new BehaviorSubject<boolean>(false);
    this.isAuthenticated = this.isAuthenticatedSubject.asObservable();

    //para el admin
    this.isAdminSubject = new BehaviorSubject<boolean>(false); // Inicializar como false
    this.isAdmin = this.isAdminSubject.asObservable(); // Asignar la variable observable
  }

  login(username: string, password: string) {
    return this.http.post<any>(`${this.baseUrl}/login`, { username, password }).pipe(
      tap((response) => {
        this.setUsername(username); 
        console.log('Nombre de usuario guardado:', this.username);
        this.isAuthenticatedSubject.next(true); 
        console.log('Role ID:', response.role_id); // Verificar el role_id recibido
        this.isAdminSubject.next(response.role_id === 2);
      })
    );
  }

  logout() {
    this.isAuthenticatedSubject.next(false);
    this.username = ''; 
    console.log('Nombre de usuario eliminado:', this.username);
  }

  getIsAuthenticated() {
    return this.isAuthenticatedSubject.value;
  }

  getUsername() {
    console.log('Nombre de usuario obtenido con el get:', this.username);
    return this.username; 
  }

  private setUsername(username: string) {
    this.username = username; 
    console.log('Nombre de usuario actualizado:', this.username);
  }
  getIsAdmin(): Observable<boolean> {
    return this.isAdminSubject.asObservable(); // Devuelve el estado de isAdmin como observable
  }
  // //funcion para lo del admin
  // getRoleId(): Observable<number> {
  //   return this.http.get<number>(`${this.baseUrl}/user/role`);
  // }
}
