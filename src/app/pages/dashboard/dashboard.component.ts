import { Component, OnInit } from '@angular/core';

@Component({
  //esta seccion la utilizamos para llamar a la pagina principal
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
})
export class DashboardComponent implements OnInit {
  cursos = [
    {
      id: 1,
      titulo: 'Curso de Fundamentos de programacion',
      descripcion: 'Aprende los fundamentos de la programacion de una forma diferente',
      imagen: 'assets/img/portada.jpg',
      duracion: '10 horas',
      progreso: 75, // Progreso en porcentaje
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
