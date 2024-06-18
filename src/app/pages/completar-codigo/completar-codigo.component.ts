import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-completar-codigo',
  templateUrl: './completar-codigo.component.html',
  styleUrls: ['./completar-codigo.component.css'], // Asegúrate de que el nombre de la propiedad sea 'styleUrls' en plural
})
export class CompletarCodigoComponent {
  @Input() seudocodigo: string | undefined;
  @Input() respuestaCorrecta: string | undefined;

  respuestaUsuario: string = '';
  mensaje: string = '';
  mensajeClase: string = '';

  verificarRespuesta() {
    if (this.respuestaUsuario.trim() === this.respuestaCorrecta) {
      this.mensaje = '¡Respuesta correcta!';
      this.mensajeClase = 'text-success';
    } else {
      this.mensaje = 'Respuesta incorrecta, inténtalo de nuevo.';
      this.mensajeClase = 'text-danger';
    }
  }
}

