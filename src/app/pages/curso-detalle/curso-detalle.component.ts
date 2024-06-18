import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-curso-detalle',
  templateUrl: './curso-detalle.component.html',
  styleUrls: ['./curso-detalle.component.css'],
})
export class CursoDetalleComponent implements OnInit {
  curso: any;

  cursos = [
    {
      id: 1,
      titulo: 'Curso de Fundamentos de programacion',
      imagen: 'assets/img/portada.jpg',
      descripcion:
        'Aprende los fundamentos de la programacion de una forma diferente',
      duracion: '10 horas',
      progreso: 75, // Progreso en porcentaje
      modulos: [
        {
          id: 1,
          titulo: 'Estructuras de Programación',
          descripcion: 'Descripcion modulo 1',
          recursos: [
            {
              nombre: 'Guía de Fundamentos de Programación',
              tipo: 'pdf',
              url: 'assets/pdf/Estructuras_Programacion_V1.pdf',
            },
          ],
          pruebas: [{ id: 1, nombre: 'Prueba de Fundamentos de Programación' }],
        },
        {
          id: 2,
          titulo: 'Estructuras de Datos',
          descripcion: 'Descripcion modulo 2',
          recursos: [
            {
              nombre: 'Guía de Estructuras de Datos',
              tipo: 'pdf',
              url: 'assets/pdf/Estructuras_de_Datos_V2.pdf',
            },
          ],
          pruebas: [{ id: 2, nombre: 'Prueba de Estructuras de Datos' }],
        },
      ],
    },
  ];

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    console.log(id);
    if (id) {
      this.curso = this.cursos.find((curso) => curso.id === Number(id));
    } else {
      console.error('ID del curso no es válido');
    }
  }
}
