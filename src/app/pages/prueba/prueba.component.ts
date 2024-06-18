import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CursoService } from '../../../services/curso.service';

@Component({
  selector: 'app-prueba',
  templateUrl: './prueba.component.html',
  styleUrls: ['./prueba.component.css'],
})
export class PruebaComponent implements OnInit {
  cursoId: number | null = null;
  moduloId: number | null = null;
  pruebaId: number | null = null;
  prueba: any = null;
  preguntas: any[] = [];
  respuestasUsuario: any = {};
  mostrarResultados = false;
  resultados = {
    correctas: 0,
    incorrectas: 0,
    seccionesFallidas: [] as number[],
  };

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private cursoService: CursoService
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.cursoId = Number(params.get('cursoId'));
      this.moduloId = Number(params.get('moduloId'));
      this.pruebaId = Number(params.get('pruebaId'));
      this.cargarPrueba();
    });
  }

  cargarPrueba() {
    if (this.cursoId && this.moduloId && this.pruebaId) {
      this.prueba = this.cursoService.obtenerPruebaPorCursoModuloYPruebaId(
        this.cursoId,
        this.moduloId,
        this.pruebaId
      );
      if (this.prueba) {
        this.preguntas = this.prueba.preguntas; // Asegurándose de que la prueba contiene preguntas
      } else {
        console.error('No se encontró la prueba solicitada');
      }
    }
  }

  submitAnswers() {
    this.resultados.correctas = 0;
    this.resultados.incorrectas = 0;
    this.resultados.seccionesFallidas = [];

    this.preguntas.forEach((pregunta, index) => {
      if (this.respuestasUsuario[pregunta.id] === pregunta.respuesta) {
        this.resultados.correctas++;
      } else {
        this.resultados.incorrectas++;
        if (index < 3 && !this.resultados.seccionesFallidas.includes(1)) {
          this.resultados.seccionesFallidas.push(1);
        } else if (
          index >= 3 &&
          index <= 6 &&
          !this.resultados.seccionesFallidas.includes(2)
        ) {
          this.resultados.seccionesFallidas.push(2);
        } else if (
          index >= 6 &&
          !this.resultados.seccionesFallidas.includes(3)
        ) {
          this.resultados.seccionesFallidas.push(3);
        }
      }
    });

    this.mostrarResultados = true;
  }

  irARetroalimentacion() {
    // Navegar a la página de retroalimentación
    this.router.navigate(['/retroalimentacion'], {
      queryParams: { secciones: this.resultados.seccionesFallidas.join(','), origen: 'prueba', cursoId: this.cursoId, moduloId: this.moduloId, pruebaId: this.pruebaId },
    });
  }
}
