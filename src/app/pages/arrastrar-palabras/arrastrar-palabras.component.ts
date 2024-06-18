import { Component } from '@angular/core';

@Component({
  selector: 'app-arrastrar-palabras',
  templateUrl: './arrastrar-palabras.component.html',
  styleUrls: ['./arrastrar-palabras.component.css'],
})
export class ArrastrarPalabrasComponent {
  palabras = [
    'condicional múltiple',
    'estructura condicional simple',
    'condicional anidada',
    'evaluación de cortocircuito',
  ];
  objetivo = [
    'Una entrada y una salida.',
    'Ejecuta diferentes acciones basadas en múltiples comparaciones.',
    'Evaluación donde la segunda condición solo se evalúa si la primera es verdadera (AND) o falsa (OR).',
    'Ejecuta una condición dentro de otra, permitiendo decisiones múltiples y complejas.',
  ]; // Vacío inicialmente
  correctas = [
    'evaluación de cortocircuito',
    'estructura condicional simple',
    'condicional anidada',
    'condicional múltiple',
  ]; // Palabras en el orden correcto

  allowDrop(event: DragEvent) {
    event.preventDefault();
  }

  drag(event: DragEvent, palabra: string) {
    event.dataTransfer?.setData('text', palabra);
  }

  drop(event: DragEvent, index: number) {
    event.preventDefault();
    const data = event.dataTransfer?.getData('text');
    if (data) {
      this.objetivo[index] = data; // Asignar la palabra arrastrada al objetivo
    }
  }

  verificarRespuestas(): boolean[] {
    return this.objetivo.map(
      (palabra, index) => palabra === this.correctas[index]
    );
  }
}
