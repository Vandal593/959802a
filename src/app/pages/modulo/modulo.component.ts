import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-modulo-detalle',
  templateUrl: './modulo.component.html',
  styleUrls: ['./modulo.component.css'],
})
export class ModuloComponent implements OnInit {
  curso: any;
  modulo: any;
  videos: any[] = [];
  urls: any[] = [];
  pdfs: any[] = [];

  constructor(
    private route: ActivatedRoute,
    private _sanitizer: DomSanitizer,
    private router: Router
  ) {}

  ngOnInit(): void {
    const moduloId = +this.route.snapshot.paramMap.get('moduloId')!;
    this.cargarModulo(moduloId);
  }

  // Este método debería llamarse desde el ngOnInit o desde algún método inicializador
  // para establecer el módulo específico basándose en los ids
  cargarModulo(moduloId: number) {
    // Simular la obtención de datos del curso, normalmente esto se haría con un servicio
    this.curso = {
      id: 1,
      titulo: 'Curso de Fundamentos de programacion',
      modulos: [
        {
          id: 1,
          titulo: 'Estructuras de Programación',
          recursos: [
            {
              nombre:
                'Estructuras de programación (qué es secuencia, condicional, ciclo) | Computación y programación',
              tipo: 'video',
              url: 'https://www.youtube.com/watch?v=rNY5eWogl18',
            },
            {
              nombre: 'Guía de Estructuras básicas de Programación',
              tipo: 'pdf',
              url: 'assets/pdf/Estructuras_Programacion_V1.pdf',
            },
            {
              nombre: 'Estructuras básicas de Programación',
              tipo: 'url',
              url: 'https://www.edu.xunta.gal/centros/iesblancoamorculleredo/aulavirtual/mod/book/view.php?id=19963&chapterid=4298',
            }
          ],
          pruebas: [{ id: 1, nombre: 'Prueba de Estructuras de Programación' }],
        },
        {
          id: 2,
          titulo: 'Estructuras de Datos',
          recursos: [
            {
              nombre: 'Guía de Estructuras de Datos',
              tipo: 'pdf',
              url: 'assets/pdf/Estructuras_de_Datos_V2.pdf',
            },
          ],
          pruebas: [{ id: 1, nombre: 'Prueba de Estructuras de Datos' }],
        },
      ],
    };


    this.modulo = this.curso.modulos.find((m: { id: number; }) => m.id === moduloId);
    if (this.modulo) {
      this.organizarRecursos();
    }
  }

  organizarRecursos() {
    this.videos = this.modulo.recursos.filter(
      (r: { tipo: string }) => r.tipo === 'video'
    );
    this.urls = this.modulo.recursos.filter(
      (r: { tipo: string }) => r.tipo === 'url'
    );
    this.pdfs = this.modulo.recursos.filter(
      (r: { tipo: string }) =>
        r.tipo === 'pdf' || (r.tipo !== 'video' && r.tipo !== 'url')
    );
  }

  getVideoIframe(url: String) {
    var video, results;

    if (url === null) {
      return '';
    }
    results = url.match('[\\?&]v=([^&#]*)');
    video = results === null ? url : results[1];

    return this._sanitizer.bypassSecurityTrustResourceUrl(
      'https://www.youtube.com/embed/' + video
    );
  }

  verRetroalimentacion() {
    // Asumiendo que seccionesActivas se determinan de alguna manera. Ejemplo:
    const seccionesFalladas = [1, 2, 3]; // Ajusta esto según tu lógica de negocio
    this.router.navigate(['/retroalimentacion'], {
      queryParams: { secciones: seccionesFalladas.join(','), moduloId: this.modulo.id },
    });
  }
}
