import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-retroalimentacion',
  templateUrl: './retroalimentacion.component.html',
  styleUrls: ['./retroalimentacion.component.css'],
})
export class RetroalimentacionComponent implements OnInit {
  temaExplicaciones: string[] = ['', '', '']; // Inicializar con strings vacíos para cada sección
  seudocodigos: string[] = ['', '', ''];
  respuestaCodigo: string[] = ['', '', ''];
  seccionesActivas: number[] = [];
  mostrarBotonRegreso: boolean = false; // Controla la visibilidad del botón de regreso
  cursoId: number | null = null;
  moduloId: number | null = null;
  pruebaId: number | null = null;

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    this.route.queryParams.subscribe((params) => {
      const seccionesFalladas = params['secciones'].split(',').map(Number);
      this.seccionesActivas = seccionesFalladas;
      this.mostrarBotonRegreso = params['origen'] === 'prueba'; // Asumiendo que se pasa 'prueba' cuando se accede desde una prueba
      this.cursoId = Number(params['cursoId']);
      this.moduloId = Number(params['moduloId']);
      this.pruebaId = Number(params['pruebaId']);
      this.cargarRetroalimentacion(seccionesFalladas, this.moduloId);
    });
  }

  cargarRetroalimentacion(seccionesFalladas: number[], moduloid: number) {
    if (moduloid === 1) {
      if (seccionesFalladas.includes(1)) {
        this.temaExplicaciones[0] =
          'Retroalimentación para las primeras 3 preguntas.';
        this.seudocodigos[0] = `
          // Completa este seudocódigo con las estructuras de programación adecuadas
          Si (condición) {
            // acción 1
          } [completa] {
            // acción 2
          }
        `;
        this.respuestaCodigo[0] = 'else';
      }
      if (seccionesFalladas.includes(2)) {
        this.temaExplicaciones[1] =
          'Retroalimentación para las siguientes 3 preguntas.';
        this.seudocodigos[1] = 'Pseudocódigo para las siguientes 3 preguntas.';
      }
      if (seccionesFalladas.includes(3)) {
        this.temaExplicaciones[2] =
          'Retroalimentación para las últimas 3 preguntas.';
        this.seudocodigos[2] = 'Pseudocódigo para las últimas 3 preguntas.';
      }
    } else {
      if (seccionesFalladas.includes(1)) {
        this.temaExplicaciones[0] =
          'Retroalimentación para las primeras 3 preguntas.';
        this.seudocodigos[0] = `
      // Completa este seudocódigo con las estructuras de programación adecuadas
      INICI SI
      FIN
    `;
      }
      if (seccionesFalladas.includes(2)) {
        this.temaExplicaciones[1] =
          'Retroalimentación para las siguientes 3 preguntas.';
        this.seudocodigos[1] = 'Pseudocódigo para las siguientes 3 preguntas.';
      }
      if (seccionesFalladas.includes(3)) {
        this.temaExplicaciones[2] =
          'Retroalimentación para las últimas 3 preguntas.';
        this.seudocodigos[2] = 'Pseudocódigo para las últimas 3 preguntas.';
      }
    }
  }

  volverAPrueba() {
    if (this.cursoId && this.moduloId && this.pruebaId) {
      this.router.navigate([
        `/curso/${this.cursoId}/modulo/${this.moduloId}/prueba/${this.pruebaId}`,
      ]);
    }
  }
}
