import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent implements OnInit {
  cursos = [
    {
      id: 1,
      titulo: 'Curso de Angular',
      descripcion: 'Aprende Angular desde cero',
      imagen: 'ruta/a/la/imagen1.jpg',
      duracion: '10 horas',
      progreso: 75,
      modulos: [
        {
          id: 1,
          titulo: 'Introducción a Angular',
          recursos: [
            {
              nombre: 'Guía de Introducción',
              tipo: 'pdf',
              url: 'ruta/a/guia-introduccion.pdf',
            },
          ],
          pruebas: [],
        },
        {
          id: 2,
          titulo: 'Componentes en Angular',
          recursos: [
            {
              nombre: 'Guía de Componentes',
              tipo: 'pdf',
              url: 'ruta/a/guia-componentes.pdf',
            },
          ],
          pruebas: [],
        },
      ],
    },
    {
      id: 2,
      titulo: 'Curso de React',
      descripcion: 'Aprende React con proyectos prácticos',
      imagen: 'ruta/a/la/imagen2.jpg',
      duracion: '12 horas',
      progreso: 50,
      modulos: [
        {
          id: 1,
          titulo: 'Introducción a React',
          recursos: [
            {
              nombre: 'Guía de Introducción',
              tipo: 'pdf',
              url: 'ruta/a/guia-introduccion-react.pdf',
            },
          ],
          pruebas: [],
        },
        {
          id: 2,
          titulo: 'Componentes en React',
          recursos: [
            {
              nombre: 'Guía de Componentes',
              tipo: 'pdf',
              url: 'ruta/a/guia-componentes-react.pdf',
            },
          ],
          pruebas: [],
        },
      ],
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
